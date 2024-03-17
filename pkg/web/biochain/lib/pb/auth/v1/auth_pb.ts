// @generated by protoc-gen-es v1.8.0 with parameter "target=ts"
// @generated from file auth/v1/auth.proto (package auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, MessageOptions, MethodOptions, proto3, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum auth.TransactionType
 */
export enum TransactionType {
  /**
   * @generated from enum value: TRANSACTION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: TRANSACTION_TYPE_INVOKE = 1;
   */
  INVOKE = 1,

  /**
   * @generated from enum value: TRANSACTION_TYPE_QUERY = 2;
   */
  QUERY = 2,
}
// Retrieve enum metadata with: proto3.getEnumType(TransactionType)
proto3.util.setEnumType(TransactionType, "auth.TransactionType", [
  { no: 0, name: "TRANSACTION_TYPE_UNSPECIFIED" },
  { no: 1, name: "TRANSACTION_TYPE_INVOKE" },
  { no: 2, name: "TRANSACTION_TYPE_QUERY" },
]);

/**
 * @generated from enum auth.AuthType
 */
export enum AuthType {
  /**
   * @generated from enum value: AUTH_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: AUTH_TYPE_NONE = 1;
   */
  NONE = 1,

  /**
   * @generated from enum value: AUTH_TYPE_ROLE = 2;
   */
  ROLE = 2,

  /**
   * @generated from enum value: AUTH_TYPE_IDENTITY = 3;
   */
  IDENTITY = 3,

  /**
   * @generated from enum value: AUTH_TYPE_EMBEDDED_ROLE = 4;
   */
  EMBEDDED_ROLE = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(AuthType)
proto3.util.setEnumType(AuthType, "auth.AuthType", [
  { no: 0, name: "AUTH_TYPE_UNSPECIFIED" },
  { no: 1, name: "AUTH_TYPE_NONE" },
  { no: 2, name: "AUTH_TYPE_ROLE" },
  { no: 3, name: "AUTH_TYPE_IDENTITY" },
  { no: 4, name: "AUTH_TYPE_EMBEDDED_ROLE" },
]);

/**
 * @generated from enum auth.ItemKind
 */
export enum ItemKind {
  /**
   * @generated from enum value: ITEM_KIND_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * ITEM_KIND_GLOBAL_ITEM = 1;
   * Item's key := {COLLECTION_ID}{TYPE}[...key_paths]
   *
   * @generated from enum value: ITEM_KIND_PRIMARY_ITEM = 2;
   */
  PRIMARY_ITEM = 2,

  /**
   * Item's key := {COLLECTION_ID}{TYPE}<PrimaryKey>{...key_paths}
   *
   * @generated from enum value: ITEM_KIND_SUB_ITEM = 3;
   */
  SUB_ITEM = 3,

  /**
   * @generated from enum value: ITEM_KIND_REFERENCE = 4;
   */
  REFERENCE = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(ItemKind)
proto3.util.setEnumType(ItemKind, "auth.ItemKind", [
  { no: 0, name: "ITEM_KIND_UNSPECIFIED" },
  { no: 2, name: "ITEM_KIND_PRIMARY_ITEM" },
  { no: 3, name: "ITEM_KIND_SUB_ITEM" },
  { no: 4, name: "ITEM_KIND_REFERENCE" },
]);

/**
 * @generated from enum auth.Action
 */
export enum Action {
  /**
   * Should throw an error if used
   *
   * @generated from enum value: ACTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ACTION_UTILITY = 1;
   */
  UTILITY = 1,

  /**
   * View the contents of an item
   *
   * @generated from enum value: ACTION_VIEW = 10;
   */
  VIEW = 10,

  /**
   * Create a new item
   *  - key must not already exist
   *
   * @generated from enum value: ACTION_CREATE = 11;
   */
  CREATE = 11,

  /**
   * Update an existing item
   *   - key must already exist
   *   - potential has paths
   *
   * @generated from enum value: ACTION_UPDATE = 12;
   */
  UPDATE = 12,

  /**
   * Delete an existing item, key must already exist
   *
   * @generated from enum value: ACTION_DELETE = 13;
   */
  DELETE = 13,

  /**
   * Suggest a change to an item, key must already exist
   *
   * @generated from enum value: ACTION_SUGGEST_VIEW = 14;
   */
  SUGGEST_VIEW = 14,

