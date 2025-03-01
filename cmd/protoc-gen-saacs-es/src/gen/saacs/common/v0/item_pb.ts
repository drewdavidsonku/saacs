// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file saacs/common/v0/item.proto (package saacs.common.v0, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, FieldMask, Message, proto3 } from "@bufbuild/protobuf";
import { ItemKind } from "./enums_pb.js";

/**
 * Keys
 * ─────────────────────────────────────────────────────────────────────────────────────
 * Item Keys
 * When converted to its string form it will be:
 * - Key := {ITEM_TYPE}{COLLECTION_ID}{...ITEM_ID}
 *
 * Reference Keys
 * Used to store references to items for case like a user having a role
 * When converted to its string form it will be:
 * {Ref}{REFERENCE_TYPE}{COLLECTION_ID}[{ITEM1_TYPE}{...ITEM1_ID}][{ITEM2_TYPE}{...ITEM2_ID}]
 *
 *
 * SubKeys
 * When converted to its string form it will be:
 * {SUB_ITEM_TYPE}{COLLECTION_ID}{ITEM_TYPE}{...ITEM_ID}{SUB_ITEM_ID}
 * Examples
 * - Suggestion := {auth.Suggestion}  {COLLECTION_ID}{ITEM_TYPE}{...ITEM_ID}{SUGGESTION_ID}
 * - HiddenTxList := {auth.HiddenTxList}{COLLECTION_ID}{ITEM_TYPE} {...ITEM_ID}
 *
 * @generated from message saacs.common.v0.ItemKey
 */
export class ItemKey extends Message<ItemKey> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string item_type = 2;
   */
  itemType = "";

  /**
   * @generated from field: saacs.common.v0.ItemKind item_kind = 3;
   */
  itemKind = ItemKind.UNSPECIFIED;

  /**
   * @generated from field: repeated string item_key_parts = 4;
   */
  itemKeyParts: string[] = [];

  constructor(data?: PartialMessage<ItemKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "saacs.common.v0.ItemKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "item_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "item_kind", kind: "enum", T: proto3.getEnumType(ItemKind) },
    { no: 4, name: "item_key_parts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ItemKey {
    return new ItemKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ItemKey {
    return new ItemKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ItemKey {
    return new ItemKey().fromJsonString(jsonString, options);
  }

  static equals(a: ItemKey | PlainMessage<ItemKey> | undefined, b: ItemKey | PlainMessage<ItemKey> | undefined): boolean {
    return proto3.util.equals(ItemKey, a, b);
  }
}

/**
 * @generated from message saacs.common.v0.Item
 */
export class Item extends Message<Item> {
  /**
   * @generated from field: saacs.common.v0.ItemKey key = 1;
   */
  key?: ItemKey;

  /**
   * @generated from field: google.protobuf.Any value = 2;
   */
  value?: Any;

  constructor(data?: PartialMessage<Item>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "saacs.common.v0.Item";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "message", T: ItemKey },
    { no: 2, name: "value", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Item {
    return new Item().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Item {
    return new Item().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Item {
    return new Item().fromJsonString(jsonString, options);
  }

  static equals(a: Item | PlainMessage<Item> | undefined, b: Item | PlainMessage<Item> | undefined): boolean {
    return proto3.util.equals(Item, a, b);
  }
}

/**
 * @generated from message saacs.common.v0.KeySchema
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
   * @generated from field: saacs.common.v0.ItemKind item_kind = 2;
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
  static readonly typeName = "saacs.common.v0.KeySchema";
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
 * @generated from message saacs.common.v0.ReadWriteSet
 */
export class ReadWriteSet extends Message<ReadWriteSet> {
  /**
   * @generated from field: repeated saacs.common.v0.Item read_set = 1;
   */
  readSet: Item[] = [];

  /**
   * @generated from field: repeated saacs.common.v0.Item write_set = 2;
   */
  writeSet: Item[] = [];

  constructor(data?: PartialMessage<ReadWriteSet>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "saacs.common.v0.ReadWriteSet";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "read_set", kind: "message", T: Item, repeated: true },
    { no: 2, name: "write_set", kind: "message", T: Item, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReadWriteSet {
    return new ReadWriteSet().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReadWriteSet {
    return new ReadWriteSet().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReadWriteSet {
    return new ReadWriteSet().fromJsonString(jsonString, options);
  }

  static equals(a: ReadWriteSet | PlainMessage<ReadWriteSet> | undefined, b: ReadWriteSet | PlainMessage<ReadWriteSet> | undefined): boolean {
    return proto3.util.equals(ReadWriteSet, a, b);
  }
}

