// @generated by protoc-gen-es v1.3.1
// @generated from file chaincode/auth/common/generic.proto (package auth.common, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { FieldMask, proto3 } from "@bufbuild/protobuf";
import { HiddenTx, HiddenTxList, History, Item, ItemKey, Operation, Reference, ReferenceKey, Suggestion, User } from "../../../auth/v1/auth_pb.js";

/**
 * ══════════════════════════════════ Helper ═════════════════════════════════════
 * ────────────────────────────────── Query ──────────────────────────────────────
 *
 * @generated from message auth.common.GetAllTypesResponse
 */
export const GetAllTypesResponse = proto3.makeMessageType(
  "auth.common.GetAllTypesResponse",
  () => [
    { no: 1, name: "types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);

/**
 * @generated from message auth.common.GetCurrentUserResponse
 */
export const GetCurrentUserResponse = proto3.makeMessageType(
  "auth.common.GetCurrentUserResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: User },
  ],
);

/**
 * ──────────────────────────────── Invoke ───────────────────────────────────────
 *
 * @generated from message auth.common.BootstrapRequest
 */
export const BootstrapRequest = proto3.makeMessageType(
  "auth.common.BootstrapRequest",
  () => [
    { no: 1, name: "default_types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "add_default_setup", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message auth.common.BootstrapResponse
 */
export const BootstrapResponse = proto3.makeMessageType(
  "auth.common.BootstrapResponse",
  [],
);

/**
 * @generated from message auth.common.AuthorizeOperationRequest
 */
export const AuthorizeOperationRequest = proto3.makeMessageType(
  "auth.common.AuthorizeOperationRequest",
  () => [
    { no: 2, name: "operation", kind: "message", T: Operation },
  ],
);

/**
 * @generated from message auth.common.AuthorizeOperationResponse
 */
export const AuthorizeOperationResponse = proto3.makeMessageType(
  "auth.common.AuthorizeOperationResponse",
  () => [
    { no: 1, name: "authorized", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message auth.common.CreateUserResponse
 */
export const CreateUserResponse = proto3.makeMessageType(
  "auth.common.CreateUserResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: User },
  ],
);

/**
 * Get
 *
 * @generated from message auth.common.GetRequest
 */
export const GetRequest = proto3.makeMessageType(
  "auth.common.GetRequest",
  () => [
    { no: 3, name: "item", kind: "message", T: Item },
  ],
);

/**
 * @generated from message auth.common.GetResponse
 */
export const GetResponse = proto3.makeMessageType(
  "auth.common.GetResponse",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
  ],
);

/**
 * @generated from message auth.common.ListRequest
 */
export const ListRequest = proto3.makeMessageType(
  "auth.common.ListRequest",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "item", kind: "message", T: Item },
  ],
);

/**
 * @generated from message auth.common.ListResponse
 */
export const ListResponse = proto3.makeMessageType(
  "auth.common.ListResponse",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "items", kind: "message", T: Item, repeated: true },
  ],
);

/**
 * @generated from message auth.common.ListByCollectionRequest
 */
export const ListByCollectionRequest = proto3.makeMessageType(
  "auth.common.ListByCollectionRequest",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "item", kind: "message", T: Item },
  ],
);

/**
 * @generated from message auth.common.ListByCollectionResponse
 */
export const ListByCollectionResponse = proto3.makeMessageType(
  "auth.common.ListByCollectionResponse",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "items", kind: "message", T: Item, repeated: true },
  ],
);

/**
 * @generated from message auth.common.ListByAttrsRequest
 */
export const ListByAttrsRequest = proto3.makeMessageType(
  "auth.common.ListByAttrsRequest",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "item", kind: "message", T: Item },
    { no: 4, name: "num_attrs", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message auth.common.ListByAttrsResponse
 */
export const ListByAttrsResponse = proto3.makeMessageType(
  "auth.common.ListByAttrsResponse",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "items", kind: "message", T: Item, repeated: true },
  ],
);

/**
 * ──────────────────────────────── Invoke ───────────────────────────────────────
 * Create
 *
 * @generated from message auth.common.CreateRequest
 */
export const CreateRequest = proto3.makeMessageType(
  "auth.common.CreateRequest",
  () => [
    { no: 2, name: "item", kind: "message", T: Item },
  ],
);

/**
 * @generated from message auth.common.CreateResponse
 */
export const CreateResponse = proto3.makeMessageType(
  "auth.common.CreateResponse",
  () => [
    { no: 2, name: "item", kind: "message", T: Item },
  ],
);

/**
 * @generated from message auth.common.UpdateRequest
 */
export const UpdateRequest = proto3.makeMessageType(
  "auth.common.UpdateRequest",
  () => [
    { no: 2, name: "item", kind: "message", T: Item },
    { no: 3, name: "update_mask", kind: "message", T: FieldMask },
  ],
);

/**
 * @generated from message auth.common.UpdateResponse
 */
export const UpdateResponse = proto3.makeMessageType(
  "auth.common.UpdateResponse",
  () => [
    { no: 2, name: "item", kind: "message", T: Item },
  ],
);

