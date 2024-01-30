// @generated by protoc-gen-es v1.7.1 with parameter "target=ts"
// @generated from file biochain/v1/state.proto (package biochain.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { HiddenTxList } from "../../auth/v1/objects_pb.js";
import { StateActivity } from "../../auth/v1/auth_pb.js";

/**
 * option go_package = "github.com/nova38/saacs/gen/lib/biochain/ccbio/schema/v1;schemav1";
 *
 * @generated from message biochain.v1.SpecimenHistory
 */
export class SpecimenHistory extends Message<SpecimenHistory> {
  /**
   * @generated from field: repeated biochain.v1.SpecimenHistoryEntry entries = 1;
   */
  entries: SpecimenHistoryEntry[] = [];

  /**
   * @generated from field: auth.HiddenTxList hidden_txs = 2;
   */
  hiddenTxs?: HiddenTxList;

  constructor(data?: PartialMessage<SpecimenHistory>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.SpecimenHistory";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "entries", kind: "message", T: SpecimenHistoryEntry, repeated: true },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTxList },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpecimenHistory {
    return new SpecimenHistory().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpecimenHistory {
    return new SpecimenHistory().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpecimenHistory {
    return new SpecimenHistory().fromJsonString(jsonString, options);
  }

  static equals(a: SpecimenHistory | PlainMessage<SpecimenHistory> | undefined, b: SpecimenHistory | PlainMessage<SpecimenHistory> | undefined): boolean {
    return proto3.util.equals(SpecimenHistory, a, b);
  }
}

/**
 * @generated from message biochain.v1.SpecimenHistoryEntry
 */
export class SpecimenHistoryEntry extends Message<SpecimenHistoryEntry> {
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
   * @generated from field: biochain.v1.Specimen value = 6;
   */
  value?: Specimen;

  constructor(data?: PartialMessage<SpecimenHistoryEntry>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.SpecimenHistoryEntry";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tx_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "is_delete", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 3, name: "is_hidden", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
    { no: 5, name: "note", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "value", kind: "message", T: Specimen },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpecimenHistoryEntry {
    return new SpecimenHistoryEntry().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpecimenHistoryEntry {
    return new SpecimenHistoryEntry().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpecimenHistoryEntry {
    return new SpecimenHistoryEntry().fromJsonString(jsonString, options);
  }

  static equals(a: SpecimenHistoryEntry | PlainMessage<SpecimenHistoryEntry> | undefined, b: SpecimenHistoryEntry | PlainMessage<SpecimenHistoryEntry> | undefined): boolean {
    return proto3.util.equals(SpecimenHistoryEntry, a, b);
  }
}

/**
 * @generated from message biochain.v1.SpecimenUpdate
 */
export class SpecimenUpdate extends Message<SpecimenUpdate> {
  /**
   * @generated from field: biochain.v1.Specimen specimen = 1;
   */
  specimen?: Specimen;

  /**
   * @generated from field: google.protobuf.FieldMask mask = 2;
   */
  mask?: FieldMask;

  constructor(data?: PartialMessage<SpecimenUpdate>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.SpecimenUpdate";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "specimen", kind: "message", T: Specimen },
    { no: 2, name: "mask", kind: "message", T: FieldMask },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpecimenUpdate {
    return new SpecimenUpdate().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpecimenUpdate {
    return new SpecimenUpdate().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpecimenUpdate {
    return new SpecimenUpdate().fromJsonString(jsonString, options);
  }

  static equals(a: SpecimenUpdate | PlainMessage<SpecimenUpdate> | undefined, b: SpecimenUpdate | PlainMessage<SpecimenUpdate> | undefined): boolean {
    return proto3.util.equals(SpecimenUpdate, a, b);
  }
}

/**
 * ────────────────────────────────────────────────--
 * Specimen
 * ────────────────────────────────────────────────--
 *
 * @generated from message biochain.v1.Date
 */
export class Date extends Message<Date> {
  /**
   * @generated from field: string verbatim = 1;
   */
  verbatim = "";

  /**
   * @generated from field: google.protobuf.Timestamp timestamp = 2;
   */
  timestamp?: Timestamp;

  /**
   * @generated from field: int32 year = 3;
   */
  year = 0;

  /**
   * @generated from field: string month = 4;
   */
  month = "";

  /**
   * @generated from field: int32 day = 5;
   */
  day = 0;

  constructor(data?: PartialMessage<Date>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Date";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "verbatim", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "timestamp", kind: "message", T: Timestamp },
    { no: 3, name: "year", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 4, name: "month", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "day", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Date {
    return new Date().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Date {
    return new Date().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Date {
    return new Date().fromJsonString(jsonString, options);
  }

  static equals(a: Date | PlainMessage<Date> | undefined, b: Date | PlainMessage<Date> | undefined): boolean {
    return proto3.util.equals(Date, a, b);
  }
}

/**
 * @generated from message biochain.v1.Researcher
 */
export class Researcher extends Message<Researcher> {
  /**
   * @generated from field: string first_name = 1;
   */
  firstName = "";

  /**
   * @generated from field: string last_name = 2;
   */
  lastName = "";

  /**
   * @generated from field: string middle_name = 3;
   */
  middleName = "";

  constructor(data?: PartialMessage<Researcher>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Researcher";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "first_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "last_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "middle_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Researcher {
    return new Researcher().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Researcher {
    return new Researcher().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Researcher {
    return new Researcher().fromJsonString(jsonString, options);
  }

  static equals(a: Researcher | PlainMessage<Researcher> | undefined, b: Researcher | PlainMessage<Researcher> | undefined): boolean {
    return proto3.util.equals(Researcher, a, b);
  }
}

/**
 * @generated from message biochain.v1.Specimen
 */
export class Specimen extends Message<Specimen> {
  /**
   * @generated from field: string collection_id = 1;
   */
  collectionId = "";

  /**
   * @generated from field: string specimen_id = 2;
   */
  specimenId = "";

  /**
   * @generated from field: biochain.v1.Specimen.Primary primary = 3;
   */
  primary?: Specimen_Primary;

  /**
   * @generated from field: biochain.v1.Specimen.Secondary secondary = 4;
   */
  secondary?: Specimen_Secondary;

  /**
   * @generated from field: biochain.v1.Specimen.Taxon taxon = 5;
   */
  taxon?: Specimen_Taxon;

  /**
   * @generated from field: biochain.v1.Specimen.Georeference georeference = 6;
   */
  georeference?: Specimen_Georeference;

  /**
   * @generated from field: map<string, biochain.v1.Specimen.Image> images = 7;
   */
  images: { [key: string]: Specimen_Image } = {};

  /**
   * @generated from field: map<string, biochain.v1.Specimen.Loan> loans = 10;
   */
  loans: { [key: string]: Specimen_Loan } = {};

  /**
   * @generated from field: map<string, biochain.v1.Specimen.Grant> grants = 11;
   */
  grants: { [key: string]: Specimen_Grant } = {};

  /**
   * @generated from field: auth.StateActivity last_modified = 20;
   */
  lastModified?: StateActivity;

  constructor(data?: PartialMessage<Specimen>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Specimen";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "collection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "specimen_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "primary", kind: "message", T: Specimen_Primary },
    { no: 4, name: "secondary", kind: "message", T: Specimen_Secondary },
    { no: 5, name: "taxon", kind: "message", T: Specimen_Taxon },
    { no: 6, name: "georeference", kind: "message", T: Specimen_Georeference },
    { no: 7, name: "images", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Specimen_Image} },
    { no: 10, name: "loans", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Specimen_Loan} },
    { no: 11, name: "grants", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Specimen_Grant} },
    { no: 20, name: "last_modified", kind: "message", T: StateActivity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Specimen {
    return new Specimen().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Specimen {
    return new Specimen().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Specimen {
    return new Specimen().fromJsonString(jsonString, options);
  }

  static equals(a: Specimen | PlainMessage<Specimen> | undefined, b: Specimen | PlainMessage<Specimen> | undefined): boolean {
    return proto3.util.equals(Specimen, a, b);
  }
}

/**
 * @generated from message biochain.v1.Specimen.Primary
 */
export class Specimen_Primary extends Message<Specimen_Primary> {
  /**
   * @generated from field: string catalog_number = 1;
   */
  catalogNumber = "";

  /**
   * @generated from field: string accession_number = 2;
   */
  accessionNumber = "";

  /**
   * @generated from field: string field_number = 3;
   */
  fieldNumber = "";

  /**
   * @generated from field: string tissue_number = 4;
   */
  tissueNumber = "";

  /**
   * @generated from field: string cataloger = 5;
   */
  cataloger = "";

  /**
   * @generated from field: string collector = 6;
   */
  collector = "";

  /**
   * @generated from field: string determiner = 7;
   */
  determiner = "";

  /**
   * @generated from field: biochain.v1.Date field_date = 8;
   */
  fieldDate?: Date;

  /**
   * @generated from field: biochain.v1.Date catalog_date = 9;
   */
  catalogDate?: Date;

  /**
   * @generated from field: biochain.v1.Date determined_date = 10;
   */
  determinedDate?: Date;

  /**
   * @generated from field: string determined_reason = 11;
   */
  determinedReason = "";

  /**
   * @generated from field: biochain.v1.Date original_date = 12;
   */
  originalDate?: Date;

  /**
   * @generated from field: auth.StateActivity last_modified = 20;
   */
  lastModified?: StateActivity;

  constructor(data?: PartialMessage<Specimen_Primary>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Specimen.Primary";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "catalog_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "accession_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "field_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "tissue_number", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "cataloger", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "collector", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "determiner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "field_date", kind: "message", T: Date },
    { no: 9, name: "catalog_date", kind: "message", T: Date },
    { no: 10, name: "determined_date", kind: "message", T: Date },
    { no: 11, name: "determined_reason", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "original_date", kind: "message", T: Date },
    { no: 20, name: "last_modified", kind: "message", T: StateActivity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Specimen_Primary {
    return new Specimen_Primary().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Specimen_Primary {
    return new Specimen_Primary().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Specimen_Primary {
    return new Specimen_Primary().fromJsonString(jsonString, options);
  }

  static equals(a: Specimen_Primary | PlainMessage<Specimen_Primary> | undefined, b: Specimen_Primary | PlainMessage<Specimen_Primary> | undefined): boolean {
    return proto3.util.equals(Specimen_Primary, a, b);
  }
}

/**
 * @generated from message biochain.v1.Specimen.Secondary
 */
export class Specimen_Secondary extends Message<Specimen_Secondary> {
  /**
   * @generated from field: biochain.v1.Specimen.Secondary.SEX sex = 1;
   */
  sex = Specimen_Secondary_SEX.SEX_UNDEFINED;

  /**
   * @generated from field: biochain.v1.Specimen.Secondary.AGE age = 2;
   */
  age = Specimen_Secondary_AGE.AGE_UNDEFINED;

  /**
   * @generated from field: double weight = 3;
   */
  weight = 0;

  /**
   * @generated from field: string weight_units = 4;
   */
  weightUnits = "";

  /**
   * @generated from field: map<string, biochain.v1.Specimen.Secondary.Preparation> preparations = 5;
   */
  preparations: { [key: string]: Specimen_Secondary_Preparation } = {};

  /**
   * @generated from field: string condition = 6;
   */
  condition = "";

  /**
   * @generated from field: string molt = 7;
   */
  molt = "";

  /**
   * @generated from field: string notes = 8;
   */
  notes = "";

  /**
   * @generated from field: auth.StateActivity last_modified = 9;
   */
  lastModified?: StateActivity;

  constructor(data?: PartialMessage<Specimen_Secondary>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Specimen.Secondary";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "sex", kind: "enum", T: proto3.getEnumType(Specimen_Secondary_SEX) },
    { no: 2, name: "age", kind: "enum", T: proto3.getEnumType(Specimen_Secondary_AGE) },
    { no: 3, name: "weight", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 4, name: "weight_units", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "preparations", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Specimen_Secondary_Preparation} },
    { no: 6, name: "condition", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "molt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "last_modified", kind: "message", T: StateActivity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Specimen_Secondary {
    return new Specimen_Secondary().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Specimen_Secondary {
    return new Specimen_Secondary().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Specimen_Secondary {
    return new Specimen_Secondary().fromJsonString(jsonString, options);
  }

  static equals(a: Specimen_Secondary | PlainMessage<Specimen_Secondary> | undefined, b: Specimen_Secondary | PlainMessage<Specimen_Secondary> | undefined): boolean {
    return proto3.util.equals(Specimen_Secondary, a, b);
  }
}

/**
 * @generated from enum biochain.v1.Specimen.Secondary.SEX
 */
export enum Specimen_Secondary_SEX {
  /**
   * @generated from enum value: SEX_UNDEFINED = 0;
   */
  SEX_UNDEFINED = 0,

  /**
   * @generated from enum value: SEX_UNKNOWN = 1;
   */
  SEX_UNKNOWN = 1,

  /**
   * @generated from enum value: SEX_ATYPICAL = 2;
   */
  SEX_ATYPICAL = 2,

  /**
   * @generated from enum value: SEX_MALE = 3;
   */
  SEX_MALE = 3,

  /**
   * @generated from enum value: SEX_FEMALE = 4;
   */
  SEX_FEMALE = 4,
}
// Retrieve enum metadata with: proto3.getEnumType(Specimen_Secondary_SEX)
proto3.util.setEnumType(Specimen_Secondary_SEX, "biochain.v1.Specimen.Secondary.SEX", [
  { no: 0, name: "SEX_UNDEFINED" },
  { no: 1, name: "SEX_UNKNOWN" },
  { no: 2, name: "SEX_ATYPICAL" },
  { no: 3, name: "SEX_MALE" },
  { no: 4, name: "SEX_FEMALE" },
]);

/**
 * Secondary.age -field with limited options: NEST, EMBRYO_EGG, CHICK_SUBADULT, ADULT, UNKNOWN, CONTINGENT, blank
 *
 * @generated from enum biochain.v1.Specimen.Secondary.AGE
 */
export enum Specimen_Secondary_AGE {
  /**
   * @generated from enum value: AGE_UNDEFINED = 0;
   */
  AGE_UNDEFINED = 0,

  /**
   * @generated from enum value: AGE_UNKNOWN = 1;
   */
  AGE_UNKNOWN = 1,

  /**
   * @generated from enum value: AGE_NEST = 2;
   */
  AGE_NEST = 2,

  /**
   * @generated from enum value: AGE_EMBRYO_EGG = 3;
   */
  AGE_EMBRYO_EGG = 3,

  /**
   * @generated from enum value: AGE_CHICK_SUBADULT = 4;
   */
  AGE_CHICK_SUBADULT = 4,

  /**
   * @generated from enum value: AGE_ADULT = 5;
   */
  AGE_ADULT = 5,

  /**
   * @generated from enum value: AGE_CONTINGENT = 6;
   */
  AGE_CONTINGENT = 6,
}
// Retrieve enum metadata with: proto3.getEnumType(Specimen_Secondary_AGE)
proto3.util.setEnumType(Specimen_Secondary_AGE, "biochain.v1.Specimen.Secondary.AGE", [
  { no: 0, name: "AGE_UNDEFINED" },
  { no: 1, name: "AGE_UNKNOWN" },
  { no: 2, name: "AGE_NEST" },
  { no: 3, name: "AGE_EMBRYO_EGG" },
  { no: 4, name: "AGE_CHICK_SUBADULT" },
  { no: 5, name: "AGE_ADULT" },
  { no: 6, name: "AGE_CONTINGENT" },
]);

/**
 * @generated from message biochain.v1.Specimen.Secondary.Preparation
 */
export class Specimen_Secondary_Preparation extends Message<Specimen_Secondary_Preparation> {
  /**
   * @generated from field: string verbatim = 1;
   */
  verbatim = "";

  constructor(data?: PartialMessage<Specimen_Secondary_Preparation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Specimen.Secondary.Preparation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "verbatim", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Specimen_Secondary_Preparation {
    return new Specimen_Secondary_Preparation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Specimen_Secondary_Preparation {
    return new Specimen_Secondary_Preparation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Specimen_Secondary_Preparation {
    return new Specimen_Secondary_Preparation().fromJsonString(jsonString, options);
  }

  static equals(a: Specimen_Secondary_Preparation | PlainMessage<Specimen_Secondary_Preparation> | undefined, b: Specimen_Secondary_Preparation | PlainMessage<Specimen_Secondary_Preparation> | undefined): boolean {
    return proto3.util.equals(Specimen_Secondary_Preparation, a, b);
  }
}

/**
 * @generated from message biochain.v1.Specimen.Taxon
 */
export class Specimen_Taxon extends Message<Specimen_Taxon> {
  /**
   * @generated from field: string kingdom = 1;
   */
  kingdom = "";

  /**
   * @generated from field: string phylum = 2;
   */
  phylum = "";

  /**
   * @generated from field: string class = 3;
   */
  class = "";

  /**
   * @generated from field: string order = 4;
   */
  order = "";

  /**
   * @generated from field: string family = 5;
   */
  family = "";

  /**
   * @generated from field: string genus = 6;
   */
  genus = "";

  /**
   * @generated from field: string species = 7;
   */
  species = "";

  /**
   * @generated from field: string subspecies = 8;
   */
  subspecies = "";

  /**
   * @generated from field: auth.StateActivity last_modified = 20;
   */
  lastModified?: StateActivity;

  constructor(data?: PartialMessage<Specimen_Taxon>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Specimen.Taxon";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "kingdom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "phylum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "class", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "order", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "family", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "genus", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "species", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "subspecies", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "last_modified", kind: "message", T: StateActivity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Specimen_Taxon {
    return new Specimen_Taxon().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Specimen_Taxon {
    return new Specimen_Taxon().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Specimen_Taxon {
    return new Specimen_Taxon().fromJsonString(jsonString, options);
  }

  static equals(a: Specimen_Taxon | PlainMessage<Specimen_Taxon> | undefined, b: Specimen_Taxon | PlainMessage<Specimen_Taxon> | undefined): boolean {
    return proto3.util.equals(Specimen_Taxon, a, b);
  }
}

/**
 * @generated from message biochain.v1.Specimen.Georeference
 */
export class Specimen_Georeference extends Message<Specimen_Georeference> {
  /**
   * @generated from field: string country = 1;
   */
  country = "";

  /**
   * @generated from field: string state_province = 2;
   */
  stateProvince = "";

  /**
   * @generated from field: string county = 3;
   */
  county = "";

  /**
   * @generated from field: string locality = 4;
   */
  locality = "";

  /**
   * @generated from field: double latitude = 5;
   */
  latitude = 0;

  /**
   * @generated from field: double longitude = 6;
   */
  longitude = 0;

  /**
   * @generated from field: string habitat = 7;
   */
  habitat = "";

  /**
   * Georeference.continent -string 32 characters
   *
   * @generated from field: string continent = 8;
   */
  continent = "";

  /**
   * Georeference.locationRemarks -string 100-1k characters
   *
   * @generated from field: string location_remarks = 9;
   */
  locationRemarks = "";

  /**
   * Georeference.coordinateUncercaintyInMeters -integer 7 digits
   *
   * @generated from field: int32 coordinate_uncertainty_in_meters = 10;
   */
  coordinateUncertaintyInMeters = 0;

  /**
   * Georeference.georeferenceBy -string 64 characters
   *
   * @generated from field: string georeference_by = 11;
   */
  georeferenceBy = "";

  /**
   * Georeference.georeferenceDate -string MM/DD/YYYY
   *
   * @generated from field: biochain.v1.Date georeference_date = 12;
   */
  georeferenceDate?: Date;

  /**
   * Georeference.georeferenceProtocol -string 256 chars (weblink)
   *
   * @generated from field: string georeference_protocol = 13;
   */
  georeferenceProtocol = "";

  /**
   * Georeference.geodeticDatum -string 16 characters
   *
   * @generated from field: string geodetic_datum = 14;
   */
  geodeticDatum = "";

  /**
   * Georeference.footprintWKT -string 10-100k characters
   *
   * @generated from field: string footprint_wkt = 15;
   */
  footprintWkt = "";

  /**
   * @generated from field: string notes = 19;
   */
  notes = "";

  /**
   * @generated from field: auth.StateActivity last_modified = 20;
   */
  lastModified?: StateActivity;

  constructor(data?: PartialMessage<Specimen_Georeference>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Specimen.Georeference";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "country", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "state_province", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "county", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "locality", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "latitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 6, name: "longitude", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 7, name: "habitat", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "continent", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "location_remarks", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "coordinate_uncertainty_in_meters", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 11, name: "georeference_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "georeference_date", kind: "message", T: Date },
    { no: 13, name: "georeference_protocol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "geodetic_datum", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 15, name: "footprint_wkt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 19, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "last_modified", kind: "message", T: StateActivity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Specimen_Georeference {
    return new Specimen_Georeference().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Specimen_Georeference {
    return new Specimen_Georeference().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Specimen_Georeference {
    return new Specimen_Georeference().fromJsonString(jsonString, options);
  }

  static equals(a: Specimen_Georeference | PlainMessage<Specimen_Georeference> | undefined, b: Specimen_Georeference | PlainMessage<Specimen_Georeference> | undefined): boolean {
    return proto3.util.equals(Specimen_Georeference, a, b);
  }
}

/**
 * Mapped Types
 *
 * @generated from message biochain.v1.Specimen.Image
 */
export class Specimen_Image extends Message<Specimen_Image> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string url = 2;
   */
  url = "";

  /**
   * @generated from field: string notes = 3;
   */
  notes = "";

  /**
   * @generated from field: string hash = 4;
   */
  hash = "";

  /**
   * @generated from field: auth.StateActivity last_modified = 20;
   */
  lastModified?: StateActivity;

  constructor(data?: PartialMessage<Specimen_Image>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Specimen.Image";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "notes", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 20, name: "last_modified", kind: "message", T: StateActivity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Specimen_Image {
    return new Specimen_Image().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Specimen_Image {
    return new Specimen_Image().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Specimen_Image {
    return new Specimen_Image().fromJsonString(jsonString, options);
  }

  static equals(a: Specimen_Image | PlainMessage<Specimen_Image> | undefined, b: Specimen_Image | PlainMessage<Specimen_Image> | undefined): boolean {
    return proto3.util.equals(Specimen_Image, a, b);
  }
}

/**
 * @generated from message biochain.v1.Specimen.Loan
 */
export class Specimen_Loan extends Message<Specimen_Loan> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: string loaned_by = 3;
   */
  loanedBy = "";

  /**
   * @generated from field: string loaned_to = 4;
   */
  loanedTo = "";

  /**
   * @generated from field: biochain.v1.Date loaned_date = 5;
   */
  loanedDate?: Date;

  /**
   * @generated from field: auth.StateActivity last_modified = 20;
   */
  lastModified?: StateActivity;

  constructor(data?: PartialMessage<Specimen_Loan>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Specimen.Loan";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "loaned_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "loaned_to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "loaned_date", kind: "message", T: Date },
    { no: 20, name: "last_modified", kind: "message", T: StateActivity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Specimen_Loan {
    return new Specimen_Loan().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Specimen_Loan {
    return new Specimen_Loan().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Specimen_Loan {
    return new Specimen_Loan().fromJsonString(jsonString, options);
  }

  static equals(a: Specimen_Loan | PlainMessage<Specimen_Loan> | undefined, b: Specimen_Loan | PlainMessage<Specimen_Loan> | undefined): boolean {
    return proto3.util.equals(Specimen_Loan, a, b);
  }
}

/**
 * @generated from message biochain.v1.Specimen.Grant
 */
export class Specimen_Grant extends Message<Specimen_Grant> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: string granted_by = 3;
   */
  grantedBy = "";

  /**
   * @generated from field: string granted_to = 4;
   */
  grantedTo = "";

  /**
   * @generated from field: biochain.v1.Date granted_date = 5;
   */
  grantedDate?: Date;

  /**
   * @generated from field: auth.StateActivity last_modified = 20;
   */
  lastModified?: StateActivity;

  constructor(data?: PartialMessage<Specimen_Grant>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "biochain.v1.Specimen.Grant";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granted_by", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "granted_to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "granted_date", kind: "message", T: Date },
    { no: 20, name: "last_modified", kind: "message", T: StateActivity },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Specimen_Grant {
    return new Specimen_Grant().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Specimen_Grant {
    return new Specimen_Grant().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Specimen_Grant {
    return new Specimen_Grant().fromJsonString(jsonString, options);
  }

  static equals(a: Specimen_Grant | PlainMessage<Specimen_Grant> | undefined, b: Specimen_Grant | PlainMessage<Specimen_Grant> | undefined): boolean {
    return proto3.util.equals(Specimen_Grant, a, b);
  }
}