  /**
   * Suggest a change to an item, key must already exist
   *
   * @generated from enum value: ACTION_SUGGEST_CREATE = 15;
   */
  SUGGEST_CREATE = 15,

  /**
   * Delete a suggestion, key must already exist
   *
   * @generated from enum value: ACTION_SUGGEST_DELETE = 16;
   */
  SUGGEST_DELETE = 16,

  /**
   * Approve a suggestion and apply it to the item, key must already exist
   *
   * @generated from enum value: ACTION_SUGGEST_APPROVE = 17;
   */
  SUGGEST_APPROVE = 17,

  /**
   * @generated from enum value: ACTION_VIEW_HISTORY = 18;
   */
  VIEW_HISTORY = 18,

  /**
   * @generated from enum value: ACTION_VIEW_HIDDEN_TXS = 19;
   */
  VIEW_HIDDEN_TXS = 19,

  /**
   * @generated from enum value: ACTION_HIDE_TX = 20;
   */
  HIDE_TX = 20,

  /**
   * @generated from enum value: ACTION_UNHIDE_TX = 21;
   */
  UNHIDE_TX = 21,

  /**
   * @generated from enum value: ACTION_REFERENCE_CREATE = 30;
   */
  REFERENCE_CREATE = 30,

  /**
   * @generated from enum value: ACTION_REFERENCE_DELETE = 31;
   */
  REFERENCE_DELETE = 31,

  /**
   * @generated from enum value: ACTION_REFERENCE_VIEW = 32;
   */
  REFERENCE_VIEW = 32,
}
// Retrieve enum metadata with: proto3.getEnumType(Action)
proto3.util.setEnumType(Action, "auth.Action", [
  { no: 0, name: "ACTION_UNSPECIFIED" },
  { no: 1, name: "ACTION_UTILITY" },
  { no: 10, name: "ACTION_VIEW" },
  { no: 11, name: "ACTION_CREATE" },
  { no: 12, name: "ACTION_UPDATE" },
  { no: 13, name: "ACTION_DELETE" },
  { no: 14, name: "ACTION_SUGGEST_VIEW" },
  { no: 15, name: "ACTION_SUGGEST_CREATE" },
  { no: 16, name: "ACTION_SUGGEST_DELETE" },
  { no: 17, name: "ACTION_SUGGEST_APPROVE" },
  { no: 18, name: "ACTION_VIEW_HISTORY" },
  { no: 19, name: "ACTION_VIEW_HIDDEN_TXS" },
  { no: 20, name: "ACTION_HIDE_TX" },
  { no: 21, name: "ACTION_UNHIDE_TX" },
  { no: 30, name: "ACTION_REFERENCE_CREATE" },
  { no: 31, name: "ACTION_REFERENCE_DELETE" },
  { no: 32, name: "ACTION_REFERENCE_VIEW" },
]);

/**
 * @generated from enum auth.TxError
 */
export enum TxError {
  /**
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: REQUEST_INVALID = 1;
   */
  REQUEST_INVALID = 1,

  /**
   * @generated from enum value: RUNTIME = 2;
   */
  RUNTIME = 2,

  /**
   * @generated from enum value: RUNTIME_BAD_OPS = 3;
   */
  RUNTIME_BAD_OPS = 3,

  /**
   * The provided key is not in the world state
   *
   * @generated from enum value: KEY_NOT_FOUND = 4;
   */
  KEY_NOT_FOUND = 4,

  /**
   * The provided key is already in the world state
   *
   * @generated from enum value: KEY_ALREADY_EXISTS = 5;
   */
  KEY_ALREADY_EXISTS = 5,

  /**
   * The collection id is invalid
   *
   * @generated from enum value: COLLECTION_INVALID_ID = 11;
   */
  COLLECTION_INVALID_ID = 11,

  /**
   * The collection is not registered and thus cannot be accessed
   *
   * @generated from enum value: COLLECTION_UNREGISTERED = 12;
   */
  COLLECTION_UNREGISTERED = 12,

  /**
   * The collection is already registered and thus cannot be registered again
   *
   * @generated from enum value: COLLECTION_ALREADY_REGISTERED = 13;
   */
  COLLECTION_ALREADY_REGISTERED = 13,

  /**
   * The collection is invalid (e.g. the collection does not have a default ACLEntry)
   *
   * @generated from enum value: COLLECTION_INVALID = 14;
   */
  COLLECTION_INVALID = 14,

  /**
   * The item type in the collection is invalid
   *
   * @generated from enum value: COLLECTION_INVALID_ITEM_TYPE = 15;
   */
  COLLECTION_INVALID_ITEM_TYPE = 15,