/**
 * @generated from message auth.common.DeleteRequest
 */
export const DeleteRequest = proto3.makeMessageType(
  "auth.common.DeleteRequest",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
    { no: 4, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message auth.common.DeleteResponse
 */
export const DeleteResponse = proto3.makeMessageType(
  "auth.common.DeleteResponse",
  () => [
    { no: 2, name: "item", kind: "message", T: Item },
  ],
);

/**
 * History
 *
 * @generated from message auth.common.HistoryRequest
 */
export const HistoryRequest = proto3.makeMessageType(
  "auth.common.HistoryRequest",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
  ],
);

/**
 * @generated from message auth.common.HistoryResponse
 */
export const HistoryResponse = proto3.makeMessageType(
  "auth.common.HistoryResponse",
  () => [
    { no: 2, name: "history", kind: "message", T: History },
  ],
);

/**
 * HiddenTx
 *
 * @generated from message auth.common.HiddenTxRequest
 */
export const HiddenTxRequest = proto3.makeMessageType(
  "auth.common.HiddenTxRequest",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
  ],
);

/**
 * @generated from message auth.common.HiddenTxResponse
 */
export const HiddenTxResponse = proto3.makeMessageType(
  "auth.common.HiddenTxResponse",
  () => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTx, repeated: true },
  ],
);

/**
 * @generated from message auth.common.HideTxRequest
 */
export const HideTxRequest = proto3.makeMessageType(
  "auth.common.HideTxRequest",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
    { no: 2, name: "hidden_tx", kind: "message", T: HiddenTx },
  ],
);

/**
 * @generated from message auth.common.HideTxResponse
 */
export const HideTxResponse = proto3.makeMessageType(
  "auth.common.HideTxResponse",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTxList },
  ],
);

/**
 * @generated from message auth.common.UnHideTxRequest
 */
export const UnHideTxRequest = proto3.makeMessageType(
  "auth.common.UnHideTxRequest",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
    { no: 2, name: "tx_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message auth.common.UnHideTxResponse
 */
export const UnHideTxResponse = proto3.makeMessageType(
  "auth.common.UnHideTxResponse",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTxList },
  ],
);

/**
 * ════════════════════════════════ References ═════════════════════════════════════
 * ──────────────────────────────── Query ──────────────────────────────────────────
 *
 * @generated from message auth.common.ReferenceRequest
 */
export const ReferenceRequest = proto3.makeMessageType(
  "auth.common.ReferenceRequest",
  () => [
    { no: 1, name: "reference", kind: "message", T: ReferenceKey },
  ],
);

/**
 * @generated from message auth.common.ReferenceResponse
 */
export const ReferenceResponse = proto3.makeMessageType(
  "auth.common.ReferenceResponse",
  () => [
    { no: 1, name: "exists", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "reference", kind: "message", T: Reference },
  ],
);

/**
 * @generated from message auth.common.ReferenceByCollectionRequest
 */
export const ReferenceByCollectionRequest = proto3.makeMessageType(
  "auth.common.ReferenceByCollectionRequest",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message auth.common.ReferenceByCollectionResponse
 */
export const ReferenceByCollectionResponse = proto3.makeMessageType(
  "auth.common.ReferenceByCollectionResponse",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "references", kind: "message", T: ReferenceKey, repeated: true },
  ],
);

/**
 * @generated from message auth.common.ReferenceByPartialKeyRequest
 */
export const ReferenceByPartialKeyRequest = proto3.makeMessageType(
  "auth.common.ReferenceByPartialKeyRequest",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "reference", kind: "message", T: ReferenceKey },
  ],
);

/**
 * @generated from message auth.common.ReferenceByPartialKeyResponse
 */
export const ReferenceByPartialKeyResponse = proto3.makeMessageType(
  "auth.common.ReferenceByPartialKeyResponse",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "references", kind: "message", T: ReferenceKey, repeated: true },
  ],
);

/**
 * Get all of the collections
 *
 * @generated from message auth.common.ReferenceByItemRequest
 */
export const ReferenceByItemRequest = proto3.makeMessageType(
  "auth.common.ReferenceByItemRequest",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "item_key", kind: "message", T: ItemKey },
  ],
);

/**
 * @generated from message auth.common.ReferenceByItemResponse
 */
export const ReferenceByItemResponse = proto3.makeMessageType(
  "auth.common.ReferenceByItemResponse",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "references", kind: "message", T: ReferenceKey, repeated: true },
  ],
);

/**
 * @generated from message auth.common.ReferenceCreateRequest
 */
export const ReferenceCreateRequest = proto3.makeMessageType(
  "auth.common.ReferenceCreateRequest",
  () => [
    { no: 1, name: "reference", kind: "message", T: Reference },
  ],
);

/**
 * @generated from message auth.common.ReferenceCreateResponse
 */
export const ReferenceCreateResponse = proto3.makeMessageType(
  "auth.common.ReferenceCreateResponse",
  () => [
    { no: 1, name: "reference", kind: "message", T: Reference },
  ],
);

/**
 * @generated from message auth.common.ReferenceDeleteRequest
 */
