// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file auth/v1/auth.proto (package auth, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, FieldMask, Message, proto3, Timestamp } from "@bufbuild/protobuf";

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
 * @generated from enum auth.ObjectDomain
 */
export enum ObjectDomain {
  /**
   * @generated from enum value: OBJECT_DOMAIN_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Object's key := {TYPE}{COLLECTION_ID}[...key_paths]
   *
   * @generated from enum value: OBJECT_DOMAIN_OBJECT = 1;
   */
  OBJECT = 1,

  /**
   * Object's key := {TYPE}<PrimaryKey>{...key_paths}
   *
   * @generated from enum value: OBJECT_DOMAIN_SUB_OBJECT = 2;
   */
  SUB_OBJECT = 2,

  /**
   * @generated from enum value: OBJECT_DOMAIN_REFERENCE = 3;
   */
  REFERENCE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(ObjectDomain)
proto3.util.setEnumType(ObjectDomain, "auth.ObjectDomain", [
  { no: 0, name: "OBJECT_DOMAIN_UNSPECIFIED" },
  { no: 1, name: "OBJECT_DOMAIN_OBJECT" },
  { no: 2, name: "OBJECT_DOMAIN_SUB_OBJECT" },
  { no: 3, name: "OBJECT_DOMAIN_REFERENCE" },
]);

/**
 * Action - The action to be performed during the operation
 *
 * # Action Groups
 *   - UNSPECIFIED: null or not set
 *   - REGISTER:    Used to register a new user or collection (always allowed)
 *   - COLLECTION:  Used to manage collections permissions
 *   - MEMBERSHIP:  Used to manage membership of a collection
 *   - OBJECT:      Used to manage objects in a collection
 *
 * @generated from enum auth.Action
 */
export enum Action {
  /**
   * @generated from enum value: ACTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used to register
   *
   * @generated from enum value: ACTION_REGISTER_USER = 1;
   */
  REGISTER_USER = 1,

  /**
   * Used to register
   *
   * @generated from enum value: ACTION_REGISTER_COLLECTION = 2;
   */
  REGISTER_COLLECTION = 2,

  /**
   * Used to modify the default permissions of a collection
   *
   * @generated from enum value: ACTION_MODIFY_DEFAULT_PERMISSIONS = 3;
   */
  MODIFY_DEFAULT_PERMISSIONS = 3,

  /**
   * @generated from enum value: ACTION_OBJECT_VIEW = 10;
   */
  OBJECT_VIEW = 10,

  /**
   * @generated from enum value: ACTION_OBJECT_CREATE = 11;
   */
  OBJECT_CREATE = 11,

  /**
   * @generated from enum value: ACTION_OBJECT_UPDATE = 12;
   */
  OBJECT_UPDATE = 12,

  /**
   * @generated from enum value: ACTION_OBJECT_DELETE = 13;
   */
  OBJECT_DELETE = 13,

  /**
   * @generated from enum value: ACTION_OBJECT_SUGGEST_VIEW = 14;
   */
  OBJECT_SUGGEST_VIEW = 14,

  /**
   * @generated from enum value: ACTION_OBJECT_SUGGEST_CREATE = 15;
   */
  OBJECT_SUGGEST_CREATE = 15,

  /**
   * @generated from enum value: ACTION_OBJECT_SUGGEST_DELETE = 16;
   */
  OBJECT_SUGGEST_DELETE = 16,

  /**
   * @generated from enum value: ACTION_OBJECT_SUGGEST_APPROVE = 17;
   */
  OBJECT_SUGGEST_APPROVE = 17,

  /**
   * @generated from enum value: ACTION_OBJECT_VIEW_HISTORY = 18;
   */
  OBJECT_VIEW_HISTORY = 18,

  /**
   * @generated from enum value: ACTION_OBJECT_VIEW_HIDDEN_TXS = 19;
   */
  OBJECT_VIEW_HIDDEN_TXS = 19,

