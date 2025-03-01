import { z } from 'zod'
// import { auth, common } from 'saacs'

import { useChaincode } from '~/server/utils/useChaincode'

const querySchema = z.object({
  collectionId: z.string(),
})

export default defineEventHandler(async (event) => {
  const cc = await useChaincode(event)

  const query = await getValidatedQuery(event, (body) =>
    querySchema.safeParse(body),
  )
  if (!query.success) throw query.error.issues
  console.log({ data: query.data })

  const result = await cc.service.listByAttrs(
    new pb.ListByAttrsRequest({
      key: new pb.ItemKey({
        collectionId: query.data.collectionId,
        itemKeyParts: [query.data.collectionId],
        itemType: pb.UserCollectionRoles.typeName,
      }),
      numAttrs: 1,
    }),
  )

  // console.log(result);
  const UserRoles = result.items.map((i) => {
    const s = new pb.UserCollectionRoles()
    i.value?.unpackTo(s)
    return s.toJson({ emitDefaultValues: true })
  })

  console.log({ UserRoles })
  return UserRoles
})