export const ReferenceDeleteRequest = proto3.makeMessageType(
  "auth.common.ReferenceDeleteRequest",
  () => [
    { no: 1, name: "reference", kind: "message", T: Reference },
  ],
);

/**
 * @generated from message auth.common.ReferenceDeleteResponse
 */
export const ReferenceDeleteResponse = proto3.makeMessageType(
  "auth.common.ReferenceDeleteResponse",
  () => [
    { no: 1, name: "reference", kind: "message", T: Reference },
  ],
);

/**
 * @generated from message auth.common.SuggestionRequest
 */
export const SuggestionRequest = proto3.makeMessageType(
  "auth.common.SuggestionRequest",
  () => [
    { no: 1, name: "item_key", kind: "message", T: ItemKey },
    { no: 2, name: "suggestion_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message auth.common.SuggestionResponse
 */
export const SuggestionResponse = proto3.makeMessageType(
  "auth.common.SuggestionResponse",
  () => [
    { no: 1, name: "suggestion", kind: "message", T: Suggestion },
  ],
);

/**
 * @generated from message auth.common.SuggestionListRequest
 */
export const SuggestionListRequest = proto3.makeMessageType(
  "auth.common.SuggestionListRequest",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message auth.common.SuggestionListResponse
 */
export const SuggestionListResponse = proto3.makeMessageType(
  "auth.common.SuggestionListResponse",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "suggestions", kind: "message", T: Suggestion, repeated: true },
  ],
);

/**
 * @generated from message auth.common.SuggestionListByCollectionRequest
 */
export const SuggestionListByCollectionRequest = proto3.makeMessageType(
  "auth.common.SuggestionListByCollectionRequest",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message auth.common.SuggestionListByCollectionResponse
 */
export const SuggestionListByCollectionResponse = proto3.makeMessageType(
  "auth.common.SuggestionListByCollectionResponse",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "suggestions", kind: "message", T: Suggestion, repeated: true },
  ],
);

/**
 * @generated from message auth.common.SuggestionListByItemRequest
 */
export const SuggestionListByItemRequest = proto3.makeMessageType(
  "auth.common.SuggestionListByItemRequest",
  () => [
    { no: 1, name: "item_key", kind: "message", T: ItemKey },
  ],
);

/**
 * @generated from message auth.common.SuggestionListByItemResponse
 */
export const SuggestionListByItemResponse = proto3.makeMessageType(
  "auth.common.SuggestionListByItemResponse",
  () => [
    { no: 1, name: "suggestions", kind: "message", T: Suggestion, repeated: true },
  ],
);

/**
 * @generated from message auth.common.SuggestionByPartialKeyRequest
 */
export const SuggestionByPartialKeyRequest = proto3.makeMessageType(
  "auth.common.SuggestionByPartialKeyRequest",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "num_attrs", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "item_key", kind: "message", T: ItemKey },
    { no: 5, name: "suggestion_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message auth.common.SuggestionByPartialKeyResponse
 */
export const SuggestionByPartialKeyResponse = proto3.makeMessageType(
  "auth.common.SuggestionByPartialKeyResponse",
  () => [
    { no: 1, name: "bookmark", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "suggestions", kind: "message", T: Suggestion, repeated: true },
  ],
);

/**
 * @generated from message auth.common.SuggestionCreateRequest
 */
export const SuggestionCreateRequest = proto3.makeMessageType(
  "auth.common.SuggestionCreateRequest",
  () => [
    { no: 1, name: "suggestion", kind: "message", T: Suggestion },
  ],
);

/**
 * @generated from message auth.common.SuggestionCreateResponse
 */
export const SuggestionCreateResponse = proto3.makeMessageType(
  "auth.common.SuggestionCreateResponse",
  () => [
    { no: 1, name: "suggestion", kind: "message", T: Suggestion },
  ],
);

/**
 * @generated from message auth.common.SuggestionDeleteRequest
 */
export const SuggestionDeleteRequest = proto3.makeMessageType(
  "auth.common.SuggestionDeleteRequest",
  () => [
    { no: 1, name: "item_key", kind: "message", T: ItemKey },
    { no: 2, name: "suggestion_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message auth.common.SuggestionDeleteResponse
 */
export const SuggestionDeleteResponse = proto3.makeMessageType(
  "auth.common.SuggestionDeleteResponse",
  () => [
    { no: 4, name: "suggestion", kind: "message", T: Suggestion },
  ],
);

/**
 * @generated from message auth.common.SuggestionApproveRequest
 */
export const SuggestionApproveRequest = proto3.makeMessageType(
  "auth.common.SuggestionApproveRequest",
  () => [
    { no: 1, name: "item_key", kind: "message", T: ItemKey },
    { no: 2, name: "suggestion_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message auth.common.SuggestionApproveResponse
 */
export const SuggestionApproveResponse = proto3.makeMessageType(
  "auth.common.SuggestionApproveResponse",
  () => [
    { no: 1, name: "suggestion", kind: "message", T: Suggestion },
    { no: 2, name: "item", kind: "message", T: Item },
  ],
);
