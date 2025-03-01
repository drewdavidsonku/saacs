import {
  type MethodInfoUnary,
  type ServiceType,
  type Message,
  type PartialMessage,
  type MethodInfo,
  MethodIdempotency,
} from '@bufbuild/protobuf'
import { GenericService } from '../gen/chaincode/common/generic_connect'
import { Contract } from '@hyperledger/fabric-gateway'

// based on connect promise client
export type GatewayClient<T extends ServiceType> = {
  [P in keyof T['methods']]: T['methods'][P] extends MethodInfoUnary<
    infer I,
    infer O
  >
    ? (request: PartialMessage<I>) => Promise<O>
    : never
}

export type BiochainGateway = GatewayClient<typeof GenericService>

export function createBiochainGateway(contract: Contract) {
  return createPromiseClient(GenericService, contract)
}

/**
 * Create a PromiseClient for the given service, invoking RPCs through the
 * given transport.
 */
export function createPromiseClient<T extends ServiceType>(
  service: T,
  contract: Contract,
) {
  return Object.fromEntries(
    Object.entries(service.methods).map(([name, method]) => [
      name,
      createContractFn(contract, method as MethodInfoUnary<any, any>),
    ]),
  ) as GatewayClient<T>
}

type Options = {
  serializer: 'json' | 'binary'
}

type ContractFn<I extends Message<I>, O extends Message<O>> = (
  request: PartialMessage<I>,
  options?: Options,
) => Promise<O>

function createContractFn<I extends Message<I>, O extends Message<O>>(
  contract: Contract,
  method: MethodInfo<I, O>,
): ContractFn<I, O> {
  return async function (input, options) {
    const params =
      (options?.serializer ?? 'json') === 'json'
        ? new method.I(input).toJsonString()
        : new method.I(input).toBinary()

    const decode = (reply: Uint8Array) =>
      (options?.serializer ?? 'json') === 'json'
        ? method.O.fromJsonString(reply.toString())
        : method.O.fromBinary(reply)

    switch (method.idempotency) {
      case MethodIdempotency.Idempotent || MethodIdempotency.NoSideEffects:
        return decode(await contract.evaluateTransaction(method.name, params))
      default:
        return decode(await contract.submitTransaction(method.name, params))
    }
  }
}
