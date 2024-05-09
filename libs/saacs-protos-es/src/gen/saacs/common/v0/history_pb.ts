// @generated by protoc-gen-es v1.9.0 with parameter "target=ts"
// @generated from file saacs/common/v0/history.proto (package saacs.common.v0, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { ItemKey } from "./item_pb.js";

/**
 * @generated from message saacs.common.v0.HiddenTx
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
  static readonly typeName = "saacs.common.v0.HiddenTx";
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
 * Key should be {COLLECTION_ID}{auth.HiddenTxList}{?msp_id}{ITEM_TYPE}{...ITEM_ID}
 *
 * @generated from message saacs.common.v0.HiddenTxList
 */
export class HiddenTxList extends Message<HiddenTxList> {
  /**
   * The key that is used to store the item
   *
   * @generated from field: saacs.common.v0.ItemKey primary_key = 1;
   */
  primaryKey?: ItemKey;

  /**
   * @generated from field: string msp_id = 2;
   */
  mspId = "";

  /**
   * The list of hidden txs by tx_id
   *
   * @generated from field: repeated saacs.common.v0.HiddenTx txs = 4;
   */
  txs: HiddenTx[] = [];

  constructor(data?: PartialMessage<HiddenTxList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "saacs.common.v0.HiddenTxList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "primary_key", kind: "message", T: ItemKey },
    { no: 2, name: "msp_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
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
 * @generated from message saacs.common.v0.HistoryEntry
 */
export class HistoryEntry extends Message<HistoryEntry> {
  /**
   * The transaction id that caused the change
   *
   * @generated from field: string tx_id = 1;
   */
  txId = "";

  /**
   * Whether the item was deleted
   *
   * @generated from field: bool is_delete = 2;
   */
  isDelete = false;

  /**
   * Whether the transaction was hidden
   *
   * @generated from field: bool is_hidden = 3;
   */
  isHidden = false;

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

  /**
   * The value of the item
   *
   * @generated from field: google.protobuf.Any value = 6;
   */
  value?: Any;

  constructor(data?: PartialMessage<HistoryEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "saacs.common.v0.HistoryEntry";
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
 * @generated from message saacs.common.v0.History
 */
export class History extends Message<History> {
  /**
   * @generated from field: repeated saacs.common.v0.HistoryEntry entries = 1;
   */
  entries: HistoryEntry[] = [];

  /**
   * @generated from field: saacs.common.v0.HiddenTxList hidden_txs = 2;
   */
  hiddenTxs?: HiddenTxList;

  /**
   * The key is the msp_id of the group that is hiding the tx
   *
   * @generated from field: map<string, saacs.common.v0.HiddenTxList> hidden_txs_by_msp_id = 3;
   */
  hiddenTxsByMspId: { [key: string]: HiddenTxList } = {};

  constructor(data?: PartialMessage<History>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "saacs.common.v0.History";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entries", kind: "message", T: HistoryEntry, repeated: true },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTxList },
    { no: 3, name: "hidden_txs_by_msp_id", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: HiddenTxList} },
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
 * @generated from message saacs.common.v0.HistoryOptions
 */
export class HistoryOptions extends Message<HistoryOptions> {
  /**
   * @generated from field: bool include = 1;
   */
  include = false;

  /**
   * @generated from field: saacs.common.v0.HiddenOptions hidden = 2;
   */
  hidden?: HiddenOptions;

  constructor(data?: PartialMessage<HistoryOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "saacs.common.v0.HistoryOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "include", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "hidden", kind: "message", T: HiddenOptions },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoryOptions {
    return new HistoryOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoryOptions {
    return new HistoryOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoryOptions {
    return new HistoryOptions().fromJsonString(jsonString, options);
  }

  static equals(a: HistoryOptions | PlainMessage<HistoryOptions> | undefined, b: HistoryOptions | PlainMessage<HistoryOptions> | undefined): boolean {
    return proto3.util.equals(HistoryOptions, a, b);
  }
}

/**
 * @generated from message saacs.common.v0.HiddenOptions
 */
export class HiddenOptions extends Message<HiddenOptions> {
  /**
   * @generated from field: bool include = 1;
   */
  include = false;

  /**
   * @generated from field: repeated string msp_ids = 3;
   */
  mspIds: string[] = [];

  constructor(data?: PartialMessage<HiddenOptions>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "saacs.common.v0.HiddenOptions";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "include", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "msp_ids", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HiddenOptions {
    return new HiddenOptions().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HiddenOptions {
    return new HiddenOptions().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HiddenOptions {
    return new HiddenOptions().fromJsonString(jsonString, options);
  }

  static equals(a: HiddenOptions | PlainMessage<HiddenOptions> | undefined, b: HiddenOptions | PlainMessage<HiddenOptions> | undefined): boolean {
    return proto3.util.equals(HiddenOptions, a, b);
  }
}

