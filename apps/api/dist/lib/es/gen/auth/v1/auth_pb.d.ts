import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, FieldMask, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from enum auth.TransactionType
 */
export declare enum TransactionType {
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
    QUERY = 2
}
/**
 * @generated from enum auth.ObjectKind
 */
export declare enum ObjectKind {
    /**
     * @generated from enum value: OBJECT_KIND_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: OBJECT_KIND_GLOBAL_OBJECT = 1;
     */
    GLOBAL_OBJECT = 1,
    /**
     * Object's key := {COLLECTION_ID}{TYPE}[...key_paths]
     *
     * @generated from enum value: OBJECT_KIND_PRIMARY_OBJECT = 2;
     */
    PRIMARY_OBJECT = 2,
    /**
     * Object's key := {COLLECTION_ID}{TYPE}<PrimaryKey>{...key_paths}
     *
     * @generated from enum value: OBJECT_KIND_SUB_OBJECT = 3;
     */
    SUB_OBJECT = 3,
    /**
     * @generated from enum value: OBJECT_KIND_REFERENCE = 4;
     */
    REFERENCE = 4
}
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
export declare enum Action {
    /**
     * @generated from enum value: ACTION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ACTION_UTILITY = 1;
     */
    UTILITY = 1,
    /**
     * View the contents of an object
     *
     * @generated from enum value: ACTION_VIEW = 10;
     */
    VIEW = 10,
    /**
     * Create a new object
     *  - key must not already exist
     *
     * @generated from enum value: ACTION_CREATE = 11;
     */
    CREATE = 11,
    /**
     * Update an existing object
     *   - key must already exist
     *
     * @generated from enum value: ACTION_UPDATE = 12;
     */
    UPDATE = 12,
    /**
     * Delete an existing object, key must already exist
     *
     * @generated from enum value: ACTION_DELETE = 13;
     */
    DELETE = 13,
    /**
     * Suggest a change to an object, key must already exist
     *
     * @generated from enum value: ACTION_SUGGEST_VIEW = 14;
     */
    SUGGEST_VIEW = 14,
    /**
     * Suggest a change to an object, key must already exist
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
     * Approve a suggestion and apply it to the object, key must already exist
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
     * @generated from enum value: ACTION_REFERENCE_CREATE = 21;
     */
    REFERENCE_CREATE = 21,
    /**
     * @generated from enum value: ACTION_REFERENCE_DELETE = 22;
     */
    REFERENCE_DELETE = 22,
    /**
     * @generated from enum value: ACTION_REFERENCE_VIEW = 23;
     */
    REFERENCE_VIEW = 23
}
/**
 * @generated from enum auth.TxError
 */
export declare enum TxError {
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
     * The collection is invalid (e.g. the collection does not have a default ACEntry)
     *
     * @generated from enum value: COLLECTION_INVALID = 14;
     */
    COLLECTION_INVALID = 14,
    /**
     * The object type in the collection is invalid
     *
     * @generated from enum value: COLLECTION_INVALID_OBJECT_TYPE = 15;
     */
    COLLECTION_INVALID_OBJECT_TYPE = 15,
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
     * The Object's key is invalid
     *
     * @generated from enum value: OBJECT_INVALID_ID = 31;
     */
    OBJECT_INVALID_ID = 31,
    /**
     * The Object is not registered and thus cannot be accessed
     *
     * @generated from enum value: OBJECT_UNREGISTERED = 32;
     */
    OBJECT_UNREGISTERED = 32,
    /**
     * The Object is already registered and thus cannot be registered again
     *
     * @generated from enum value: OBJECT_ALREADY_REGISTERED = 33;
     */
    OBJECT_ALREADY_REGISTERED = 33,
    /**
     * The Object is invalid
     *
     * @generated from enum value: OBJECT_INVALID = 34;
     */
    OBJECT_INVALID = 34,
    /**
     * The object field path is invalid for the object type
     *
     * @generated from enum value: INVALID_OBJECT_FIELD_PATH = 35;
     */
    INVALID_OBJECT_FIELD_PATH = 35,
    /**
     * The value at the object field path is invalid for the object type
     *
     * @generated from enum value: INVALID_OBJECT_FIELD_VALUE = 36;
     */
    INVALID_OBJECT_FIELD_VALUE = 36
}
/**
 * @generated from message auth.KeySchema
 */