  /**
   * @generated from enum value: ACTION_OBJECT_HIDE_TX = 20;
   */
  OBJECT_HIDE_TX = 20,
}
// Retrieve enum metadata with: proto3.getEnumType(Action)
proto3.util.setEnumType(Action, "auth.Action", [
  { no: 0, name: "ACTION_UNSPECIFIED" },
  { no: 1, name: "ACTION_REGISTER_USER" },
  { no: 2, name: "ACTION_REGISTER_COLLECTION" },
  { no: 3, name: "ACTION_MODIFY_DEFAULT_PERMISSIONS" },
  { no: 10, name: "ACTION_OBJECT_VIEW" },
  { no: 11, name: "ACTION_OBJECT_CREATE" },
  { no: 12, name: "ACTION_OBJECT_UPDATE" },
  { no: 13, name: "ACTION_OBJECT_DELETE" },
  { no: 14, name: "ACTION_OBJECT_SUGGEST_VIEW" },
  { no: 15, name: "ACTION_OBJECT_SUGGEST_CREATE" },
  { no: 16, name: "ACTION_OBJECT_SUGGEST_DELETE" },
  { no: 17, name: "ACTION_OBJECT_SUGGEST_APPROVE" },
  { no: 18, name: "ACTION_OBJECT_VIEW_HISTORY" },
  { no: 19, name: "ACTION_OBJECT_VIEW_HIDDEN_TXS" },
  { no: 20, name: "ACTION_OBJECT_HIDE_TX" },
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
   * @generated from enum value: KEY_NOT_FOUND = 4;
   */
  KEY_NOT_FOUND = 4,

  /**
   * @generated from enum value: KEY_ALREADY_EXISTS = 5;
   */
  KEY_ALREADY_EXISTS = 5,

  /**
   * Collection Errors 
   *
   * @generated from enum value: COLLECTION_INVALID_ID = 11;
   */
  COLLECTION_INVALID_ID = 11,

  /**
   * @generated from enum value: COLLECTION_UNREGISTERED = 12;
   */
  COLLECTION_UNREGISTERED = 12,

  /**
   * @generated from enum value: COLLECTION_ALREADY_REGISTERED = 13;
   */
  COLLECTION_ALREADY_REGISTERED = 13,

  /**
   * @generated from enum value: COLLECTION_INVALID = 14;
   */
  COLLECTION_INVALID = 14,

  /**
   * @generated from enum value: COLLECTION_INVALID_OBJECT_TYPE = 15;
   */
  COLLECTION_INVALID_OBJECT_TYPE = 15,

  /**
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
   * @generated from enum value: USER_UNREGISTERED = 21;
   */
  USER_UNREGISTERED = 21,

  /**
   * @generated from enum value: USER_ALREADY_REGISTERED = 22;
   */
  USER_ALREADY_REGISTERED = 22,

  /**
   * @generated from enum value: USER_INVALID = 23;
   */
  USER_INVALID = 23,

  /**
   * @generated from enum value: USER_NO_ROLE = 24;
   */
  USER_NO_ROLE = 24,

  /**
   * @generated from enum value: USER_DELETED_ROLE = 25;
   */
  USER_DELETED_ROLE = 25,

  /**
   * @generated from enum value: USER_PERMISSION_DENIED = 26;
   */
  USER_PERMISSION_DENIED = 26,

  /**
   * The object id is invalid
   *
   * @generated from enum value: OBJECT_INVALID_ID = 31;
   */
  OBJECT_INVALID_ID = 31,

  /**
   * The object is not registered
   *
   * @generated from enum value: OBJECT_UNREGISTERED = 32;
   */
  OBJECT_UNREGISTERED = 32,

  /**
   * The object is already registered
   *
   * @generated from enum value: OBJECT_ALREADY_REGISTERED = 33;
   */
  OBJECT_ALREADY_REGISTERED = 33,

  /**
   * The object is invalid
   *
   * @generated from enum value: OBJECT_INVALID = 34;
   */
  OBJECT_INVALID = 34,

  /**
   * @generated from enum value: INVALID_OBJECT_FIELD_PATH = 35;
   */
  INVALID_OBJECT_FIELD_PATH = 35,

  /**
   * @generated from enum value: INVALID_OBJECT_FIELD_VALUE = 36;
   */
  INVALID_OBJECT_FIELD_VALUE = 36,
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
  { no: 15, name: "COLLECTION_INVALID_OBJECT_TYPE" },
  { no: 16, name: "COLLECTION_INVALID_ROLE_ID" },
  { no: 20, name: "USER_INVALID_ID" },
  { no: 21, name: "USER_UNREGISTERED" },
  { no: 22, name: "USER_ALREADY_REGISTERED" },
  { no: 23, name: "USER_INVALID" },
  { no: 24, name: "USER_NO_ROLE" },
  { no: 25, name: "USER_DELETED_ROLE" },
  { no: 26, name: "USER_PERMISSION_DENIED" },
  { no: 31, name: "OBJECT_INVALID_ID" },
  { no: 32, name: "OBJECT_UNREGISTERED" },
  { no: 33, name: "OBJECT_ALREADY_REGISTERED" },
  { no: 34, name: "OBJECT_INVALID" },
  { no: 35, name: "INVALID_OBJECT_FIELD_PATH" },
  { no: 36, name: "INVALID_OBJECT_FIELD_VALUE" },
]);

/**
 * @generated from message auth.KeySchema
 */
export class KeySchema extends Message<KeySchema> {
  /**
   * @generated from field: string namespace = 1;
   */
  namespace = "";

