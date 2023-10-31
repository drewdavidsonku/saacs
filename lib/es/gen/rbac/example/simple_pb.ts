// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file rbac/example/simple.proto (package example, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message example.SimpleMessage
 */
export class SimpleMessage extends Message<SimpleMessage> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: bool is_simple = 2;
   */
  isSimple = false;

  /**
   * @generated from field: repeated int32 sample_list = 3;
   */
  sampleList: number[] = [];

  constructor(data?: PartialMessage<SimpleMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "example.SimpleMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_simple", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "sample_list", kind: "scalar", T: 5 /* ScalarType.INT32 */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SimpleMessage {
    return new SimpleMessage().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SimpleMessage {
    return new SimpleMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SimpleMessage {
    return new SimpleMessage().fromJsonString(jsonString, options);
  }

  static equals(a: SimpleMessage | PlainMessage<SimpleMessage> | undefined, b: SimpleMessage | PlainMessage<SimpleMessage> | undefined): boolean {
    return proto3.util.equals(SimpleMessage, a, b);
  }
}
