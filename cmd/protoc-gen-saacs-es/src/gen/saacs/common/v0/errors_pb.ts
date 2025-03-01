// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file saacs/common/v0/errors.proto (package saacs.common.v0, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";

/**
 * @generated from enum saacs.common.v0.TxError
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
proto3.util.setEnumType(TxError, "saacs.common.v0.TxError", [
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
 * @generated from message saacs.common.v0.ErrorWrapper
 */
export class ErrorWrapper extends Message<ErrorWrapper> {
  /**
   * @generated from field: saacs.common.v0.TxError code = 1;
   */
  code = TxError.UNSPECIFIED;

  /**
   * @generated from field: google.protobuf.Struct error = 2;
   */
  error?: Struct;

  /**
   * @generated from field: string message = 3;
   */
  message = "";

  constructor(data?: PartialMessage<ErrorWrapper>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "saacs.common.v0.ErrorWrapper";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code", kind: "enum", T: proto3.getEnumType(TxError) },
    { no: 2, name: "error", kind: "message", T: Struct },
    { no: 3, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ErrorWrapper {
    return new ErrorWrapper().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ErrorWrapper {
    return new ErrorWrapper().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ErrorWrapper {
    return new ErrorWrapper().fromJsonString(jsonString, options);
  }

  static equals(a: ErrorWrapper | PlainMessage<ErrorWrapper> | undefined, b: ErrorWrapper | PlainMessage<ErrorWrapper> | undefined): boolean {
    return proto3.util.equals(ErrorWrapper, a, b);
  }
}