  /**
   * @generated from field: google.protobuf.FieldMask keys = 2;
   */
  keys?: FieldMask;

  /**
   * !TODO: Add support for indexes
   *
   * @generated from field: google.protobuf.FieldMask secondary_keys = 3;
   */
  secondaryKeys?: FieldMask;

  /**
   * @generated from field: google.protobuf.FieldMask collection_id = 4;
   */
  collectionId?: FieldMask;

  /**
   * @generated from field: string default_collection_id = 5;
   */
  defaultCollectionId = "";

  constructor(data?: PartialMessage<KeySchema>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.KeySchema";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "keys", kind: "message", T: FieldMask },
    { no: 3, name: "secondary_keys", kind: "message", T: FieldMask },
    { no: 4, name: "collection_id", kind: "message", T: FieldMask },
    { no: 5, name: "default_collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * Example is membership //!TODO
 *
 * @generated from message auth.Index
 */
export class Index extends Message<Index> {
  /**
   * @generated from field: google.protobuf.FieldMask key_1 = 1;
   */
  key1?: FieldMask;

  /**
   * @generated from field: string type_1 = 2;
   */
  type1 = "";

  /**
   * @generated from field: google.protobuf.FieldMask key_2 = 3;
   */
  key2?: FieldMask;

  /**
   * @generated from field: string type_2 = 4;
   */
  type2 = "";

  constructor(data?: PartialMessage<Index>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Index";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key_1", kind: "message", T: FieldMask },
    { no: 2, name: "type_1", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "key_2", kind: "message", T: FieldMask },
    { no: 4, name: "type_2", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Index {
    return new Index().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Index {
    return new Index().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Index {
    return new Index().fromJsonString(jsonString, options);
  }

  static equals(a: Index | PlainMessage<Index> | undefined, b: Index | PlainMessage<Index> | undefined): boolean {
    return proto3.util.equals(Index, a, b);
  }
}

/**
 * Can be used as the history entry
 *
 * @generated from message auth.StateActivity
 */
export class StateActivity extends Message<StateActivity> {
  /**
   * @generated from field: string tx_id = 1;
   */
  txId = "";

  /**
   * @generated from field: string msp_id = 2;
   */
  mspId = "";

  /**
   * @generated from field: string user_id = 3;
   */
  userId = "";

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp;

  /**
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
 * @generated from message auth.HistoryEntry
 */
export class HistoryEntry extends Message<HistoryEntry> {
  /**
   * @generated from field: string tx_id = 1;
   */
  txId = "";

  /**
   * @generated from field: bool is_delete = 2;
   */
  isDelete = false;

  /**
   * @generated from field: bool is_hidden = 3;
   */
  isHidden = false;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: string note = 5;
   */
  note = "";

  /**
   * @generated from field: google.protobuf.Any value = 6;
   */
  value?: Any;

  constructor(data?: PartialMessage<HistoryEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.HistoryEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_delete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "is_hidden", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
    { no: 5, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "value", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoryEntry {
    return new HistoryEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoryEntry {
    return new HistoryEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoryEntry {
    return new HistoryEntry().fromJsonString(jsonString, options);
  }

  static equals(a: HistoryEntry | PlainMessage<HistoryEntry> | undefined, b: HistoryEntry | PlainMessage<HistoryEntry> | undefined): boolean {
    return proto3.util.equals(HistoryEntry, a, b);
  }
}

/**
 * @generated from message auth.History
 */
export class History extends Message<History> {
  /**
   * @generated from field: repeated auth.HistoryEntry entries = 1;
   */
  entries: HistoryEntry[] = [];

  /**
   * @generated from field: auth.HiddenTxList hidden_txs = 2;
   */
  hiddenTxs?: HiddenTxList;

  constructor(data?: PartialMessage<History>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.History";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entries", kind: "message", T: HistoryEntry, repeated: true },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTxList },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): History {
    return new History().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): History {
    return new History().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): History {
    return new History().fromJsonString(jsonString, options);
  }

  static equals(a: History | PlainMessage<History> | undefined, b: History | PlainMessage<History> | undefined): boolean {
    return proto3.util.equals(History, a, b);
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
   * @generated from field: string namespace = 3;
   */
  namespace = "";

  /**
   * @generated from field: google.protobuf.FieldMask paths = 4;
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
    { no: 3, name: "namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "paths", kind: "message", T: FieldMask },
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
 * @generated from message auth.PathPolicy
 */
export class PathPolicy extends Message<PathPolicy> {
  /**
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * @generated from field: repeated auth.Action actions = 2;
   */
  actions: Action[] = [];

  constructor(data?: PartialMessage<PathPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.PathPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "actions", kind: "enum", T: proto3.getEnumType(Action), repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PathPolicy {
    return new PathPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PathPolicy {
    return new PathPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PathPolicy {
    return new PathPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: PathPolicy | PlainMessage<PathPolicy> | undefined, b: PathPolicy | PlainMessage<PathPolicy> | undefined): boolean {
    return proto3.util.equals(PathPolicy, a, b);
  }
}

/**
 * @generated from message auth.ObjectPolicy
 */
export class ObjectPolicy extends Message<ObjectPolicy> {
  /**
   * @generated from field: string object_type = 1;
   */
  objectType = "";

  /**
   * @generated from field: string object_namespace = 2;
   */
  objectNamespace = "";

  /**
   * @generated from field: repeated auth.PathPolicy policies = 3;
   */
  policies: PathPolicy[] = [];

  constructor(data?: PartialMessage<ObjectPolicy>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.ObjectPolicy";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_namespace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "policies", kind: "message", T: PathPolicy, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectPolicy {
    return new ObjectPolicy().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectPolicy {
    return new ObjectPolicy().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectPolicy {
    return new ObjectPolicy().fromJsonString(jsonString, options);
  }

  static equals(a: ObjectPolicy | PlainMessage<ObjectPolicy> | undefined, b: ObjectPolicy | PlainMessage<ObjectPolicy> | undefined): boolean {
    return proto3.util.equals(ObjectPolicy, a, b);
  }
}

/**
 * @generated from message auth.ACEntry
 */
export class ACEntry extends Message<ACEntry> {
  /**
   * @generated from field: repeated auth.Action actions = 1;
   */
  actions: Action[] = [];

  /**
   * @generated from field: repeated auth.ObjectPolicy object = 4;
   */
  object: ObjectPolicy[] = [];

  /**
   * @generated from field: google.protobuf.FieldMask view_mask = 6;
   */
  viewMask?: FieldMask;

  constructor(data?: PartialMessage<ACEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.ACEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "actions", kind: "enum", T: proto3.getEnumType(Action), repeated: true },
    { no: 4, name: "object", kind: "message", T: ObjectPolicy, repeated: true },
    { no: 6, name: "view_mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACEntry {
    return new ACEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACEntry {
    return new ACEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACEntry {
    return new ACEntry().fromJsonString(jsonString, options);
  }

  static equals(a: ACEntry | PlainMessage<ACEntry> | undefined, b: ACEntry | PlainMessage<ACEntry> | undefined): boolean {
    return proto3.util.equals(ACEntry, a, b);
  }
}

/**
 * @generated from message auth.StateObject
 */
export class StateObject extends Message<StateObject> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string object_type = 2;
   */
  objectType = "";

  /**
   * @generated from field: repeated string object_id_parts = 3;
   */
  objectIdParts: string[] = [];

  /**
   * @generated from field: google.protobuf.Any value = 4;
   */
  value?: Any;

  constructor(data?: PartialMessage<StateObject>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.StateObject";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object_id_parts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "value", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StateObject {
    return new StateObject().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StateObject {
    return new StateObject().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StateObject {
    return new StateObject().fromJsonString(jsonString, options);
  }

  static equals(a: StateObject | PlainMessage<StateObject> | undefined, b: StateObject | PlainMessage<StateObject> | undefined): boolean {
    return proto3.util.equals(StateObject, a, b);
  }
}

/**
 * Key should be {Suggestion}{OBJECT_TYPE}{COLLECTION_ID}{...OBJECT_ID}{SUGGESTION_ID}
 *
 * @generated from message auth.Suggestion
 */
export class Suggestion extends Message<Suggestion> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string object_type = 2;
   */
  objectType = "";

  /**
   * @generated from field: string object_id = 3;
   */
  objectId = "";

  /**
   * @generated from field: string suggestion_id = 4;
   */
  suggestionId = "";

  /**
   * @generated from field: google.protobuf.FieldMask paths = 5;
   */
  paths?: FieldMask;

  /**
   * @generated from field: google.protobuf.Any value = 6;
   */
  value?: Any;

  constructor(data?: PartialMessage<Suggestion>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Suggestion";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "suggestion_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "paths", kind: "message", T: FieldMask },
    { no: 6, name: "value", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Suggestion {
    return new Suggestion().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Suggestion {
    return new Suggestion().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Suggestion {
    return new Suggestion().fromJsonString(jsonString, options);
  }

  static equals(a: Suggestion | PlainMessage<Suggestion> | undefined, b: Suggestion | PlainMessage<Suggestion> | undefined): boolean {
    return proto3.util.equals(Suggestion, a, b);
  }
}

/**
 * @generated from message auth.HiddenTx
 */
export class HiddenTx extends Message<HiddenTx> {
  /**
   * @generated from field: string tx_id = 1;
   */
  txId = "";

  /**
   * @generated from field: string msp_id = 2;
   */
  mspId = "";

  /**
   * @generated from field: string user_id = 3;
   */
  userId = "";

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 4;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: string note = 5;
   */
  note = "";

  constructor(data?: PartialMessage<HiddenTx>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.HiddenTx";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
    { no: 5, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HiddenTx {
    return new HiddenTx().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HiddenTx {
    return new HiddenTx().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HiddenTx {
    return new HiddenTx().fromJsonString(jsonString, options);
  }

  static equals(a: HiddenTx | PlainMessage<HiddenTx> | undefined, b: HiddenTx | PlainMessage<HiddenTx> | undefined): boolean {
    return proto3.util.equals(HiddenTx, a, b);
  }
}

/**
 * Key should be {HiddenTxList}{OBJECT_TYPE}{COLLECTION_ID}{...OBJECT_ID}
 *
 * @generated from message auth.HiddenTxList
 */
export class HiddenTxList extends Message<HiddenTxList> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string object_type = 2;
   */
  objectType = "";

  /**
   * @generated from field: string object_id = 3;
   */
  objectId = "";

  /**
   * @generated from field: repeated auth.HiddenTx txs = 4;
   */
  txs: HiddenTx[] = [];

  constructor(data?: PartialMessage<HiddenTxList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.HiddenTxList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "object_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "object_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "txs", kind: "message", T: HiddenTx, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HiddenTxList {
    return new HiddenTxList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HiddenTxList {
    return new HiddenTxList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HiddenTxList {
    return new HiddenTxList().fromJsonString(jsonString, options);
  }

  static equals(a: HiddenTxList | PlainMessage<HiddenTxList> | undefined, b: HiddenTxList | PlainMessage<HiddenTxList> | undefined): boolean {
    return proto3.util.equals(HiddenTxList, a, b);
  }
}

/**
 * Collection
 * ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 * Note that the types of objects are stored in the default ACEntry
 *
 * key := {COLLECTION}{COLLECTION_ID}
 *
 * @generated from message auth.Collection
 */
export class Collection extends Message<Collection> {
  /**
   * The key for the ledger
   *
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string name = 2;
   */
  name = "";

  /**
   * @generated from field: string description = 3;
   */
  description = "";

  /**
   * @generated from field: repeated string object_types = 4;
   */
  objectTypes: string[] = [];

  /**
   * @generated from field: auth.ACEntry default = 5;
   */
  default?: ACEntry;

  constructor(data?: PartialMessage<Collection>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Collection";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "object_types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "default", kind: "message", T: ACEntry },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Collection {
    return new Collection().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Collection {
    return new Collection().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Collection {
    return new Collection().fromJsonString(jsonString, options);
  }

  static equals(a: Collection | PlainMessage<Collection> | undefined, b: Collection | PlainMessage<Collection> | undefined): boolean {
    return proto3.util.equals(Collection, a, b);
  }
}

/**
 * User
 * ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *
 * key := {USER}{USER_ID.msp_id}{USER_ID.id}
 *
 *
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

  /**
   * @generated from field: string name = 3;
   */
  name = "";

  /**
   *  !!TODO: this could be a good place to test if it is better to store object
   * with fewer keys split up or more key
   * repeated Membership memberships = 3; // Indexed to the Roles domain
   * buf:lint:ignore FIELD_NO_DELETE
   *
   * @generated from field: string collection_id = 4;
   */
  collectionId = "";

  constructor(data?: PartialMessage<User>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.User";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message auth.Attribute
 */
export class Attribute extends Message<Attribute> {
  /**
   * @generated from field: string msp_id = 1;
   */
  mspId = "";

  /**
   * @generated from field: string oid = 2;
   */
  oid = "";

  /**
   * @generated from field: string value = 3;
   */
  value = "";

  constructor(data?: PartialMessage<Attribute>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "auth.Attribute";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "oid", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Attribute {
    return new Attribute().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Attribute {
    return new Attribute().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Attribute {
    return new Attribute().fromJsonString(jsonString, options);
  }

  static equals(a: Attribute | PlainMessage<Attribute> | undefined, b: Attribute | PlainMessage<Attribute> | undefined): boolean {
    return proto3.util.equals(Attribute, a, b);
  }
}