  /**
   * The role id in the collection is invalid
   *
   * @generated from enum value: COLLECTION_INVALID_ROLE_ID = 16;
   */
  COLLECTION_INVALID_ROLE_ID = 16,

  /**
   * The user does not have permission to perform the operation
   *
   * @generated from enum value: USER_INVALID_ID = 20;
   */
  USER_INVALID_ID = 20,

  /**
   * The certificate is not registered as a user and thus cannot be used
   *
   * @generated from enum value: USER_UNREGISTERED = 21;
   */
  USER_UNREGISTERED = 21,

  /**
   * The certificate is already registered as a user and thus cannot be registered again
   *
   * @generated from enum value: USER_ALREADY_REGISTERED = 22;
   */
  USER_ALREADY_REGISTERED = 22,

  /**
   * The user is invalid
   *
   * @generated from enum value: USER_INVALID = 23;
   */
  USER_INVALID = 23,

  /**
   * The user does not have a role
   *
   * @generated from enum value: USER_NO_ROLE = 24;
   */
  USER_NO_ROLE = 24,

  /**
   * USER_DELETED_ROLE          = 25;
   * The user does not have permission to perform the operation
   *
   * @generated from enum value: USER_PERMISSION_DENIED = 26;
   */
  USER_PERMISSION_DENIED = 26,

  /**
   * The Item's key is invalid
   *
   * @generated from enum value: ITEM_INVALID_ID = 31;
   */
  ITEM_INVALID_ID = 31,

  /**
   * The Item is not registered and thus cannot be accessed
   *
   * @generated from enum value: ITEM_UNREGISTERED = 32;
   */
  ITEM_UNREGISTERED = 32,

  /**
   * The Item is already registered and thus cannot be registered again
   *
   * @generated from enum value: ITEM_ALREADY_REGISTERED = 33;
   */
  ITEM_ALREADY_REGISTERED = 33,

  /**
   * The Item is invalid
   *
   * @generated from enum value: ITEM_INVALID = 34;
   */
  ITEM_INVALID = 34,

  /**
   * The item field path is invalid for the item type
   *
   * @generated from enum value: INVALID_ITEM_FIELD_PATH = 35;
   */
  INVALID_ITEM_FIELD_PATH = 35,

  /**
   * The value at the item field path is invalid for the item type
   *
   * @generated from enum value: INVALID_ITEM_FIELD_VALUE = 36;
   */
  INVALID_ITEM_FIELD_VALUE = 36,
}
// Retrieve enum metadata with: proto3.getEnumType(TxError)
proto3.util.setEnumType(TxError, "auth.TxError", [
  { no: 0, name: "UNSPECIFIED" },
  { no: 1, name: "REQUEST_INVALID" },
  { no: 2, name: "RUNTIME" },
  { no: 3, name: "RUNTIME_BAD_OPS" },
  { no: 4, name: "KEY_NOT_FOUND" },
  { no: 5, name: "KEY_ALREADY_EXISTS" },
  { no: 11, name: "COLLECTION_INVALID_ID" },
  { no: 12, name: "COLLECTION_UNREGISTERED" },
  { no: 13, name: "COLLECTION_ALREADY_REGISTERED" },
  { no: 14, name: "COLLECTION_INVALID" },
  { no: 15, name: "COLLECTION_INVALID_ITEM_TYPE" },
  { no: 16, name: "COLLECTION_INVALID_ROLE_ID" },
  { no: 20, name: "USER_INVALID_ID" },
  { no: 21, name: "USER_UNREGISTERED" },
  { no: 22, name: "USER_ALREADY_REGISTERED" },
  { no: 23, name: "USER_INVALID" },
  { no: 24, name: "USER_NO_ROLE" },
  { no: 26, name: "USER_PERMISSION_DENIED" },
  { no: 31, name: "ITEM_INVALID_ID" },
  { no: 32, name: "ITEM_UNREGISTERED" },
  { no: 33, name: "ITEM_ALREADY_REGISTERED" },
  { no: 34, name: "ITEM_INVALID" },
  { no: 35, name: "INVALID_ITEM_FIELD_PATH" },
  { no: 36, name: "INVALID_ITEM_FIELD_VALUE" },
]);

/**
 * @generated from message auth.User
 */
export class User extends Message<User> {
  /**
   * @generated from field: string msp_id = 1;
   */
  mspId = "";