export declare class KeySchema extends Message<KeySchema> {
    /**
     * The object type of the key
     *
     * @generated from field: string object_type = 1;
     */
    objectType: string;
    /**
     * The kind of object that the key is for
     *
     * @generated from field: auth.ObjectKind object_kind = 2;
     */
    objectKind: ObjectKind;
    /**
     * The paths that make up the key
     *
     * @generated from field: google.protobuf.FieldMask keys = 3;
     */
    keys?: FieldMask;
    constructor(data?: PartialMessage<KeySchema>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.KeySchema";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): KeySchema;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): KeySchema;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): KeySchema;
    static equals(a: KeySchema | PlainMessage<KeySchema> | undefined, b: KeySchema | PlainMessage<KeySchema> | undefined): boolean;
}
/**
 * Can be used as the history entry
 *
 * @generated from message auth.StateActivity
 */
export declare class StateActivity extends Message<StateActivity> {
    /**
     * The transaction id that caused the change
     *
     * @generated from field: string tx_id = 1;
     */
    txId: string;
    /**
     * The msp of the user that caused the change
     *
     * @generated from field: string msp_id = 2;
     */
    mspId: string;
    /**
     * The id of the user that caused the change
     *
     * @generated from field: string user_id = 3;
     */
    userId: string;
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
    note: string;
    constructor(data?: PartialMessage<StateActivity>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.StateActivity";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StateActivity;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StateActivity;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StateActivity;
    static equals(a: StateActivity | PlainMessage<StateActivity> | undefined, b: StateActivity | PlainMessage<StateActivity> | undefined): boolean;
}
/**
 * @generated from message auth.HistoryEntry
 */
export declare class HistoryEntry extends Message<HistoryEntry> {
    /**
     * The transaction id that caused the change
     *
     * @generated from field: string tx_id = 1;
     */
    txId: string;
    /**
     * Whether the object was deleted
     *
     * @generated from field: bool is_delete = 2;
     */
    isDelete: boolean;
    /**
     * Whether the transaction was hidden
     *
     * @generated from field: bool is_hidden = 3;
     */
    isHidden: boolean;
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
    note: string;
    /**
     * The value of the object
     *
     * @generated from field: google.protobuf.Any value = 6;
     */
    value?: Any;
    constructor(data?: PartialMessage<HistoryEntry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.HistoryEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoryEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoryEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoryEntry;
    static equals(a: HistoryEntry | PlainMessage<HistoryEntry> | undefined, b: HistoryEntry | PlainMessage<HistoryEntry> | undefined): boolean;
}
/**
 * @generated from message auth.History
 */
export declare class History extends Message<History> {
    /**
     * @generated from field: repeated auth.HistoryEntry entries = 1;
     */
    entries: HistoryEntry[];
    /**
     * @generated from field: auth.HiddenTxList hidden_txs = 2;
     */
    hiddenTxs?: HiddenTxList;
    constructor(data?: PartialMessage<History>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.History";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): History;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): History;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): History;
    static equals(a: History | PlainMessage<History> | undefined, b: History | PlainMessage<History> | undefined): boolean;
}
/**
 * @generated from message auth.Operation
 */
export declare class Operation extends Message<Operation> {
    /**
     * @generated from field: auth.Action action = 1;
     */
    action: Action;
    /**
     * @generated from field: string collection_id = 2;
     */
    collectionId: string;
    /**
     * @generated from field: string object_type = 3;
     */
    objectType: string;
    /**
     * @generated from field: string secondary_object_type = 4;
     */
    secondaryObjectType: string;
    /**
     * @generated from field: google.protobuf.FieldMask paths = 5;
     */
    paths?: FieldMask;
    constructor(data?: PartialMessage<Operation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.Operation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Operation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Operation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Operation;
    static equals(a: Operation | PlainMessage<Operation> | undefined, b: Operation | PlainMessage<Operation> | undefined): boolean;
}
/**
 * This message is the tree node for operations on the state object
 *
 * @generated from message auth.PathPolicy
 */
export declare class PathPolicy extends Message<PathPolicy> {
    /**
     * The path is a sub path of a field mask
     *
     * @generated from field: string path = 1;
     */
    path: string;
    /**
     * @generated from field: string full_path = 2;
     */
    fullPath: string;
    /**
     * @generated from field: bool allow_sub_paths = 3;
     */
    allowSubPaths: boolean;
    /**
     * The key is a valid sub path in the type of state object
     *
     * @generated from field: map<string, auth.PathPolicy> sub_paths = 4;
     */
    subPaths: {
        [key: string]: PathPolicy;
    };
    /**
     * If the policy is not set than use a parent policy unless nested policy is set
     *
     * @generated from field: repeated auth.Action actions = 5;
     */
    actions: Action[];
    constructor(data?: PartialMessage<PathPolicy>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.PathPolicy";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PathPolicy;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PathPolicy;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PathPolicy;
    static equals(a: PathPolicy | PlainMessage<PathPolicy> | undefined, b: PathPolicy | PlainMessage<PathPolicy> | undefined): boolean;
}
/**
 * Access Control Entry for use in Hash Tree
 *
 * ObjectPolicy root                 = 1 [(buf.validate.field).required = true];
 *
 * @generated from message auth.ACEntry
 */
export declare class ACEntry extends Message<ACEntry> {
    /**
     * key is the object type
     *
     * @generated from field: map<string, auth.PathPolicy> children = 1;
     */
    children: {
        [key: string]: PathPolicy;
    };
    constructor(data?: PartialMessage<ACEntry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.ACEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ACEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ACEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ACEntry;
    static equals(a: ACEntry | PlainMessage<ACEntry> | undefined, b: ACEntry | PlainMessage<ACEntry> | undefined): boolean;
}
/**
 * @generated from message auth.Object
 */
export declare class Object$ extends Message<Object$> {
    /**
     * @generated from field: auth.ObjectKey key = 1;
     */
    key?: ObjectKey;
    /**
     * @generated from field: google.protobuf.Any value = 2;
     */
    value?: Any;
    constructor(data?: PartialMessage<Object$>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.Object";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Object$;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Object$;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Object$;
    static equals(a: Object$ | PlainMessage<Object$> | undefined, b: Object$ | PlainMessage<Object$> | undefined): boolean;
}
/**
 * @generated from message auth.FullObject
 */
export declare class FullObject extends Message<FullObject> {
    /**
     * @generated from field: auth.ObjectKey key = 1;
     */
    key?: ObjectKey;
    /**
     * @generated from field: google.protobuf.Any value = 2;
     */
    value?: Any;
    /**
     * @generated from field: auth.History history = 3;
     */
    history?: History;
    /**
     * @generated from field: repeated auth.Suggestion suggestions = 4;
     */
    suggestions: Suggestion[];
    /**
     * @generated from field: repeated auth.Reference references = 5;
     */
    references: Reference[];
    constructor(data?: PartialMessage<FullObject>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.FullObject";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FullObject;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FullObject;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FullObject;
    static equals(a: FullObject | PlainMessage<FullObject> | undefined, b: FullObject | PlainMessage<FullObject> | undefined): boolean;
}
/**
 * Keys
 * ─────────────────────────────────────────────────────────────────────────────────────
 * Object Keys
 * When converted to its string form it will be:
 * - Key := {OBJECT_TYPE}{COLLECTION_ID}{...OBJECT_ID}
 *
 * Reference Keys
 * Used to store references to objects for case like a user having a role
 * When converted to its string form it will be:
 * {Ref}{REFERENCE_TYPE}{COLLECTION_ID}[{OBJECT1_TYPE}{...OBJECT1_ID}][{OBJECT2_TYPE}{...OBJECT2_ID}]
 *
 *
 * SubKeys
 * When converted to its string form it will be:
 * {SUB_OBJECT_TYPE}{COLLECTION_ID}{OBJECT_TYPE}{...OBJECT_ID}{SUB_OBJECT_ID}
 * Examples
 * - Suggestion := {auth.Suggestion}  {COLLECTION_ID}{OBJECT_TYPE}{...OBJECT_ID}{SUGGESTION_ID}
 * - HiddenTxList := {auth.HiddenTxList}{COLLECTION_ID}{OBJECT_TYPE} {...OBJECT_ID}
 *
 * @generated from message auth.ObjectKey
 */
export declare class ObjectKey extends Message<ObjectKey> {
    /**
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * @generated from field: string object_type = 2;
     */
    objectType: string;
    /**
     * @generated from field: repeated string object_id_parts = 3;
     */
    objectIdParts: string[];
    constructor(data?: PartialMessage<ObjectKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.ObjectKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ObjectKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ObjectKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ObjectKey;
    static equals(a: ObjectKey | PlainMessage<ObjectKey> | undefined, b: ObjectKey | PlainMessage<ObjectKey> | undefined): boolean;
}
/**
 * Reference Keys
 * {auth.Reference}{REFERENCE_TYPE}{COLLECTION_ID}[{OBJECT1_TYPE}{...OBJECT1_ID}][{OBJECT2_TYPE}{...OBJECT2_ID}]
 *
 * @generated from message auth.Reference
 */
export declare class Reference extends Message<Reference> {
    /**
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * @generated from field: string reference_type = 2;
     */
    referenceType: string;
    /**
     * @generated from field: auth.ObjectKey key_1 = 3;
     */
    key1?: ObjectKey;
    /**
     * @generated from field: auth.ObjectKey key_2 = 4;
     */
    key2?: ObjectKey;
    constructor(data?: PartialMessage<Reference>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.Reference";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Reference;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Reference;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Reference;
    static equals(a: Reference | PlainMessage<Reference> | undefined, b: Reference | PlainMessage<Reference> | undefined): boolean;
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
export declare class Collection extends Message<Collection> {
    /**
     * The key for the ledger
     *
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: repeated string object_types = 4;
     */
    objectTypes: string[];
    /**
     * @generated from field: auth.ACEntry default = 5;
     */
    default?: ACEntry;
    constructor(data?: PartialMessage<Collection>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.Collection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Collection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Collection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Collection;
    static equals(a: Collection | PlainMessage<Collection> | undefined, b: Collection | PlainMessage<Collection> | undefined): boolean;
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
export declare class User extends Message<User> {
    /**
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * @generated from field: string msp_id = 2;
     */
    mspId: string;
    /**
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * @generated from field: string name = 4;
     */
    name: string;
    constructor(data?: PartialMessage<User>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.User";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;
    static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}
/**
 * Key should be
 * {auth.Suggestion}{COLLECTION_ID}{OBJECT_TYPE}{...OBJECT_ID}{SUGGESTION_ID}
 *
 * @generated from message auth.Suggestion
 */
export declare class Suggestion extends Message<Suggestion> {
    /**
     * @generated from field: auth.ObjectKey primary_key = 1;
     */
    primaryKey?: ObjectKey;
    /**
     * @generated from field: string suggestion_id = 2;
     */
    suggestionId: string;
    /**
     * @generated from field: google.protobuf.FieldMask paths = 5;
     */
    paths?: FieldMask;
    /**
     * @generated from field: google.protobuf.Any value = 6;
     */
    value?: Any;
    constructor(data?: PartialMessage<Suggestion>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.Suggestion";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Suggestion;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Suggestion;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Suggestion;
    static equals(a: Suggestion | PlainMessage<Suggestion> | undefined, b: Suggestion | PlainMessage<Suggestion> | undefined): boolean;
}
/**
 * @generated from message auth.HiddenTx
 */
export declare class HiddenTx extends Message<HiddenTx> {
    /**
     * @generated from field: string tx_id = 1;
     */
    txId: string;
    /**
     * @generated from field: string msp_id = 2;
     */
    mspId: string;
    /**
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * @generated from field: google.protobuf.Timestamp timestamp = 4;
     */
    timestamp?: Timestamp;
    /**
     * @generated from field: string note = 5;
     */
    note: string;
    constructor(data?: PartialMessage<HiddenTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.HiddenTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HiddenTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HiddenTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HiddenTx;
    static equals(a: HiddenTx | PlainMessage<HiddenTx> | undefined, b: HiddenTx | PlainMessage<HiddenTx> | undefined): boolean;
}
/**
 * Key should be {COLLECTION_ID}{auth.HiddenTxList}{OBJECT_TYPE}{...OBJECT_ID}
 *
 * @generated from message auth.HiddenTxList
 */
export declare class HiddenTxList extends Message<HiddenTxList> {
    /**
     * The key that is used to store the object
     *
     * @generated from field: auth.ObjectKey primary_key = 1;
     */
    primaryKey?: ObjectKey;
    /**
     * The list of hidden txs by tx_id
     *
     * @generated from field: repeated auth.HiddenTx txs = 4;
     */
    txs: HiddenTx[];
    constructor(data?: PartialMessage<HiddenTxList>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.HiddenTxList";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HiddenTxList;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HiddenTxList;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HiddenTxList;
    static equals(a: HiddenTxList | PlainMessage<HiddenTxList> | undefined, b: HiddenTxList | PlainMessage<HiddenTxList> | undefined): boolean;
}
/**
 * @generated from message auth.Role
 */
export declare class Role extends Message<Role> {
    /**
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * @generated from field: string role_id = 2;
     */
    roleId: string;
    /**
     * @generated from field: auth.ACEntry ac = 4;
     */
    ac?: ACEntry;
    /**
     * @generated from field: string description = 5;
     */
    description: string;
    /**
     * @generated from field: repeated string parent_role_ids = 6;
     */
    parentRoleIds: string[];
    constructor(data?: PartialMessage<Role>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.Role";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role;
    static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean;
}
/**
 * An attribute is used to define permissions via the value of the attribute in the
 * users certificate for a given msp
 *
 * @generated from message auth.Attribute
 */
export declare class Attribute extends Message<Attribute> {
    /**
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * The msp of the organization that this attribute applies to
     *
     * @generated from field: string msp_id = 2;
     */
    mspId: string;
    /**
     * The oid of the attribute
     *
     * @generated from field: string oid = 3;
     */
    oid: string;
    /**
     * The value of the attribute required to be satisfied by the user to have the
     * role
     *
     * @generated from field: string value = 4;
     */
    value: string;
    /**
     * The Permission that the user will have if they have the attribute
     *
     * @generated from field: auth.ACEntry ac = 5;
     */
    ac?: ACEntry;
    constructor(data?: PartialMessage<Attribute>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.Attribute";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Attribute;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Attribute;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Attribute;
    static equals(a: Attribute | PlainMessage<Attribute> | undefined, b: Attribute | PlainMessage<Attribute> | undefined): boolean;
}
/**
 * Membership is used to store permissions for a user in a collection
 *
 * @generated from message auth.Membership
 */
export declare class Membership extends Message<Membership> {
    /**
     * The collection that the user is a member of
     *
     * @generated from field: string collection_id = 1;
     */
    collectionId: string;
    /**
     * The msp of the organization that the user's certificate is from
     *
     * @generated from field: string msp_id = 2;
     */
    mspId: string;
    /**
     * The id of the user from the certificate
     *
     * @generated from field: string user_id = 3;
     */
    userId: string;
    /**
     * The Permissions that the user will have
     *
     * @generated from field: auth.ACEntry ac = 4;
     */
    ac?: ACEntry;
    constructor(data?: PartialMessage<Membership>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.Membership";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Membership;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Membership;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Membership;
    static equals(a: Membership | PlainMessage<Membership> | undefined, b: Membership | PlainMessage<Membership> | undefined): boolean;
}