  /**
   * @generated from field: string user_id = 2;
   */
  userId = "";

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User {
    return new User().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User {
    return new User().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User {
    return new User().fromJsonString(jsonString, options);
  }

  static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean {
    return proto3.util.equals(User, a, b);
  }
}

/**
 * @generated from message auth.KeySchema
 */
export class KeySchema extends Message<KeySchema> {
  /**
   * The item type of the key
   *
   * @generated from field: string item_type = 1;
   */
  itemType = "";

  /**
   * The kind of item that the key is for
   *
   * @generated from field: auth.ItemKind item_kind = 2;
   */
  itemKind = ItemKind.UNSPECIFIED;

  /**
   * The paths that make up the key
   *
   * @generated from field: google.protobuf.FieldMask properties = 3;
   */
  properties?: FieldMask;

  constructor(data?: PartialMessage<KeySchema>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.KeySchema";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "item_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "item_kind", kind: "enum", T: proto3.getEnumType(ItemKind) },
    { no: 3, name: "properties", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeySchema {
    return new KeySchema().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeySchema {
    return new KeySchema().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeySchema {
    return new KeySchema().fromJsonString(jsonString, options);
  }

  static equals(a: KeySchema | PlainMessage<KeySchema> | undefined, b: KeySchema | PlainMessage<KeySchema> | undefined): boolean {
    return proto3.util.equals(KeySchema, a, b);
  }
}

/**
 * Can be used as the history entry
 *
 * @generated from message auth.StateActivity
 */
export class StateActivity extends Message<StateActivity> {
  /**
   * The transaction id that caused the change
   *
   * @generated from field: string tx_id = 1;
   */
  txId = "";

  /**
   * The msp of the user that caused the change
   *
   * @generated from field: string msp_id = 2;
   */
  mspId = "";

  /**
   * The id of the user that caused the change
   *
   * @generated from field: string user_id = 3;
   */
  userId = "";

  /**
   * The timestamp of the change
   *
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp;

  /**
   * A note about the change
   *
   * @generated from field: string note = 5;
   */
  note = "";

  constructor(data?: PartialMessage<StateActivity>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.StateActivity";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
    { no: 5, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StateActivity {
    return new StateActivity().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StateActivity {
    return new StateActivity().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StateActivity {
    return new StateActivity().fromJsonString(jsonString, options);
  }

  static equals(a: StateActivity | PlainMessage<StateActivity> | undefined, b: StateActivity | PlainMessage<StateActivity> | undefined): boolean {
    return proto3.util.equals(StateActivity, a, b);
  }
}

/**
 * @generated from message auth.Operation
 */
export class Operation extends Message<Operation> {
  /**
   * @generated from field: auth.Action action = 1;
   */
  action = Action.UNSPECIFIED;

  /**
   * @generated from field: string collection_id = 2;
   */
  collectionId = "";

  /**
   * @generated from field: string item_type = 3;
   */
  itemType = "";

  /**
   * @generated from field: google.protobuf.FieldMask paths = 5;
   */
  paths?: FieldMask;

  constructor(data?: PartialMessage<Operation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Operation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "action", kind: "enum", T: proto3.getEnumType(Action) },
    { no: 2, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "item_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "paths", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Operation {
    return new Operation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Operation {
    return new Operation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Operation {
    return new Operation().fromJsonString(jsonString, options);
  }

  static equals(a: Operation | PlainMessage<Operation> | undefined, b: Operation | PlainMessage<Operation> | undefined): boolean {
    return proto3.util.equals(Operation, a, b);
  }
}

/**
 * @generated from extension: auth.Operation operation = 57775;
 */
export const operation = proto3.makeExtension<MethodOptions, Operation>(
  "auth.operation",
  MethodOptions,
  () => ({ no: 57775, kind: "message", T: Operation }),
);

/**
 * @generated from extension: auth.TransactionType transaction_type = 50556;
 */
export const transaction_type = proto3.makeExtension<MethodOptions, TransactionType>(
  "auth.transaction_type",
  MethodOptions,
  () => ({ no: 50556, kind: "enum", T: proto3.getEnumType(TransactionType) }),
);

/**
 * @generated from extension: auth.KeySchema key_schema = 54599;
 */
export const key_schema = proto3.makeExtension<MessageOptions, KeySchema>(
  "auth.key_schema",
  MessageOptions,
  () => ({ no: 54599, kind: "message", T: KeySchema }),
);
