"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var es_exports = {};
__export(es_exports, {
  authpb: () => auth_pb_exports,
  cc: () => generic_pb_exports,
  samplepb: () => items_pb_exports,
  utils: () => utils_exports
});
module.exports = __toCommonJS(es_exports);

// gen/auth/v1/auth_pb.js
var auth_pb_exports = {};
__export(auth_pb_exports, {
  ACEntry: () => ACEntry,
  Action: () => Action,
  Attribute: () => Attribute,
  Collection: () => Collection,
  FullItem: () => FullItem,
  HiddenTx: () => HiddenTx,
  HiddenTxList: () => HiddenTxList,
  History: () => History,
  HistoryEntry: () => HistoryEntry,
  Item: () => Item,
  ItemKey: () => ItemKey,
  ItemKind: () => ItemKind,
  KeySchema: () => KeySchema,
  Membership: () => Membership,
  Operation: () => Operation,
  PathPolicy: () => PathPolicy,
  Reference: () => Reference,
  ReferenceKey: () => ReferenceKey,
  Role: () => Role,
  StateActivity: () => StateActivity,
  Suggestion: () => Suggestion,
  TransactionType: () => TransactionType,
  TxError: () => TxError,
  User: () => User
});

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/assert.js
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg);
  }
}
var FLOAT32_MAX = 34028234663852886e22;
var FLOAT32_MIN = -34028234663852886e22;
var UINT32_MAX = 4294967295;
var INT32_MAX = 2147483647;
var INT32_MIN = -2147483648;
function assertInt32(arg) {
  if (typeof arg !== "number")
    throw new Error("invalid int 32: " + typeof arg);
  if (!Number.isInteger(arg) || arg > INT32_MAX || arg < INT32_MIN)
    throw new Error("invalid int 32: " + arg);
}
function assertUInt32(arg) {
  if (typeof arg !== "number")
    throw new Error("invalid uint 32: " + typeof arg);
  if (!Number.isInteger(arg) || arg > UINT32_MAX || arg < 0)
    throw new Error("invalid uint 32: " + arg);
}
function assertFloat32(arg) {
  if (typeof arg !== "number")
    throw new Error("invalid float 32: " + typeof arg);
  if (!Number.isFinite(arg))
    return;
  if (arg > FLOAT32_MAX || arg < FLOAT32_MIN)
    throw new Error("invalid float 32: " + arg);
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/enum.js
var enumTypeSymbol = Symbol("@bufbuild/protobuf/enum-type");
function getEnumType(enumObject) {
  const t = enumObject[enumTypeSymbol];
  assert(t, "missing enum type on enum object");
  return t;
}
function setEnumType(enumObject, typeName, values, opt) {
  enumObject[enumTypeSymbol] = makeEnumType(typeName, values.map((v) => ({
    no: v.no,
    name: v.name,
    localName: enumObject[v.no]
  })), opt);
}
function makeEnumType(typeName, values, _opt) {
  const names = /* @__PURE__ */ Object.create(null);
  const numbers = /* @__PURE__ */ Object.create(null);
  const normalValues = [];
  for (const value of values) {
    const n = normalizeEnumValue(value);
    normalValues.push(n);
    names[value.name] = n;
    numbers[value.no] = n;
  }
  return {
    typeName,
    values: normalValues,
    // We do not surface options at this time
    // options: opt?.options ?? Object.create(null),
    findName(name) {
      return names[name];
    },
    findNumber(no) {
      return numbers[no];
    }
  };
}
function makeEnum(typeName, values, opt) {
  const enumObject = {};
  for (const value of values) {
    const n = normalizeEnumValue(value);
    enumObject[n.localName] = n.no;
    enumObject[n.no] = n.localName;
  }
  setEnumType(enumObject, typeName, values, opt);
  return enumObject;
}
function normalizeEnumValue(value) {
  if ("localName" in value) {
    return value;
  }
  return Object.assign(Object.assign({}, value), { localName: value.name });
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/message.js
var Message = class {
  /**
   * Compare with a message of the same type.
   */
  equals(other) {
    return this.getType().runtime.util.equals(this.getType(), this, other);
  }
  /**
   * Create a deep copy.
   */
  clone() {
    return this.getType().runtime.util.clone(this);
  }
  /**
   * Parse from binary data, merging fields.
   *
   * Repeated fields are appended. Map entries are added, overwriting
   * existing keys.
   *
   * If a message field is already present, it will be merged with the
   * new data.
   */
  fromBinary(bytes, options) {
    const type = this.getType(), format = type.runtime.bin, opt = format.makeReadOptions(options);
    format.readMessage(this, opt.readerFactory(bytes), bytes.byteLength, opt);
    return this;
  }
  /**
   * Parse a message from a JSON value.
   */
  fromJson(jsonValue, options) {
    const type = this.getType(), format = type.runtime.json, opt = format.makeReadOptions(options);
    format.readMessage(type, jsonValue, opt, this);
    return this;
  }
  /**
   * Parse a message from a JSON string.
   */
  fromJsonString(jsonString, options) {
    let json;
    try {
      json = JSON.parse(jsonString);
    } catch (e) {
      throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
    }
    return this.fromJson(json, options);
  }
  /**
   * Serialize the message to binary data.
   */
  toBinary(options) {
    const type = this.getType(), bin = type.runtime.bin, opt = bin.makeWriteOptions(options), writer = opt.writerFactory();
    bin.writeMessage(this, writer, opt);
    return writer.finish();
  }
  /**
   * Serialize the message to a JSON value, a JavaScript value that can be
   * passed to JSON.stringify().
   */
  toJson(options) {
    const type = this.getType(), json = type.runtime.json, opt = json.makeWriteOptions(options);
    return json.writeMessage(this, opt);
  }
  /**
   * Serialize the message to a JSON string.
   */
  toJsonString(options) {
    var _a;
    const value = this.toJson(options);
    return JSON.stringify(value, null, (_a = options === null || options === void 0 ? void 0 : options.prettySpaces) !== null && _a !== void 0 ? _a : 0);
  }
  /**
   * Override for serialization behavior. This will be invoked when calling
   * JSON.stringify on this message (i.e. JSON.stringify(msg)).
   *
   * Note that this will not serialize google.protobuf.Any with a packed
   * message because the protobuf JSON format specifies that it needs to be
   * unpacked, and this is only possible with a type registry to look up the
   * message type.  As a result, attempting to serialize a message with this
   * type will throw an Error.
   *
   * This method is protected because you should not need to invoke it
   * directly -- instead use JSON.stringify or toJsonString for
   * stringified JSON.  Alternatively, if actual JSON is desired, you should
   * use toJson.
   */
  toJSON() {
    return this.toJson({
      emitDefaultValues: true
    });
  }
  /**
   * Retrieve the MessageType of this message - a singleton that represents
   * the protobuf message declaration and provides metadata for reflection-
   * based operations.
   */
  getType() {
    return Object.getPrototypeOf(this).constructor;
  }
};

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/message-type.js
function makeMessageType(runtime, typeName, fields, opt) {
  var _a;
  const localName = (_a = opt === null || opt === void 0 ? void 0 : opt.localName) !== null && _a !== void 0 ? _a : typeName.substring(typeName.lastIndexOf(".") + 1);
  const type = {
    [localName]: function(data) {
      runtime.util.initFields(this);
      runtime.util.initPartial(data, this);
    }
  }[localName];
  Object.setPrototypeOf(type.prototype, new Message());
  Object.assign(type, {
    runtime,
    typeName,
    fields: runtime.util.newFieldList(fields),
    fromBinary(bytes, options) {
      return new type().fromBinary(bytes, options);
    },
    fromJson(jsonValue, options) {
      return new type().fromJson(jsonValue, options);
    },
    fromJsonString(jsonString, options) {
      return new type().fromJsonString(jsonString, options);
    },
    equals(a, b) {
      return runtime.util.equals(type, a, b);
    }
  });
  return type;
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/proto-runtime.js
function makeProtoRuntime(syntax, json, bin, util) {
  return {
    syntax,
    json,
    bin,
    util,
    makeMessageType(typeName, fields, opt) {
      return makeMessageType(this, typeName, fields, opt);
    },
    makeEnum,
    makeEnumType,
    getEnumType
  };
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/field.js
var ScalarType;
(function(ScalarType2) {
  ScalarType2[ScalarType2["DOUBLE"] = 1] = "DOUBLE";
  ScalarType2[ScalarType2["FLOAT"] = 2] = "FLOAT";
  ScalarType2[ScalarType2["INT64"] = 3] = "INT64";
  ScalarType2[ScalarType2["UINT64"] = 4] = "UINT64";
  ScalarType2[ScalarType2["INT32"] = 5] = "INT32";
  ScalarType2[ScalarType2["FIXED64"] = 6] = "FIXED64";
  ScalarType2[ScalarType2["FIXED32"] = 7] = "FIXED32";
  ScalarType2[ScalarType2["BOOL"] = 8] = "BOOL";
  ScalarType2[ScalarType2["STRING"] = 9] = "STRING";
  ScalarType2[ScalarType2["BYTES"] = 12] = "BYTES";
  ScalarType2[ScalarType2["UINT32"] = 13] = "UINT32";
  ScalarType2[ScalarType2["SFIXED32"] = 15] = "SFIXED32";
  ScalarType2[ScalarType2["SFIXED64"] = 16] = "SFIXED64";
  ScalarType2[ScalarType2["SINT32"] = 17] = "SINT32";
  ScalarType2[ScalarType2["SINT64"] = 18] = "SINT64";
})(ScalarType || (ScalarType = {}));
var LongType;
(function(LongType2) {
  LongType2[LongType2["BIGINT"] = 0] = "BIGINT";
  LongType2[LongType2["STRING"] = 1] = "STRING";
})(LongType || (LongType = {}));

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/google/varint.js
function varint64read() {
  let lowBits = 0;
  let highBits = 0;
  for (let shift = 0; shift < 28; shift += 7) {
    let b = this.buf[this.pos++];
    lowBits |= (b & 127) << shift;
    if ((b & 128) == 0) {
      this.assertBounds();
      return [lowBits, highBits];
    }
  }
  let middleByte = this.buf[this.pos++];
  lowBits |= (middleByte & 15) << 28;
  highBits = (middleByte & 112) >> 4;
  if ((middleByte & 128) == 0) {
    this.assertBounds();
    return [lowBits, highBits];
  }
  for (let shift = 3; shift <= 31; shift += 7) {
    let b = this.buf[this.pos++];
    highBits |= (b & 127) << shift;
    if ((b & 128) == 0) {
      this.assertBounds();
      return [lowBits, highBits];
    }
  }
  throw new Error("invalid varint");
}
function varint64write(lo, hi, bytes) {
  for (let i = 0; i < 28; i = i + 7) {
    const shift = lo >>> i;
    const hasNext = !(shift >>> 7 == 0 && hi == 0);
    const byte = (hasNext ? shift | 128 : shift) & 255;
    bytes.push(byte);
    if (!hasNext) {
      return;
    }
  }
  const splitBits = lo >>> 28 & 15 | (hi & 7) << 4;
  const hasMoreBits = !(hi >> 3 == 0);
  bytes.push((hasMoreBits ? splitBits | 128 : splitBits) & 255);
  if (!hasMoreBits) {
    return;
  }
  for (let i = 3; i < 31; i = i + 7) {
    const shift = hi >>> i;
    const hasNext = !(shift >>> 7 == 0);
    const byte = (hasNext ? shift | 128 : shift) & 255;
    bytes.push(byte);
    if (!hasNext) {
      return;
    }
  }
  bytes.push(hi >>> 31 & 1);
}
var TWO_PWR_32_DBL = 4294967296;
function int64FromString(dec) {
  const minus = dec[0] === "-";
  if (minus) {
    dec = dec.slice(1);
  }
  const base = 1e6;
  let lowBits = 0;
  let highBits = 0;
  function add1e6digit(begin, end) {
    const digit1e6 = Number(dec.slice(begin, end));
    highBits *= base;
    lowBits = lowBits * base + digit1e6;
    if (lowBits >= TWO_PWR_32_DBL) {
      highBits = highBits + (lowBits / TWO_PWR_32_DBL | 0);
      lowBits = lowBits % TWO_PWR_32_DBL;
    }
  }
  add1e6digit(-24, -18);
  add1e6digit(-18, -12);
  add1e6digit(-12, -6);
  add1e6digit(-6);
  return minus ? negate(lowBits, highBits) : newBits(lowBits, highBits);
}
function int64ToString(lo, hi) {
  let bits = newBits(lo, hi);
  const negative = bits.hi & 2147483648;
  if (negative) {
    bits = negate(bits.lo, bits.hi);
  }
  const result = uInt64ToString(bits.lo, bits.hi);
  return negative ? "-" + result : result;
}
function uInt64ToString(lo, hi) {
  ({ lo, hi } = toUnsigned(lo, hi));
  if (hi <= 2097151) {
    return String(TWO_PWR_32_DBL * hi + lo);
  }
  const low = lo & 16777215;
  const mid = (lo >>> 24 | hi << 8) & 16777215;
  const high = hi >> 16 & 65535;
  let digitA = low + mid * 6777216 + high * 6710656;
  let digitB = mid + high * 8147497;
  let digitC = high * 2;
  const base = 1e7;
  if (digitA >= base) {
    digitB += Math.floor(digitA / base);
    digitA %= base;
  }
  if (digitB >= base) {
    digitC += Math.floor(digitB / base);
    digitB %= base;
  }
  return digitC.toString() + decimalFrom1e7WithLeadingZeros(digitB) + decimalFrom1e7WithLeadingZeros(digitA);
}
function toUnsigned(lo, hi) {
  return { lo: lo >>> 0, hi: hi >>> 0 };
}
function newBits(lo, hi) {
  return { lo: lo | 0, hi: hi | 0 };
}
function negate(lowBits, highBits) {
  highBits = ~highBits;
  if (lowBits) {
    lowBits = ~lowBits + 1;
  } else {
    highBits += 1;
  }
  return newBits(lowBits, highBits);
}
var decimalFrom1e7WithLeadingZeros = (digit1e7) => {
  const partial = String(digit1e7);
  return "0000000".slice(partial.length) + partial;
};
function varint32write(value, bytes) {
  if (value >= 0) {
    while (value > 127) {
      bytes.push(value & 127 | 128);
      value = value >>> 7;
    }
    bytes.push(value);
  } else {
    for (let i = 0; i < 9; i++) {
      bytes.push(value & 127 | 128);
      value = value >> 7;
    }
    bytes.push(1);
  }
}
function varint32read() {
  let b = this.buf[this.pos++];
  let result = b & 127;
  if ((b & 128) == 0) {
    this.assertBounds();
    return result;
  }
  b = this.buf[this.pos++];
  result |= (b & 127) << 7;
  if ((b & 128) == 0) {
    this.assertBounds();
    return result;
  }
  b = this.buf[this.pos++];
  result |= (b & 127) << 14;
  if ((b & 128) == 0) {
    this.assertBounds();
    return result;
  }
  b = this.buf[this.pos++];
  result |= (b & 127) << 21;
  if ((b & 128) == 0) {
    this.assertBounds();
    return result;
  }
  b = this.buf[this.pos++];
  result |= (b & 15) << 28;
  for (let readBytes = 5; (b & 128) !== 0 && readBytes < 10; readBytes++)
    b = this.buf[this.pos++];
  if ((b & 128) != 0)
    throw new Error("invalid varint");
  this.assertBounds();
  return result >>> 0;
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/proto-int64.js
function makeInt64Support() {
  const dv = new DataView(new ArrayBuffer(8));
  const ok = typeof BigInt === "function" && typeof dv.getBigInt64 === "function" && typeof dv.getBigUint64 === "function" && typeof dv.setBigInt64 === "function" && typeof dv.setBigUint64 === "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1");
  if (ok) {
    const MIN = BigInt("-9223372036854775808"), MAX = BigInt("9223372036854775807"), UMIN = BigInt("0"), UMAX = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: true,
      parse(value) {
        const bi = typeof value == "bigint" ? value : BigInt(value);
        if (bi > MAX || bi < MIN) {
          throw new Error(`int64 invalid: ${value}`);
        }
        return bi;
      },
      uParse(value) {
        const bi = typeof value == "bigint" ? value : BigInt(value);
        if (bi > UMAX || bi < UMIN) {
          throw new Error(`uint64 invalid: ${value}`);
        }
        return bi;
      },
      enc(value) {
        dv.setBigInt64(0, this.parse(value), true);
        return {
          lo: dv.getInt32(0, true),
          hi: dv.getInt32(4, true)
        };
      },
      uEnc(value) {
        dv.setBigInt64(0, this.uParse(value), true);
        return {
          lo: dv.getInt32(0, true),
          hi: dv.getInt32(4, true)
        };
      },
      dec(lo, hi) {
        dv.setInt32(0, lo, true);
        dv.setInt32(4, hi, true);
        return dv.getBigInt64(0, true);
      },
      uDec(lo, hi) {
        dv.setInt32(0, lo, true);
        dv.setInt32(4, hi, true);
        return dv.getBigUint64(0, true);
      }
    };
  }
  const assertInt64String = (value) => assert(/^-?[0-9]+$/.test(value), `int64 invalid: ${value}`);
  const assertUInt64String = (value) => assert(/^[0-9]+$/.test(value), `uint64 invalid: ${value}`);
  return {
    zero: "0",
    supported: false,
    parse(value) {
      if (typeof value != "string") {
        value = value.toString();
      }
      assertInt64String(value);
      return value;
    },
    uParse(value) {
      if (typeof value != "string") {
        value = value.toString();
      }
      assertUInt64String(value);
      return value;
    },
    enc(value) {
      if (typeof value != "string") {
        value = value.toString();
      }
      assertInt64String(value);
      return int64FromString(value);
    },
    uEnc(value) {
      if (typeof value != "string") {
        value = value.toString();
      }
      assertUInt64String(value);
      return int64FromString(value);
    },
    dec(lo, hi) {
      return int64ToString(lo, hi);
    },
    uDec(lo, hi) {
      return uInt64ToString(lo, hi);
    }
  };
}
var protoInt64 = makeInt64Support();

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/binary-encoding.js
var WireType;
(function(WireType2) {
  WireType2[WireType2["Varint"] = 0] = "Varint";
  WireType2[WireType2["Bit64"] = 1] = "Bit64";
  WireType2[WireType2["LengthDelimited"] = 2] = "LengthDelimited";
  WireType2[WireType2["StartGroup"] = 3] = "StartGroup";
  WireType2[WireType2["EndGroup"] = 4] = "EndGroup";
  WireType2[WireType2["Bit32"] = 5] = "Bit32";
})(WireType || (WireType = {}));
var BinaryWriter = class {
  constructor(textEncoder) {
    this.stack = [];
    this.textEncoder = textEncoder !== null && textEncoder !== void 0 ? textEncoder : new TextEncoder();
    this.chunks = [];
    this.buf = [];
  }
  /**
   * Return all bytes written and reset this writer.
   */
  finish() {
    this.chunks.push(new Uint8Array(this.buf));
    let len = 0;
    for (let i = 0; i < this.chunks.length; i++)
      len += this.chunks[i].length;
    let bytes = new Uint8Array(len);
    let offset = 0;
    for (let i = 0; i < this.chunks.length; i++) {
      bytes.set(this.chunks[i], offset);
      offset += this.chunks[i].length;
    }
    this.chunks = [];
    return bytes;
  }
  /**
   * Start a new fork for length-delimited data like a message
   * or a packed repeated field.
   *
   * Must be joined later with `join()`.
   */
  fork() {
    this.stack.push({ chunks: this.chunks, buf: this.buf });
    this.chunks = [];
    this.buf = [];
    return this;
  }
  /**
   * Join the last fork. Write its length and bytes, then
   * return to the previous state.
   */
  join() {
    let chunk = this.finish();
    let prev = this.stack.pop();
    if (!prev)
      throw new Error("invalid state, fork stack empty");
    this.chunks = prev.chunks;
    this.buf = prev.buf;
    this.uint32(chunk.byteLength);
    return this.raw(chunk);
  }
  /**
   * Writes a tag (field number and wire type).
   *
   * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
   *
   * Generated code should compute the tag ahead of time and call `uint32()`.
   */
  tag(fieldNo, type) {
    return this.uint32((fieldNo << 3 | type) >>> 0);
  }
  /**
   * Write a chunk of raw bytes.
   */
  raw(chunk) {
    if (this.buf.length) {
      this.chunks.push(new Uint8Array(this.buf));
      this.buf = [];
    }
    this.chunks.push(chunk);
    return this;
  }
  /**
   * Write a `uint32` value, an unsigned 32 bit varint.
   */
  uint32(value) {
    assertUInt32(value);
    while (value > 127) {
      this.buf.push(value & 127 | 128);
      value = value >>> 7;
    }
    this.buf.push(value);
    return this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(value) {
    assertInt32(value);
    varint32write(value, this.buf);
    return this;
  }
  /**
   * Write a `bool` value, a variant.
   */
  bool(value) {
    this.buf.push(value ? 1 : 0);
    return this;
  }
  /**
   * Write a `bytes` value, length-delimited arbitrary data.
   */
  bytes(value) {
    this.uint32(value.byteLength);
    return this.raw(value);
  }
  /**
   * Write a `string` value, length-delimited data converted to UTF-8 text.
   */
  string(value) {
    let chunk = this.textEncoder.encode(value);
    this.uint32(chunk.byteLength);
    return this.raw(chunk);
  }
  /**
   * Write a `float` value, 32-bit floating point number.
   */
  float(value) {
    assertFloat32(value);
    let chunk = new Uint8Array(4);
    new DataView(chunk.buffer).setFloat32(0, value, true);
    return this.raw(chunk);
  }
  /**
   * Write a `double` value, a 64-bit floating point number.
   */
  double(value) {
    let chunk = new Uint8Array(8);
    new DataView(chunk.buffer).setFloat64(0, value, true);
    return this.raw(chunk);
  }
  /**
   * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
   */
  fixed32(value) {
    assertUInt32(value);
    let chunk = new Uint8Array(4);
    new DataView(chunk.buffer).setUint32(0, value, true);
    return this.raw(chunk);
  }
  /**
   * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
   */
  sfixed32(value) {
    assertInt32(value);
    let chunk = new Uint8Array(4);
    new DataView(chunk.buffer).setInt32(0, value, true);
    return this.raw(chunk);
  }
  /**
   * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
   */
  sint32(value) {
    assertInt32(value);
    value = (value << 1 ^ value >> 31) >>> 0;
    varint32write(value, this.buf);
    return this;
  }
  /**
   * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
   */
  sfixed64(value) {
    let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = protoInt64.enc(value);
    view.setInt32(0, tc.lo, true);
    view.setInt32(4, tc.hi, true);
    return this.raw(chunk);
  }
  /**
   * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
   */
  fixed64(value) {
    let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = protoInt64.uEnc(value);
    view.setInt32(0, tc.lo, true);
    view.setInt32(4, tc.hi, true);
    return this.raw(chunk);
  }
  /**
   * Write a `int64` value, a signed 64-bit varint.
   */
  int64(value) {
    let tc = protoInt64.enc(value);
    varint64write(tc.lo, tc.hi, this.buf);
    return this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(value) {
    let tc = protoInt64.enc(value), sign = tc.hi >> 31, lo = tc.lo << 1 ^ sign, hi = (tc.hi << 1 | tc.lo >>> 31) ^ sign;
    varint64write(lo, hi, this.buf);
    return this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(value) {
    let tc = protoInt64.uEnc(value);
    varint64write(tc.lo, tc.hi, this.buf);
    return this;
  }
};
var BinaryReader = class {
  constructor(buf, textDecoder) {
    this.varint64 = varint64read;
    this.uint32 = varint32read;
    this.buf = buf;
    this.len = buf.length;
    this.pos = 0;
    this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    this.textDecoder = textDecoder !== null && textDecoder !== void 0 ? textDecoder : new TextDecoder();
  }
  /**
   * Reads a tag - field number and wire type.
   */
  tag() {
    let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
    if (fieldNo <= 0 || wireType < 0 || wireType > 5)
      throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
    return [fieldNo, wireType];
  }
  /**
   * Skip one element on the wire and return the skipped data.
   * Supports WireType.StartGroup since v2.0.0-alpha.23.
   */
  skip(wireType) {
    let start = this.pos;
    switch (wireType) {
      case WireType.Varint:
        while (this.buf[this.pos++] & 128) {
        }
        break;
      case WireType.Bit64:
        this.pos += 4;
      case WireType.Bit32:
        this.pos += 4;
        break;
      case WireType.LengthDelimited:
        let len = this.uint32();
        this.pos += len;
        break;
      case WireType.StartGroup:
        let t;
        while ((t = this.tag()[1]) !== WireType.EndGroup) {
          this.skip(t);
        }
        break;
      default:
        throw new Error("cant skip wire type " + wireType);
    }
    this.assertBounds();
    return this.buf.subarray(start, this.pos);
  }
  /**
   * Throws error if position in byte array is out of range.
   */
  assertBounds() {
    if (this.pos > this.len)
      throw new RangeError("premature EOF");
  }
  /**
   * Read a `int32` field, a signed 32 bit varint.
   */
  int32() {
    return this.uint32() | 0;
  }
  /**
   * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
   */
  sint32() {
    let zze = this.uint32();
    return zze >>> 1 ^ -(zze & 1);
  }
  /**
   * Read a `int64` field, a signed 64-bit varint.
   */
  int64() {
    return protoInt64.dec(...this.varint64());
  }
  /**
   * Read a `uint64` field, an unsigned 64-bit varint.
   */
  uint64() {
    return protoInt64.uDec(...this.varint64());
  }
  /**
   * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64() {
    let [lo, hi] = this.varint64();
    let s = -(lo & 1);
    lo = (lo >>> 1 | (hi & 1) << 31) ^ s;
    hi = hi >>> 1 ^ s;
    return protoInt64.dec(lo, hi);
  }
  /**
   * Read a `bool` field, a variant.
   */
  bool() {
    let [lo, hi] = this.varint64();
    return lo !== 0 || hi !== 0;
  }
  /**
   * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
   */
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, true);
  }
  /**
   * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
   */
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, true);
  }
  /**
   * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
   */
  fixed64() {
    return protoInt64.uDec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
   */
  sfixed64() {
    return protoInt64.dec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `float` field, 32-bit floating point number.
   */
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, true);
  }
  /**
   * Read a `double` field, a 64-bit floating point number.
   */
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, true);
  }
  /**
   * Read a `bytes` field, length-delimited arbitrary data.
   */
  bytes() {
    let len = this.uint32(), start = this.pos;
    this.pos += len;
    this.assertBounds();
    return this.buf.subarray(start, start + len);
  }
  /**
   * Read a `string` field, length-delimited data converted to UTF-8 text.
   */
  string() {
    return this.textDecoder.decode(this.bytes());
  }
};

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/field-wrapper.js
function wrapField(type, value) {
  if (value instanceof Message || !type.fieldWrapper) {
    return value;
  }
  return type.fieldWrapper.wrapField(value);
}
var wktWrapperToScalarType = {
  "google.protobuf.DoubleValue": ScalarType.DOUBLE,
  "google.protobuf.FloatValue": ScalarType.FLOAT,
  "google.protobuf.Int64Value": ScalarType.INT64,
  "google.protobuf.UInt64Value": ScalarType.UINT64,
  "google.protobuf.Int32Value": ScalarType.INT32,
  "google.protobuf.UInt32Value": ScalarType.UINT32,
  "google.protobuf.BoolValue": ScalarType.BOOL,
  "google.protobuf.StringValue": ScalarType.STRING,
  "google.protobuf.BytesValue": ScalarType.BYTES
};

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/scalars.js
function scalarEquals(type, a, b) {
  if (a === b) {
    return true;
  }
  if (type == ScalarType.BYTES) {
    if (!(a instanceof Uint8Array) || !(b instanceof Uint8Array)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
  switch (type) {
    case ScalarType.UINT64:
    case ScalarType.FIXED64:
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      return a == b;
  }
  return false;
}
function scalarDefaultValue(type, longType) {
  switch (type) {
    case ScalarType.BOOL:
      return false;
    case ScalarType.UINT64:
    case ScalarType.FIXED64:
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      return longType == 0 ? protoInt64.zero : "0";
    case ScalarType.DOUBLE:
    case ScalarType.FLOAT:
      return 0;
    case ScalarType.BYTES:
      return new Uint8Array(0);
    case ScalarType.STRING:
      return "";
    default:
      return 0;
  }
}
function scalarTypeInfo(type, value) {
  const isUndefined = value === void 0;
  let wireType = WireType.Varint;
  let isIntrinsicDefault = value === 0;
  switch (type) {
    case ScalarType.STRING:
      isIntrinsicDefault = isUndefined || !value.length;
      wireType = WireType.LengthDelimited;
      break;
    case ScalarType.BOOL:
      isIntrinsicDefault = value === false;
      break;
    case ScalarType.DOUBLE:
      wireType = WireType.Bit64;
      break;
    case ScalarType.FLOAT:
      wireType = WireType.Bit32;
      break;
    case ScalarType.INT64:
      isIntrinsicDefault = isUndefined || value == 0;
      break;
    case ScalarType.UINT64:
      isIntrinsicDefault = isUndefined || value == 0;
      break;
    case ScalarType.FIXED64:
      isIntrinsicDefault = isUndefined || value == 0;
      wireType = WireType.Bit64;
      break;
    case ScalarType.BYTES:
      isIntrinsicDefault = isUndefined || !value.byteLength;
      wireType = WireType.LengthDelimited;
      break;
    case ScalarType.FIXED32:
      wireType = WireType.Bit32;
      break;
    case ScalarType.SFIXED32:
      wireType = WireType.Bit32;
      break;
    case ScalarType.SFIXED64:
      isIntrinsicDefault = isUndefined || value == 0;
      wireType = WireType.Bit64;
      break;
    case ScalarType.SINT64:
      isIntrinsicDefault = isUndefined || value == 0;
      break;
  }
  const method = ScalarType[type].toLowerCase();
  return [wireType, method, isUndefined || isIntrinsicDefault];
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/binary-format-common.js
var unknownFieldsSymbol = Symbol("@bufbuild/protobuf/unknown-fields");
var readDefaults = {
  readUnknownFields: true,
  readerFactory: (bytes) => new BinaryReader(bytes)
};
var writeDefaults = {
  writeUnknownFields: true,
  writerFactory: () => new BinaryWriter()
};
function makeReadOptions(options) {
  return options ? Object.assign(Object.assign({}, readDefaults), options) : readDefaults;
}
function makeWriteOptions(options) {
  return options ? Object.assign(Object.assign({}, writeDefaults), options) : writeDefaults;
}
function makeBinaryFormatCommon() {
  return {
    makeReadOptions,
    makeWriteOptions,
    listUnknownFields(message) {
      var _a;
      return (_a = message[unknownFieldsSymbol]) !== null && _a !== void 0 ? _a : [];
    },
    discardUnknownFields(message) {
      delete message[unknownFieldsSymbol];
    },
    writeUnknownFields(message, writer) {
      const m = message;
      const c = m[unknownFieldsSymbol];
      if (c) {
        for (const f of c) {
          writer.tag(f.no, f.wireType).raw(f.data);
        }
      }
    },
    onUnknownField(message, no, wireType, data) {
      const m = message;
      if (!Array.isArray(m[unknownFieldsSymbol])) {
        m[unknownFieldsSymbol] = [];
      }
      m[unknownFieldsSymbol].push({ no, wireType, data });
    },
    readMessage(message, reader, length, options) {
      const type = message.getType();
      const end = length === void 0 ? reader.len : reader.pos + length;
      while (reader.pos < end) {
        const [fieldNo, wireType] = reader.tag(), field = type.fields.find(fieldNo);
        if (!field) {
          const data = reader.skip(wireType);
          if (options.readUnknownFields) {
            this.onUnknownField(message, fieldNo, wireType, data);
          }
          continue;
        }
        let target = message, repeated = field.repeated, localName = field.localName;
        if (field.oneof) {
          target = target[field.oneof.localName];
          if (target.case != localName) {
            delete target.value;
          }
          target.case = localName;
          localName = "value";
        }
        switch (field.kind) {
          case "scalar":
          case "enum":
            const scalarType = field.kind == "enum" ? ScalarType.INT32 : field.T;
            let read = readScalar;
            if (field.kind == "scalar" && field.L > 0) {
              read = readScalarLTString;
            }
            if (repeated) {
              let arr = target[localName];
              if (wireType == WireType.LengthDelimited && scalarType != ScalarType.STRING && scalarType != ScalarType.BYTES) {
                let e = reader.uint32() + reader.pos;
                while (reader.pos < e) {
                  arr.push(read(reader, scalarType));
                }
              } else {
                arr.push(read(reader, scalarType));
              }
            } else {
              target[localName] = read(reader, scalarType);
            }
            break;
          case "message":
            const messageType = field.T;
            if (repeated) {
              target[localName].push(readMessageField(reader, new messageType(), options));
            } else {
              if (target[localName] instanceof Message) {
                readMessageField(reader, target[localName], options);
              } else {
                target[localName] = readMessageField(reader, new messageType(), options);
                if (messageType.fieldWrapper && !field.oneof && !field.repeated) {
                  target[localName] = messageType.fieldWrapper.unwrapField(target[localName]);
                }
              }
            }
            break;
          case "map":
            let [mapKey, mapVal] = readMapEntry(field, reader, options);
            target[localName][mapKey] = mapVal;
            break;
        }
      }
    }
  };
}
function readMessageField(reader, message, options) {
  const format = message.getType().runtime.bin;
  format.readMessage(message, reader, reader.uint32(), options);
  return message;
}
function readMapEntry(field, reader, options) {
  const length = reader.uint32(), end = reader.pos + length;
  let key, val;
  while (reader.pos < end) {
    let [fieldNo] = reader.tag();
    switch (fieldNo) {
      case 1:
        key = readScalar(reader, field.K);
        break;
      case 2:
        switch (field.V.kind) {
          case "scalar":
            val = readScalar(reader, field.V.T);
            break;
          case "enum":
            val = reader.int32();
            break;
          case "message":
            val = readMessageField(reader, new field.V.T(), options);
            break;
        }
        break;
    }
  }
  if (key === void 0) {
    let keyRaw = scalarDefaultValue(field.K, LongType.BIGINT);
    key = field.K == ScalarType.BOOL ? keyRaw.toString() : keyRaw;
  }
  if (typeof key != "string" && typeof key != "number") {
    key = key.toString();
  }
  if (val === void 0) {
    switch (field.V.kind) {
      case "scalar":
        val = scalarDefaultValue(field.V.T, LongType.BIGINT);
        break;
      case "enum":
        val = 0;
        break;
      case "message":
        val = new field.V.T();
        break;
    }
  }
  return [key, val];
}
function readScalarLTString(reader, type) {
  const v = readScalar(reader, type);
  return typeof v == "bigint" ? v.toString() : v;
}
function readScalar(reader, type) {
  switch (type) {
    case ScalarType.STRING:
      return reader.string();
    case ScalarType.BOOL:
      return reader.bool();
    case ScalarType.DOUBLE:
      return reader.double();
    case ScalarType.FLOAT:
      return reader.float();
    case ScalarType.INT32:
      return reader.int32();
    case ScalarType.INT64:
      return reader.int64();
    case ScalarType.UINT64:
      return reader.uint64();
    case ScalarType.FIXED64:
      return reader.fixed64();
    case ScalarType.BYTES:
      return reader.bytes();
    case ScalarType.FIXED32:
      return reader.fixed32();
    case ScalarType.SFIXED32:
      return reader.sfixed32();
    case ScalarType.SFIXED64:
      return reader.sfixed64();
    case ScalarType.SINT64:
      return reader.sint64();
    case ScalarType.UINT32:
      return reader.uint32();
    case ScalarType.SINT32:
      return reader.sint32();
  }
}
function writeMapEntry(writer, options, field, key, value) {
  writer.tag(field.no, WireType.LengthDelimited);
  writer.fork();
  let keyValue = key;
  switch (field.K) {
    case ScalarType.INT32:
    case ScalarType.FIXED32:
    case ScalarType.UINT32:
    case ScalarType.SFIXED32:
    case ScalarType.SINT32:
      keyValue = Number.parseInt(key);
      break;
    case ScalarType.BOOL:
      assert(key == "true" || key == "false");
      keyValue = key == "true";
      break;
  }
  writeScalar(writer, field.K, 1, keyValue, true);
  switch (field.V.kind) {
    case "scalar":
      writeScalar(writer, field.V.T, 2, value, true);
      break;
    case "enum":
      writeScalar(writer, ScalarType.INT32, 2, value, true);
      break;
    case "message":
      writeMessageField(writer, options, field.V.T, 2, value);
      break;
  }
  writer.join();
}
function writeMessageField(writer, options, type, fieldNo, value) {
  if (value !== void 0) {
    const message = wrapField(type, value);
    writer.tag(fieldNo, WireType.LengthDelimited).bytes(message.toBinary(options));
  }
}
function writeScalar(writer, type, fieldNo, value, emitIntrinsicDefault) {
  let [wireType, method, isIntrinsicDefault] = scalarTypeInfo(type, value);
  if (!isIntrinsicDefault || emitIntrinsicDefault) {
    writer.tag(fieldNo, wireType)[method](value);
  }
}
function writePacked(writer, type, fieldNo, value) {
  if (!value.length) {
    return;
  }
  writer.tag(fieldNo, WireType.LengthDelimited).fork();
  let [, method] = scalarTypeInfo(type);
  for (let i = 0; i < value.length; i++) {
    writer[method](value[i]);
  }
  writer.join();
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/binary-format-proto3.js
function makeBinaryFormatProto3() {
  return Object.assign(Object.assign({}, makeBinaryFormatCommon()), { writeMessage(message, writer, options) {
    const type = message.getType();
    for (const field of type.fields.byNumber()) {
      let value, repeated = field.repeated, localName = field.localName;
      if (field.oneof) {
        const oneof = message[field.oneof.localName];
        if (oneof.case !== localName) {
          continue;
        }
        value = oneof.value;
      } else {
        value = message[localName];
      }
      switch (field.kind) {
        case "scalar":
        case "enum":
          let scalarType = field.kind == "enum" ? ScalarType.INT32 : field.T;
          if (repeated) {
            if (field.packed) {
              writePacked(writer, scalarType, field.no, value);
            } else {
              for (const item of value) {
                writeScalar(writer, scalarType, field.no, item, true);
              }
            }
          } else {
            if (value !== void 0) {
              writeScalar(writer, scalarType, field.no, value, !!field.oneof || field.opt);
            }
          }
          break;
        case "message":
          if (repeated) {
            for (const item of value) {
              writeMessageField(writer, options, field.T, field.no, item);
            }
          } else {
            writeMessageField(writer, options, field.T, field.no, value);
          }
          break;
        case "map":
          for (const [key, val] of Object.entries(value)) {
            writeMapEntry(writer, options, field, key, val);
          }
          break;
      }
    }
    if (options.writeUnknownFields) {
      this.writeUnknownFields(message, writer);
    }
    return writer;
  } });
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/proto-base64.js
var encTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
var decTable = [];
for (let i = 0; i < encTable.length; i++)
  decTable[encTable[i].charCodeAt(0)] = i;
decTable["-".charCodeAt(0)] = encTable.indexOf("+");
decTable["_".charCodeAt(0)] = encTable.indexOf("/");
var protoBase64 = {
  /**
   * Decodes a base64 string to a byte array.
   *
   * - ignores white-space, including line breaks and tabs
   * - allows inner padding (can decode concatenated base64 strings)
   * - does not require padding
   * - understands base64url encoding:
   *   "-" instead of "+",
   *   "_" instead of "/",
   *   no padding
   */
  dec(base64Str) {
    let es = base64Str.length * 3 / 4;
    if (base64Str[base64Str.length - 2] == "=")
      es -= 2;
    else if (base64Str[base64Str.length - 1] == "=")
      es -= 1;
    let bytes = new Uint8Array(es), bytePos = 0, groupPos = 0, b, p = 0;
    for (let i = 0; i < base64Str.length; i++) {
      b = decTable[base64Str.charCodeAt(i)];
      if (b === void 0) {
        switch (base64Str[i]) {
          case "=":
            groupPos = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
      }
      switch (groupPos) {
        case 0:
          p = b;
          groupPos = 1;
          break;
        case 1:
          bytes[bytePos++] = p << 2 | (b & 48) >> 4;
          p = b;
          groupPos = 2;
          break;
        case 2:
          bytes[bytePos++] = (p & 15) << 4 | (b & 60) >> 2;
          p = b;
          groupPos = 3;
          break;
        case 3:
          bytes[bytePos++] = (p & 3) << 6 | b;
          groupPos = 0;
          break;
      }
    }
    if (groupPos == 1)
      throw Error("invalid base64 string.");
    return bytes.subarray(0, bytePos);
  },
  /**
   * Encode a byte array to a base64 string.
   */
  enc(bytes) {
    let base64 = "", groupPos = 0, b, p = 0;
    for (let i = 0; i < bytes.length; i++) {
      b = bytes[i];
      switch (groupPos) {
        case 0:
          base64 += encTable[b >> 2];
          p = (b & 3) << 4;
          groupPos = 1;
          break;
        case 1:
          base64 += encTable[p | b >> 4];
          p = (b & 15) << 2;
          groupPos = 2;
          break;
        case 2:
          base64 += encTable[p | b >> 6];
          base64 += encTable[b & 63];
          groupPos = 0;
          break;
      }
    }
    if (groupPos) {
      base64 += encTable[p];
      base64 += "=";
      if (groupPos == 1)
        base64 += "=";
    }
    return base64;
  }
};

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/json-format-common.js
var jsonReadDefaults = {
  ignoreUnknownFields: false
};
var jsonWriteDefaults = {
  emitDefaultValues: false,
  enumAsInteger: false,
  useProtoFieldName: false,
  prettySpaces: 0
};
function makeReadOptions2(options) {
  return options ? Object.assign(Object.assign({}, jsonReadDefaults), options) : jsonReadDefaults;
}
function makeWriteOptions2(options) {
  return options ? Object.assign(Object.assign({}, jsonWriteDefaults), options) : jsonWriteDefaults;
}
function makeJsonFormatCommon(makeWriteField) {
  const writeField = makeWriteField(writeEnum, writeScalar2);
  return {
    makeReadOptions: makeReadOptions2,
    makeWriteOptions: makeWriteOptions2,
    readMessage(type, json, options, message) {
      if (json == null || Array.isArray(json) || typeof json != "object") {
        throw new Error(`cannot decode message ${type.typeName} from JSON: ${this.debug(json)}`);
      }
      message = message !== null && message !== void 0 ? message : new type();
      const oneofSeen = {};
      for (const [jsonKey, jsonValue] of Object.entries(json)) {
        const field = type.fields.findJsonName(jsonKey);
        if (!field) {
          if (!options.ignoreUnknownFields) {
            throw new Error(`cannot decode message ${type.typeName} from JSON: key "${jsonKey}" is unknown`);
          }
          continue;
        }
        let localName = field.localName;
        let target = message;
        if (field.oneof) {
          if (jsonValue === null && field.kind == "scalar") {
            continue;
          }
          const seen = oneofSeen[field.oneof.localName];
          if (seen) {
            throw new Error(`cannot decode message ${type.typeName} from JSON: multiple keys for oneof "${field.oneof.name}" present: "${seen}", "${jsonKey}"`);
          }
          oneofSeen[field.oneof.localName] = jsonKey;
          target = target[field.oneof.localName] = { case: localName };
          localName = "value";
        }
        if (field.repeated) {
          if (jsonValue === null) {
            continue;
          }
          if (!Array.isArray(jsonValue)) {
            throw new Error(`cannot decode field ${type.typeName}.${field.name} from JSON: ${this.debug(jsonValue)}`);
          }
          const targetArray = target[localName];
          for (const jsonItem of jsonValue) {
            if (jsonItem === null) {
              throw new Error(`cannot decode field ${type.typeName}.${field.name} from JSON: ${this.debug(jsonItem)}`);
            }
            let val;
            switch (field.kind) {
              case "message":
                val = field.T.fromJson(jsonItem, options);
                break;
              case "enum":
                val = readEnum(field.T, jsonItem, options.ignoreUnknownFields);
                if (val === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  val = readScalar2(field.T, jsonItem, field.L);
                } catch (e) {
                  let m = `cannot decode field ${type.typeName}.${field.name} from JSON: ${this.debug(jsonItem)}`;
                  if (e instanceof Error && e.message.length > 0) {
                    m += `: ${e.message}`;
                  }
                  throw new Error(m);
                }
                break;
            }
            targetArray.push(val);
          }
        } else if (field.kind == "map") {
          if (jsonValue === null) {
            continue;
          }
          if (Array.isArray(jsonValue) || typeof jsonValue != "object") {
            throw new Error(`cannot decode field ${type.typeName}.${field.name} from JSON: ${this.debug(jsonValue)}`);
          }
          const targetMap = target[localName];
          for (const [jsonMapKey, jsonMapValue] of Object.entries(jsonValue)) {
            if (jsonMapValue === null) {
              throw new Error(`cannot decode field ${type.typeName}.${field.name} from JSON: map value null`);
            }
            let val;
            switch (field.V.kind) {
              case "message":
                val = field.V.T.fromJson(jsonMapValue, options);
                break;
              case "enum":
                val = readEnum(field.V.T, jsonMapValue, options.ignoreUnknownFields);
                if (val === void 0)
                  continue;
                break;
              case "scalar":
                try {
                  val = readScalar2(field.V.T, jsonMapValue, LongType.BIGINT);
                } catch (e) {
                  let m = `cannot decode map value for field ${type.typeName}.${field.name} from JSON: ${this.debug(jsonValue)}`;
                  if (e instanceof Error && e.message.length > 0) {
                    m += `: ${e.message}`;
                  }
                  throw new Error(m);
                }
                break;
            }
            try {
              targetMap[readScalar2(field.K, field.K == ScalarType.BOOL ? jsonMapKey == "true" ? true : jsonMapKey == "false" ? false : jsonMapKey : jsonMapKey, LongType.BIGINT).toString()] = val;
            } catch (e) {
              let m = `cannot decode map key for field ${type.typeName}.${field.name} from JSON: ${this.debug(jsonValue)}`;
              if (e instanceof Error && e.message.length > 0) {
                m += `: ${e.message}`;
              }
              throw new Error(m);
            }
          }
        } else {
          switch (field.kind) {
            case "message":
              const messageType = field.T;
              if (jsonValue === null && messageType.typeName != "google.protobuf.Value") {
                if (field.oneof) {
                  throw new Error(`cannot decode field ${type.typeName}.${field.name} from JSON: null is invalid for oneof field "${jsonKey}"`);
                }
                continue;
              }
              if (target[localName] instanceof Message) {
                target[localName].fromJson(jsonValue, options);
              } else {
                target[localName] = messageType.fromJson(jsonValue, options);
                if (messageType.fieldWrapper && !field.oneof) {
                  target[localName] = messageType.fieldWrapper.unwrapField(target[localName]);
                }
              }
              break;
            case "enum":
              const enumValue = readEnum(field.T, jsonValue, options.ignoreUnknownFields);
              if (enumValue !== void 0) {
                target[localName] = enumValue;
              }
              break;
            case "scalar":
              try {
                target[localName] = readScalar2(field.T, jsonValue, field.L);
              } catch (e) {
                let m = `cannot decode field ${type.typeName}.${field.name} from JSON: ${this.debug(jsonValue)}`;
                if (e instanceof Error && e.message.length > 0) {
                  m += `: ${e.message}`;
                }
                throw new Error(m);
              }
              break;
          }
        }
      }
      return message;
    },
    writeMessage(message, options) {
      const type = message.getType();
      const json = {};
      let field;
      try {
        for (const member of type.fields.byMember()) {
          let jsonValue;
          if (member.kind == "oneof") {
            const oneof = message[member.localName];
            if (oneof.value === void 0) {
              continue;
            }
            field = member.findField(oneof.case);
            if (!field) {
              throw "oneof case not found: " + oneof.case;
            }
            jsonValue = writeField(field, oneof.value, options);
          } else {
            field = member;
            jsonValue = writeField(field, message[field.localName], options);
          }
          if (jsonValue !== void 0) {
            json[options.useProtoFieldName ? field.name : field.jsonName] = jsonValue;
          }
        }
      } catch (e) {
        const m = field ? `cannot encode field ${type.typeName}.${field.name} to JSON` : `cannot encode message ${type.typeName} to JSON`;
        const r = e instanceof Error ? e.message : String(e);
        throw new Error(m + (r.length > 0 ? `: ${r}` : ""));
      }
      return json;
    },
    readScalar: readScalar2,
    writeScalar: writeScalar2,
    debug: debugJsonValue
  };
}
function debugJsonValue(json) {
  if (json === null) {
    return "null";
  }
  switch (typeof json) {
    case "object":
      return Array.isArray(json) ? "array" : "object";
    case "string":
      return json.length > 100 ? "string" : `"${json.split('"').join('\\"')}"`;
    default:
      return String(json);
  }
}
function readScalar2(type, json, longType) {
  switch (type) {
    case ScalarType.DOUBLE:
    case ScalarType.FLOAT:
      if (json === null)
        return 0;
      if (json === "NaN")
        return Number.NaN;
      if (json === "Infinity")
        return Number.POSITIVE_INFINITY;
      if (json === "-Infinity")
        return Number.NEGATIVE_INFINITY;
      if (json === "") {
        break;
      }
      if (typeof json == "string" && json.trim().length !== json.length) {
        break;
      }
      if (typeof json != "string" && typeof json != "number") {
        break;
      }
      const float = Number(json);
      if (Number.isNaN(float)) {
        break;
      }
      if (!Number.isFinite(float)) {
        break;
      }
      if (type == ScalarType.FLOAT)
        assertFloat32(float);
      return float;
    case ScalarType.INT32:
    case ScalarType.FIXED32:
    case ScalarType.SFIXED32:
    case ScalarType.SINT32:
    case ScalarType.UINT32:
      if (json === null)
        return 0;
      let int32;
      if (typeof json == "number")
        int32 = json;
      else if (typeof json == "string" && json.length > 0) {
        if (json.trim().length === json.length)
          int32 = Number(json);
      }
      if (int32 === void 0)
        break;
      if (type == ScalarType.UINT32)
        assertUInt32(int32);
      else
        assertInt32(int32);
      return int32;
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      if (json === null)
        return protoInt64.zero;
      if (typeof json != "number" && typeof json != "string")
        break;
      const long = protoInt64.parse(json);
      return longType ? long.toString() : long;
    case ScalarType.FIXED64:
    case ScalarType.UINT64:
      if (json === null)
        return protoInt64.zero;
      if (typeof json != "number" && typeof json != "string")
        break;
      const uLong = protoInt64.uParse(json);
      return longType ? uLong.toString() : uLong;
    case ScalarType.BOOL:
      if (json === null)
        return false;
      if (typeof json !== "boolean")
        break;
      return json;
    case ScalarType.STRING:
      if (json === null)
        return "";
      if (typeof json !== "string") {
        break;
      }
      try {
        encodeURIComponent(json);
      } catch (e) {
        throw new Error("invalid UTF8");
      }
      return json;
    case ScalarType.BYTES:
      if (json === null || json === "")
        return new Uint8Array(0);
      if (typeof json !== "string")
        break;
      return protoBase64.dec(json);
  }
  throw new Error();
}
function readEnum(type, json, ignoreUnknownFields) {
  if (json === null) {
    return 0;
  }
  switch (typeof json) {
    case "number":
      if (Number.isInteger(json)) {
        return json;
      }
      break;
    case "string":
      const value = type.findName(json);
      if (value || ignoreUnknownFields) {
        return value === null || value === void 0 ? void 0 : value.no;
      }
      break;
  }
  throw new Error(`cannot decode enum ${type.typeName} from JSON: ${debugJsonValue(json)}`);
}
function writeEnum(type, value, emitIntrinsicDefault, enumAsInteger) {
  var _a;
  if (value === void 0) {
    return value;
  }
  if (value === 0 && !emitIntrinsicDefault) {
    return void 0;
  }
  if (enumAsInteger) {
    return value;
  }
  if (type.typeName == "google.protobuf.NullValue") {
    return null;
  }
  const val = type.findNumber(value);
  return (_a = val === null || val === void 0 ? void 0 : val.name) !== null && _a !== void 0 ? _a : value;
}
function writeScalar2(type, value, emitIntrinsicDefault) {
  if (value === void 0) {
    return void 0;
  }
  switch (type) {
    case ScalarType.INT32:
    case ScalarType.SFIXED32:
    case ScalarType.SINT32:
    case ScalarType.FIXED32:
    case ScalarType.UINT32:
      assert(typeof value == "number");
      return value != 0 || emitIntrinsicDefault ? value : void 0;
    case ScalarType.FLOAT:
    case ScalarType.DOUBLE:
      assert(typeof value == "number");
      if (Number.isNaN(value))
        return "NaN";
      if (value === Number.POSITIVE_INFINITY)
        return "Infinity";
      if (value === Number.NEGATIVE_INFINITY)
        return "-Infinity";
      return value !== 0 || emitIntrinsicDefault ? value : void 0;
    case ScalarType.STRING:
      assert(typeof value == "string");
      return value.length > 0 || emitIntrinsicDefault ? value : void 0;
    case ScalarType.BOOL:
      assert(typeof value == "boolean");
      return value || emitIntrinsicDefault ? value : void 0;
    case ScalarType.UINT64:
    case ScalarType.FIXED64:
    case ScalarType.INT64:
    case ScalarType.SFIXED64:
    case ScalarType.SINT64:
      assert(typeof value == "bigint" || typeof value == "string" || typeof value == "number");
      return emitIntrinsicDefault || value != 0 ? value.toString(10) : void 0;
    case ScalarType.BYTES:
      assert(value instanceof Uint8Array);
      return emitIntrinsicDefault || value.byteLength > 0 ? protoBase64.enc(value) : void 0;
  }
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/json-format-proto3.js
function makeJsonFormatProto3() {
  return makeJsonFormatCommon((writeEnum2, writeScalar3) => {
    return function writeField(field, value, options) {
      if (field.kind == "map") {
        const jsonObj = {};
        switch (field.V.kind) {
          case "scalar":
            for (const [entryKey, entryValue] of Object.entries(value)) {
              const val = writeScalar3(field.V.T, entryValue, true);
              assert(val !== void 0);
              jsonObj[entryKey.toString()] = val;
            }
            break;
          case "message":
            for (const [entryKey, entryValue] of Object.entries(value)) {
              jsonObj[entryKey.toString()] = entryValue.toJson(options);
            }
            break;
          case "enum":
            const enumType = field.V.T;
            for (const [entryKey, entryValue] of Object.entries(value)) {
              assert(entryValue === void 0 || typeof entryValue == "number");
              const val = writeEnum2(enumType, entryValue, true, options.enumAsInteger);
              assert(val !== void 0);
              jsonObj[entryKey.toString()] = val;
            }
            break;
        }
        return options.emitDefaultValues || Object.keys(jsonObj).length > 0 ? jsonObj : void 0;
      } else if (field.repeated) {
        const jsonArr = [];
        switch (field.kind) {
          case "scalar":
            for (let i = 0; i < value.length; i++) {
              jsonArr.push(writeScalar3(field.T, value[i], true));
            }
            break;
          case "enum":
            for (let i = 0; i < value.length; i++) {
              jsonArr.push(writeEnum2(field.T, value[i], true, options.enumAsInteger));
            }
            break;
          case "message":
            for (let i = 0; i < value.length; i++) {
              jsonArr.push(wrapField(field.T, value[i]).toJson(options));
            }
            break;
        }
        return options.emitDefaultValues || jsonArr.length > 0 ? jsonArr : void 0;
      } else {
        switch (field.kind) {
          case "scalar":
            return writeScalar3(field.T, value, !!field.oneof || field.opt || options.emitDefaultValues);
          case "enum":
            return writeEnum2(field.T, value, !!field.oneof || field.opt || options.emitDefaultValues, options.enumAsInteger);
          case "message":
            return value !== void 0 ? wrapField(field.T, value).toJson(options) : void 0;
        }
      }
    };
  });
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/util-common.js
function makeUtilCommon() {
  return {
    setEnumType,
    initPartial(source, target) {
      if (source === void 0) {
        return;
      }
      const type = target.getType();
      for (const member of type.fields.byMember()) {
        const localName = member.localName, t = target, s = source;
        if (s[localName] === void 0) {
          continue;
        }
        switch (member.kind) {
          case "oneof":
            const sk = s[localName].case;
            if (sk === void 0) {
              continue;
            }
            const sourceField = member.findField(sk);
            let val = s[localName].value;
            if (sourceField && sourceField.kind == "message" && !(val instanceof sourceField.T)) {
              val = new sourceField.T(val);
            } else if (sourceField && sourceField.kind === "scalar" && sourceField.T === ScalarType.BYTES) {
              val = toU8Arr(val);
            }
            t[localName] = { case: sk, value: val };
            break;
          case "scalar":
          case "enum":
            let copy = s[localName];
            if (member.T === ScalarType.BYTES) {
              copy = member.repeated ? copy.map(toU8Arr) : toU8Arr(copy);
            }
            t[localName] = copy;
            break;
          case "map":
            switch (member.V.kind) {
              case "scalar":
              case "enum":
                if (member.V.T === ScalarType.BYTES) {
                  for (const [k, v] of Object.entries(s[localName])) {
                    t[localName][k] = toU8Arr(v);
                  }
                } else {
                  Object.assign(t[localName], s[localName]);
                }
                break;
              case "message":
                const messageType = member.V.T;
                for (const k of Object.keys(s[localName])) {
                  let val2 = s[localName][k];
                  if (!messageType.fieldWrapper) {
                    val2 = new messageType(val2);
                  }
                  t[localName][k] = val2;
                }
                break;
            }
            break;
          case "message":
            const mt = member.T;
            if (member.repeated) {
              t[localName] = s[localName].map((val2) => val2 instanceof mt ? val2 : new mt(val2));
            } else if (s[localName] !== void 0) {
              const val2 = s[localName];
              if (mt.fieldWrapper) {
                if (
                  // We can't use BytesValue.typeName as that will create a circular import
                  mt.typeName === "google.protobuf.BytesValue"
                ) {
                  t[localName] = toU8Arr(val2);
                } else {
                  t[localName] = val2;
                }
              } else {
                t[localName] = val2 instanceof mt ? val2 : new mt(val2);
              }
            }
            break;
        }
      }
    },
    equals(type, a, b) {
      if (a === b) {
        return true;
      }
      if (!a || !b) {
        return false;
      }
      return type.fields.byMember().every((m) => {
        const va = a[m.localName];
        const vb = b[m.localName];
        if (m.repeated) {
          if (va.length !== vb.length) {
            return false;
          }
          switch (m.kind) {
            case "message":
              return va.every((a2, i) => m.T.equals(a2, vb[i]));
            case "scalar":
              return va.every((a2, i) => scalarEquals(m.T, a2, vb[i]));
            case "enum":
              return va.every((a2, i) => scalarEquals(ScalarType.INT32, a2, vb[i]));
          }
          throw new Error(`repeated cannot contain ${m.kind}`);
        }
        switch (m.kind) {
          case "message":
            return m.T.equals(va, vb);
          case "enum":
            return scalarEquals(ScalarType.INT32, va, vb);
          case "scalar":
            return scalarEquals(m.T, va, vb);
          case "oneof":
            if (va.case !== vb.case) {
              return false;
            }
            const s = m.findField(va.case);
            if (s === void 0) {
              return true;
            }
            switch (s.kind) {
              case "message":
                return s.T.equals(va.value, vb.value);
              case "enum":
                return scalarEquals(ScalarType.INT32, va.value, vb.value);
              case "scalar":
                return scalarEquals(s.T, va.value, vb.value);
            }
            throw new Error(`oneof cannot contain ${s.kind}`);
          case "map":
            const keys = Object.keys(va).concat(Object.keys(vb));
            switch (m.V.kind) {
              case "message":
                const messageType = m.V.T;
                return keys.every((k) => messageType.equals(va[k], vb[k]));
              case "enum":
                return keys.every((k) => scalarEquals(ScalarType.INT32, va[k], vb[k]));
              case "scalar":
                const scalarType = m.V.T;
                return keys.every((k) => scalarEquals(scalarType, va[k], vb[k]));
            }
            break;
        }
      });
    },
    clone(message) {
      const type = message.getType(), target = new type(), any = target;
      for (const member of type.fields.byMember()) {
        const source = message[member.localName];
        let copy;
        if (member.repeated) {
          copy = source.map(cloneSingularField);
        } else if (member.kind == "map") {
          copy = any[member.localName];
          for (const [key, v] of Object.entries(source)) {
            copy[key] = cloneSingularField(v);
          }
        } else if (member.kind == "oneof") {
          const f = member.findField(source.case);
          copy = f ? { case: source.case, value: cloneSingularField(source.value) } : { case: void 0 };
        } else {
          copy = cloneSingularField(source);
        }
        any[member.localName] = copy;
      }
      return target;
    }
  };
}
function cloneSingularField(value) {
  if (value === void 0) {
    return value;
  }
  if (value instanceof Message) {
    return value.clone();
  }
  if (value instanceof Uint8Array) {
    const c = new Uint8Array(value.byteLength);
    c.set(value);
    return c;
  }
  return value;
}
function toU8Arr(input) {
  return input instanceof Uint8Array ? input : new Uint8Array(input);
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/field-list.js
var InternalFieldList = class {
  constructor(fields, normalizer) {
    this._fields = fields;
    this._normalizer = normalizer;
  }
  findJsonName(jsonName) {
    if (!this.jsonNames) {
      const t = {};
      for (const f of this.list()) {
        t[f.jsonName] = t[f.name] = f;
      }
      this.jsonNames = t;
    }
    return this.jsonNames[jsonName];
  }
  find(fieldNo) {
    if (!this.numbers) {
      const t = {};
      for (const f of this.list()) {
        t[f.no] = f;
      }
      this.numbers = t;
    }
    return this.numbers[fieldNo];
  }
  list() {
    if (!this.all) {
      this.all = this._normalizer(this._fields);
    }
    return this.all;
  }
  byNumber() {
    if (!this.numbersAsc) {
      this.numbersAsc = this.list().concat().sort((a, b) => a.no - b.no);
    }
    return this.numbersAsc;
  }
  byMember() {
    if (!this.members) {
      this.members = [];
      const a = this.members;
      let o;
      for (const f of this.list()) {
        if (f.oneof) {
          if (f.oneof !== o) {
            o = f.oneof;
            a.push(o);
          }
        } else {
          a.push(f);
        }
      }
    }
    return this.members;
  }
};

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/names.js
function localFieldName(protoName, inOneof) {
  const name = protoCamelCase(protoName);
  if (inOneof) {
    return name;
  }
  return safeObjectProperty(safeMessageProperty(name));
}
function localOneofName(protoName) {
  return localFieldName(protoName, false);
}
var fieldJsonName = protoCamelCase;
function protoCamelCase(snakeCase) {
  let capNext = false;
  const b = [];
  for (let i = 0; i < snakeCase.length; i++) {
    let c = snakeCase.charAt(i);
    switch (c) {
      case "_":
        capNext = true;
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        b.push(c);
        capNext = false;
        break;
      default:
        if (capNext) {
          capNext = false;
          c = c.toUpperCase();
        }
        b.push(c);
        break;
    }
  }
  return b.join("");
}
var reservedObjectProperties = /* @__PURE__ */ new Set([
  // names reserved by JavaScript
  "constructor",
  "toString",
  "toJSON",
  "valueOf"
]);
var reservedMessageProperties = /* @__PURE__ */ new Set([
  // names reserved by the runtime
  "getType",
  "clone",
  "equals",
  "fromBinary",
  "fromJson",
  "fromJsonString",
  "toBinary",
  "toJson",
  "toJsonString",
  // names reserved by the runtime for the future
  "toObject"
]);
var fallback = (name) => `${name}$`;
var safeMessageProperty = (name) => {
  if (reservedMessageProperties.has(name)) {
    return fallback(name);
  }
  return name;
};
var safeObjectProperty = (name) => {
  if (reservedObjectProperties.has(name)) {
    return fallback(name);
  }
  return name;
};

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/private/field.js
var InternalOneofInfo = class {
  constructor(name) {
    this.kind = "oneof";
    this.repeated = false;
    this.packed = false;
    this.opt = false;
    this.default = void 0;
    this.fields = [];
    this.name = name;
    this.localName = localOneofName(name);
  }
  addField(field) {
    assert(field.oneof === this, `field ${field.name} not one of ${this.name}`);
    this.fields.push(field);
  }
  findField(localName) {
    if (!this._lookup) {
      this._lookup = /* @__PURE__ */ Object.create(null);
      for (let i = 0; i < this.fields.length; i++) {
        this._lookup[this.fields[i].localName] = this.fields[i];
      }
    }
    return this._lookup[localName];
  }
};

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/proto3.js
var proto3 = makeProtoRuntime("proto3", makeJsonFormatProto3(), makeBinaryFormatProto3(), Object.assign(Object.assign({}, makeUtilCommon()), {
  newFieldList(fields) {
    return new InternalFieldList(fields, normalizeFieldInfosProto3);
  },
  initFields(target) {
    for (const member of target.getType().fields.byMember()) {
      if (member.opt) {
        continue;
      }
      const name = member.localName, t = target;
      if (member.repeated) {
        t[name] = [];
        continue;
      }
      switch (member.kind) {
        case "oneof":
          t[name] = { case: void 0 };
          break;
        case "enum":
          t[name] = 0;
          break;
        case "map":
          t[name] = {};
          break;
        case "scalar":
          t[name] = scalarDefaultValue(member.T, member.L);
          break;
        case "message":
          break;
      }
    }
  }
}));
function normalizeFieldInfosProto3(fieldInfos) {
  var _a, _b, _c, _d;
  const r = [];
  let o;
  for (const field of typeof fieldInfos == "function" ? fieldInfos() : fieldInfos) {
    const f = field;
    f.localName = localFieldName(field.name, field.oneof !== void 0);
    f.jsonName = (_a = field.jsonName) !== null && _a !== void 0 ? _a : fieldJsonName(field.name);
    f.repeated = (_b = field.repeated) !== null && _b !== void 0 ? _b : false;
    if (field.kind == "scalar") {
      f.L = (_c = field.L) !== null && _c !== void 0 ? _c : LongType.BIGINT;
    }
    f.packed = (_d = field.packed) !== null && _d !== void 0 ? _d : field.kind == "enum" || field.kind == "scalar" && field.T != ScalarType.BYTES && field.T != ScalarType.STRING;
    if (field.oneof !== void 0) {
      const ooname = typeof field.oneof == "string" ? field.oneof : field.oneof.name;
      if (!o || o.name != ooname) {
        o = new InternalOneofInfo(ooname);
      }
      f.oneof = o;
      o.addField(f);
    }
    r.push(f);
  }
  return r;
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/create-registry.js
function createRegistry(...types) {
  const messages = {};
  const enums = {};
  const services = {};
  const registry = {
    /**
     * Add a type to the registry. For messages, the types used in message
     * fields are added recursively. For services, the message types used
     * for requests and responses are added recursively.
     */
    add(type) {
      if ("fields" in type) {
        if (!this.findMessage(type.typeName)) {
          messages[type.typeName] = type;
          for (const field of type.fields.list()) {
            if (field.kind == "message") {
              this.add(field.T);
            } else if (field.kind == "map" && field.V.kind == "message") {
              this.add(field.V.T);
            } else if (field.kind == "enum") {
              this.add(field.T);
            }
          }
        }
      } else if ("methods" in type) {
        if (!this.findService(type.typeName)) {
          services[type.typeName] = type;
          for (const method of Object.values(type.methods)) {
            this.add(method.I);
            this.add(method.O);
          }
        }
      } else {
        enums[type.typeName] = type;
      }
    },
    findMessage(typeName) {
      return messages[typeName];
    },
    findEnum(typeName) {
      return enums[typeName];
    },
    findService(typeName) {
      return services[typeName];
    }
  };
  for (const type of types) {
    registry.add(type);
  }
  return registry;
}

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/timestamp_pb.js
var Timestamp = class _Timestamp extends Message {
  constructor(data) {
    super();
    this.seconds = protoInt64.zero;
    this.nanos = 0;
    proto3.util.initPartial(data, this);
  }
  fromJson(json, options) {
    if (typeof json !== "string") {
      throw new Error(`cannot decode google.protobuf.Timestamp from JSON: ${proto3.json.debug(json)}`);
    }
    const matches = json.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
    if (!matches) {
      throw new Error(`cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string`);
    }
    const ms = Date.parse(matches[1] + "-" + matches[2] + "-" + matches[3] + "T" + matches[4] + ":" + matches[5] + ":" + matches[6] + (matches[8] ? matches[8] : "Z"));
    if (Number.isNaN(ms)) {
      throw new Error(`cannot decode google.protobuf.Timestamp from JSON: invalid RFC 3339 string`);
    }
    if (ms < Date.parse("0001-01-01T00:00:00Z") || ms > Date.parse("9999-12-31T23:59:59Z")) {
      throw new Error(`cannot decode message google.protobuf.Timestamp from JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
    }
    this.seconds = protoInt64.parse(ms / 1e3);
    this.nanos = 0;
    if (matches[7]) {
      this.nanos = parseInt("1" + matches[7] + "0".repeat(9 - matches[7].length)) - 1e9;
    }
    return this;
  }
  toJson(options) {
    const ms = Number(this.seconds) * 1e3;
    if (ms < Date.parse("0001-01-01T00:00:00Z") || ms > Date.parse("9999-12-31T23:59:59Z")) {
      throw new Error(`cannot encode google.protobuf.Timestamp to JSON: must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive`);
    }
    if (this.nanos < 0) {
      throw new Error(`cannot encode google.protobuf.Timestamp to JSON: nanos must not be negative`);
    }
    let z = "Z";
    if (this.nanos > 0) {
      const nanosStr = (this.nanos + 1e9).toString().substring(1);
      if (nanosStr.substring(3) === "000000") {
        z = "." + nanosStr.substring(0, 3) + "Z";
      } else if (nanosStr.substring(6) === "000") {
        z = "." + nanosStr.substring(0, 6) + "Z";
      } else {
        z = "." + nanosStr + "Z";
      }
    }
    return new Date(ms).toISOString().replace(".000Z", z);
  }
  toDate() {
    return new Date(Number(this.seconds) * 1e3 + Math.ceil(this.nanos / 1e6));
  }
  static now() {
    return _Timestamp.fromDate(/* @__PURE__ */ new Date());
  }
  static fromDate(date) {
    const ms = date.getTime();
    return new _Timestamp({
      seconds: protoInt64.parse(Math.floor(ms / 1e3)),
      nanos: ms % 1e3 * 1e6
    });
  }
  static fromBinary(bytes, options) {
    return new _Timestamp().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _Timestamp().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _Timestamp().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(_Timestamp, a, b);
  }
};
Timestamp.runtime = proto3;
Timestamp.typeName = "google.protobuf.Timestamp";
Timestamp.fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "seconds",
    kind: "scalar",
    T: 3
    /* ScalarType.INT64 */
  },
  {
    no: 2,
    name: "nanos",
    kind: "scalar",
    T: 5
    /* ScalarType.INT32 */
  }
]);

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/any_pb.js
var Any = class _Any extends Message {
  constructor(data) {
    super();
    this.typeUrl = "";
    this.value = new Uint8Array(0);
    proto3.util.initPartial(data, this);
  }
  toJson(options) {
    var _a;
    if (this.typeUrl === "") {
      return {};
    }
    const typeName = this.typeUrlToName(this.typeUrl);
    const messageType = (_a = options === null || options === void 0 ? void 0 : options.typeRegistry) === null || _a === void 0 ? void 0 : _a.findMessage(typeName);
    if (!messageType) {
      throw new Error(`cannot encode message google.protobuf.Any to JSON: "${this.typeUrl}" is not in the type registry`);
    }
    const message = messageType.fromBinary(this.value);
    let json = message.toJson(options);
    if (typeName.startsWith("google.protobuf.") || (json === null || Array.isArray(json) || typeof json !== "object")) {
      json = { value: json };
    }
    json["@type"] = this.typeUrl;
    return json;
  }
  fromJson(json, options) {
    var _a;
    if (json === null || Array.isArray(json) || typeof json != "object") {
      throw new Error(`cannot decode message google.protobuf.Any from JSON: expected object but got ${json === null ? "null" : Array.isArray(json) ? "array" : typeof json}`);
    }
    if (Object.keys(json).length == 0) {
      return this;
    }
    const typeUrl = json["@type"];
    if (typeof typeUrl != "string" || typeUrl == "") {
      throw new Error(`cannot decode message google.protobuf.Any from JSON: "@type" is empty`);
    }
    const typeName = this.typeUrlToName(typeUrl), messageType = (_a = options === null || options === void 0 ? void 0 : options.typeRegistry) === null || _a === void 0 ? void 0 : _a.findMessage(typeName);
    if (!messageType) {
      throw new Error(`cannot decode message google.protobuf.Any from JSON: ${typeUrl} is not in the type registry`);
    }
    let message;
    if (typeName.startsWith("google.protobuf.") && Object.prototype.hasOwnProperty.call(json, "value")) {
      message = messageType.fromJson(json["value"], options);
    } else {
      const copy = Object.assign({}, json);
      delete copy["@type"];
      message = messageType.fromJson(copy, options);
    }
    this.packFrom(message);
    return this;
  }
  packFrom(message) {
    this.value = message.toBinary();
    this.typeUrl = this.typeNameToUrl(message.getType().typeName);
  }
  unpackTo(target) {
    if (!this.is(target.getType())) {
      return false;
    }
    target.fromBinary(this.value);
    return true;
  }
  unpack(registry) {
    if (this.typeUrl === "") {
      return void 0;
    }
    const messageType = registry.findMessage(this.typeUrlToName(this.typeUrl));
    if (!messageType) {
      return void 0;
    }
    return messageType.fromBinary(this.value);
  }
  is(type) {
    if (this.typeUrl === "") {
      return false;
    }
    const name = this.typeUrlToName(this.typeUrl);
    let typeName = "";
    if (typeof type === "string") {
      typeName = type;
    } else {
      typeName = type.typeName;
    }
    return name === typeName;
  }
  typeNameToUrl(name) {
    return `type.googleapis.com/${name}`;
  }
  typeUrlToName(url) {
    if (!url.length) {
      throw new Error(`invalid type url: ${url}`);
    }
    const slash = url.lastIndexOf("/");
    const name = slash > 0 ? url.substring(slash + 1) : url;
    if (!name.length) {
      throw new Error(`invalid type url: ${url}`);
    }
    return name;
  }
  static pack(message) {
    const any = new _Any();
    any.packFrom(message);
    return any;
  }
  static fromBinary(bytes, options) {
    return new _Any().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _Any().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _Any().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(_Any, a, b);
  }
};
Any.runtime = proto3;
Any.typeName = "google.protobuf.Any";
Any.fields = proto3.util.newFieldList(() => [
  {
    no: 1,
    name: "type_url",
    kind: "scalar",
    T: 9
    /* ScalarType.STRING */
  },
  {
    no: 2,
    name: "value",
    kind: "scalar",
    T: 12
    /* ScalarType.BYTES */
  }
]);

// node_modules/.pnpm/@bufbuild+protobuf@1.4.2/node_modules/@bufbuild/protobuf/dist/esm/google/protobuf/field_mask_pb.js
var FieldMask = class _FieldMask extends Message {
  constructor(data) {
    super();
    this.paths = [];
    proto3.util.initPartial(data, this);
  }
  toJson(options) {
    function protoCamelCase2(snakeCase) {
      let capNext = false;
      const b = [];
      for (let i = 0; i < snakeCase.length; i++) {
        let c = snakeCase.charAt(i);
        switch (c) {
          case "_":
            capNext = true;
            break;
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
            b.push(c);
            capNext = false;
            break;
          default:
            if (capNext) {
              capNext = false;
              c = c.toUpperCase();
            }
            b.push(c);
            break;
        }
      }
      return b.join("");
    }
    return this.paths.map((p) => {
      if (p.match(/_[0-9]?_/g) || p.match(/[A-Z]/g)) {
        throw new Error('cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name "' + p + '" is irreversible');
      }
      return protoCamelCase2(p);
    }).join(",");
  }
  fromJson(json, options) {
    if (typeof json !== "string") {
      throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + proto3.json.debug(json));
    }
    if (json === "") {
      return this;
    }
    function camelToSnake(str) {
      if (str.includes("_")) {
        throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
      }
      const sc = str.replace(/[A-Z]/g, (letter) => "_" + letter.toLowerCase());
      return sc[0] === "_" ? sc.substring(1) : sc;
    }
    this.paths = json.split(",").map(camelToSnake);
    return this;
  }
  static fromBinary(bytes, options) {
    return new _FieldMask().fromBinary(bytes, options);
  }
  static fromJson(jsonValue, options) {
    return new _FieldMask().fromJson(jsonValue, options);
  }
  static fromJsonString(jsonString, options) {
    return new _FieldMask().fromJsonString(jsonString, options);
  }
  static equals(a, b) {
    return proto3.util.equals(_FieldMask, a, b);
  }
};
FieldMask.runtime = proto3;
FieldMask.typeName = "google.protobuf.FieldMask";
FieldMask.fields = proto3.util.newFieldList(() => [
  { no: 1, name: "paths", kind: "scalar", T: 9, repeated: true }
]);

// gen/auth/v1/auth_pb.js
var TransactionType = proto3.makeEnum(
  "auth.TransactionType",
  [
    { no: 0, name: "TRANSACTION_TYPE_UNSPECIFIED", localName: "UNSPECIFIED" },
    { no: 1, name: "TRANSACTION_TYPE_INVOKE", localName: "INVOKE" },
    { no: 2, name: "TRANSACTION_TYPE_QUERY", localName: "QUERY" }
  ]
);
var ItemKind = proto3.makeEnum(
  "auth.ItemKind",
  [
    { no: 0, name: "ITEM_KIND_UNSPECIFIED", localName: "UNSPECIFIED" },
    { no: 1, name: "ITEM_KIND_GLOBAL_ITEM", localName: "GLOBAL_ITEM" },
    { no: 2, name: "ITEM_KIND_PRIMARY_ITEM", localName: "PRIMARY_ITEM" },
    { no: 3, name: "ITEM_KIND_SUB_ITEM", localName: "SUB_ITEM" },
    { no: 4, name: "ITEM_KIND_REFERENCE", localName: "REFERENCE" }
  ]
);
var Action = proto3.makeEnum(
  "auth.Action",
  [
    { no: 0, name: "ACTION_UNSPECIFIED", localName: "UNSPECIFIED" },
    { no: 1, name: "ACTION_UTILITY", localName: "UTILITY" },
    { no: 10, name: "ACTION_VIEW", localName: "VIEW" },
    { no: 11, name: "ACTION_CREATE", localName: "CREATE" },
    { no: 12, name: "ACTION_UPDATE", localName: "UPDATE" },
    { no: 13, name: "ACTION_DELETE", localName: "DELETE" },
    { no: 14, name: "ACTION_SUGGEST_VIEW", localName: "SUGGEST_VIEW" },
    { no: 15, name: "ACTION_SUGGEST_CREATE", localName: "SUGGEST_CREATE" },
    { no: 16, name: "ACTION_SUGGEST_DELETE", localName: "SUGGEST_DELETE" },
    { no: 17, name: "ACTION_SUGGEST_APPROVE", localName: "SUGGEST_APPROVE" },
    { no: 18, name: "ACTION_VIEW_HISTORY", localName: "VIEW_HISTORY" },
    { no: 19, name: "ACTION_VIEW_HIDDEN_TXS", localName: "VIEW_HIDDEN_TXS" },
    { no: 20, name: "ACTION_HIDE_TX", localName: "HIDE_TX" },
    { no: 21, name: "ACTION_REFERENCE_CREATE", localName: "REFERENCE_CREATE" },
    { no: 22, name: "ACTION_REFERENCE_DELETE", localName: "REFERENCE_DELETE" },
    { no: 23, name: "ACTION_REFERENCE_VIEW", localName: "REFERENCE_VIEW" }
  ]
);
var TxError = proto3.makeEnum(
  "auth.TxError",
  [
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
    { no: 36, name: "INVALID_ITEM_FIELD_VALUE" }
  ]
);
var KeySchema = proto3.makeMessageType(
  "auth.KeySchema",
  () => [
    {
      no: 1,
      name: "item_type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "item_kind", kind: "enum", T: proto3.getEnumType(ItemKind) },
    { no: 3, name: "keys", kind: "message", T: FieldMask }
  ]
);
var StateActivity = proto3.makeMessageType(
  "auth.StateActivity",
  () => [
    {
      no: 1,
      name: "tx_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "msp_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "user_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
    {
      no: 5,
      name: "note",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var HistoryEntry = proto3.makeMessageType(
  "auth.HistoryEntry",
  () => [
    {
      no: 1,
      name: "tx_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "is_delete",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    {
      no: 3,
      name: "is_hidden",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
    {
      no: 5,
      name: "note",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 6, name: "value", kind: "message", T: Any }
  ]
);
var History = proto3.makeMessageType(
  "auth.History",
  () => [
    { no: 1, name: "entries", kind: "message", T: HistoryEntry, repeated: true },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTxList }
  ]
);
var Operation = proto3.makeMessageType(
  "auth.Operation",
  () => [
    { no: 1, name: "action", kind: "enum", T: proto3.getEnumType(Action) },
    {
      no: 2,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "item_type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "secondary_item_type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "paths", kind: "message", T: FieldMask }
  ]
);
var PathPolicy = proto3.makeMessageType(
  "auth.PathPolicy",
  () => [
    {
      no: 1,
      name: "path",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "full_path",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "allow_sub_paths",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 4, name: "sub_paths", kind: "map", K: 9, V: { kind: "message", T: PathPolicy } },
    { no: 5, name: "actions", kind: "enum", T: proto3.getEnumType(Action), repeated: true }
  ]
);
var ACEntry = proto3.makeMessageType(
  "auth.ACEntry",
  () => [
    { no: 1, name: "children", kind: "map", K: 9, V: { kind: "message", T: PathPolicy } }
  ]
);
var Item = proto3.makeMessageType(
  "auth.Item",
  () => [
    { no: 1, name: "key", kind: "message", T: ItemKey },
    { no: 2, name: "value", kind: "message", T: Any }
  ]
);
var FullItem = proto3.makeMessageType(
  "auth.FullItem",
  () => [
    { no: 1, name: "key", kind: "message", T: ItemKey },
    { no: 2, name: "value", kind: "message", T: Any },
    { no: 3, name: "history", kind: "message", T: History },
    { no: 4, name: "suggestions", kind: "message", T: Suggestion, repeated: true },
    { no: 5, name: "references", kind: "message", T: Reference, repeated: true }
  ]
);
var ItemKey = proto3.makeMessageType(
  "auth.ItemKey",
  () => [
    {
      no: 1,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "item_type",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "item_id_parts", kind: "scalar", T: 9, repeated: true }
  ]
);
var ReferenceKey = proto3.makeMessageType(
  "auth.ReferenceKey",
  () => [
    { no: 1, name: "key1", kind: "message", T: ItemKey },
    { no: 2, name: "key2", kind: "message", T: ItemKey }
  ]
);
var Reference = proto3.makeMessageType(
  "auth.Reference",
  () => [
    { no: 1, name: "reference", kind: "message", T: ReferenceKey },
    { no: 2, name: "item1", kind: "message", T: Item },
    { no: 3, name: "item2", kind: "message", T: Item }
  ]
);
var Collection = proto3.makeMessageType(
  "auth.Collection",
  () => [
    {
      no: 1,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "description",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "item_types", kind: "scalar", T: 9, repeated: true },
    { no: 5, name: "default", kind: "message", T: ACEntry }
  ]
);
var User = proto3.makeMessageType(
  "auth.User",
  () => [
    {
      no: 1,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "msp_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "user_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var Suggestion = proto3.makeMessageType(
  "auth.Suggestion",
  () => [
    { no: 1, name: "primary_key", kind: "message", T: ItemKey },
    {
      no: 2,
      name: "suggestion_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "paths", kind: "message", T: FieldMask },
    { no: 6, name: "value", kind: "message", T: Any }
  ]
);
var HiddenTx = proto3.makeMessageType(
  "auth.HiddenTx",
  () => [
    {
      no: 1,
      name: "tx_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "msp_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "user_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "timestamp", kind: "message", T: Timestamp },
    {
      no: 5,
      name: "note",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var HiddenTxList = proto3.makeMessageType(
  "auth.HiddenTxList",
  () => [
    { no: 1, name: "primary_key", kind: "message", T: ItemKey },
    { no: 4, name: "txs", kind: "message", T: HiddenTx, repeated: true }
  ]
);
var Role = proto3.makeMessageType(
  "auth.Role",
  () => [
    {
      no: 1,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "role_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "ac", kind: "message", T: ACEntry },
    {
      no: 5,
      name: "description",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 6, name: "parent_role_ids", kind: "scalar", T: 9, repeated: true }
  ]
);
var Attribute = proto3.makeMessageType(
  "auth.Attribute",
  () => [
    {
      no: 1,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "msp_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "oid",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "value",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 5, name: "ac", kind: "message", T: ACEntry }
  ]
);
var Membership = proto3.makeMessageType(
  "auth.Membership",
  () => [
    {
      no: 1,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "msp_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "user_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "ac", kind: "message", T: ACEntry }
  ]
);

// gen/chaincode/auth/common/generic_pb.js
var generic_pb_exports = {};
__export(generic_pb_exports, {
  AuthorizeOperationRequest: () => AuthorizeOperationRequest,
  AuthorizeOperationResponse: () => AuthorizeOperationResponse,
  BootstrapRequest: () => BootstrapRequest,
  BootstrapResponse: () => BootstrapResponse,
  CreateRequest: () => CreateRequest,
  CreateResponse: () => CreateResponse,
  CreateUserResponse: () => CreateUserResponse,
  DeleteRequest: () => DeleteRequest,
  DeleteResponse: () => DeleteResponse,
  GetAllTypesResponse: () => GetAllTypesResponse,
  GetCurrentUserResponse: () => GetCurrentUserResponse,
  GetRequest: () => GetRequest,
  GetResponse: () => GetResponse,
  HiddenTxRequest: () => HiddenTxRequest,
  HiddenTxResponse: () => HiddenTxResponse,
  HideTxRequest: () => HideTxRequest,
  HideTxResponse: () => HideTxResponse,
  HistoryRequest: () => HistoryRequest,
  HistoryResponse: () => HistoryResponse,
  ListByAttrsRequest: () => ListByAttrsRequest,
  ListByAttrsResponse: () => ListByAttrsResponse,
  ListByCollectionRequest: () => ListByCollectionRequest,
  ListByCollectionResponse: () => ListByCollectionResponse,
  ListRequest: () => ListRequest,
  ListResponse: () => ListResponse,
  ReferenceByCollectionRequest: () => ReferenceByCollectionRequest,
  ReferenceByCollectionResponse: () => ReferenceByCollectionResponse,
  ReferenceByItemRequest: () => ReferenceByItemRequest,
  ReferenceByItemResponse: () => ReferenceByItemResponse,
  ReferenceByPartialKeyRequest: () => ReferenceByPartialKeyRequest,
  ReferenceByPartialKeyResponse: () => ReferenceByPartialKeyResponse,
  ReferenceCreateRequest: () => ReferenceCreateRequest,
  ReferenceCreateResponse: () => ReferenceCreateResponse,
  ReferenceDeleteRequest: () => ReferenceDeleteRequest,
  ReferenceDeleteResponse: () => ReferenceDeleteResponse,
  ReferenceRequest: () => ReferenceRequest,
  ReferenceResponse: () => ReferenceResponse,
  SuggestionApproveRequest: () => SuggestionApproveRequest,
  SuggestionApproveResponse: () => SuggestionApproveResponse,
  SuggestionByPartialKeyRequest: () => SuggestionByPartialKeyRequest,
  SuggestionByPartialKeyResponse: () => SuggestionByPartialKeyResponse,
  SuggestionCreateRequest: () => SuggestionCreateRequest,
  SuggestionCreateResponse: () => SuggestionCreateResponse,
  SuggestionDeleteRequest: () => SuggestionDeleteRequest,
  SuggestionDeleteResponse: () => SuggestionDeleteResponse,
  SuggestionListByCollectionRequest: () => SuggestionListByCollectionRequest,
  SuggestionListByCollectionResponse: () => SuggestionListByCollectionResponse,
  SuggestionListByItemRequest: () => SuggestionListByItemRequest,
  SuggestionListByItemResponse: () => SuggestionListByItemResponse,
  SuggestionListRequest: () => SuggestionListRequest,
  SuggestionListResponse: () => SuggestionListResponse,
  SuggestionRequest: () => SuggestionRequest,
  SuggestionResponse: () => SuggestionResponse,
  UnHideTxRequest: () => UnHideTxRequest,
  UnHideTxResponse: () => UnHideTxResponse,
  UpdateRequest: () => UpdateRequest,
  UpdateResponse: () => UpdateResponse
});
var GetAllTypesResponse = proto3.makeMessageType(
  "auth.common.GetAllTypesResponse",
  () => [
    { no: 1, name: "types", kind: "scalar", T: 9, repeated: true }
  ]
);
var GetCurrentUserResponse = proto3.makeMessageType(
  "auth.common.GetCurrentUserResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: User }
  ]
);
var BootstrapRequest = proto3.makeMessageType(
  "auth.common.BootstrapRequest",
  () => [
    { no: 1, name: "default_types", kind: "scalar", T: 9, repeated: true },
    {
      no: 2,
      name: "add_default_setup",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
var BootstrapResponse = proto3.makeMessageType(
  "auth.common.BootstrapResponse",
  []
);
var AuthorizeOperationRequest = proto3.makeMessageType(
  "auth.common.AuthorizeOperationRequest",
  () => [
    { no: 2, name: "operation", kind: "message", T: Operation }
  ]
);
var AuthorizeOperationResponse = proto3.makeMessageType(
  "auth.common.AuthorizeOperationResponse",
  () => [
    {
      no: 1,
      name: "authorized",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    }
  ]
);
var CreateUserResponse = proto3.makeMessageType(
  "auth.common.CreateUserResponse",
  () => [
    { no: 1, name: "user", kind: "message", T: User }
  ]
);
var GetRequest = proto3.makeMessageType(
  "auth.common.GetRequest",
  () => [
    { no: 3, name: "item", kind: "message", T: Item }
  ]
);
var GetResponse = proto3.makeMessageType(
  "auth.common.GetResponse",
  () => [
    { no: 1, name: "item", kind: "message", T: Item }
  ]
);
var ListRequest = proto3.makeMessageType(
  "auth.common.ListRequest",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 3, name: "item", kind: "message", T: Item }
  ]
);
var ListResponse = proto3.makeMessageType(
  "auth.common.ListResponse",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "items", kind: "message", T: Item, repeated: true }
  ]
);
var ListByCollectionRequest = proto3.makeMessageType(
  "auth.common.ListByCollectionRequest",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 3, name: "item", kind: "message", T: Item }
  ]
);
var ListByCollectionResponse = proto3.makeMessageType(
  "auth.common.ListByCollectionResponse",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "items", kind: "message", T: Item, repeated: true }
  ]
);
var ListByAttrsRequest = proto3.makeMessageType(
  "auth.common.ListByAttrsRequest",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 3, name: "item", kind: "message", T: Item },
    {
      no: 4,
      name: "num_attrs",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    }
  ]
);
var ListByAttrsResponse = proto3.makeMessageType(
  "auth.common.ListByAttrsResponse",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "items", kind: "message", T: Item, repeated: true }
  ]
);
var CreateRequest = proto3.makeMessageType(
  "auth.common.CreateRequest",
  () => [
    { no: 2, name: "item", kind: "message", T: Item }
  ]
);
var CreateResponse = proto3.makeMessageType(
  "auth.common.CreateResponse",
  () => [
    { no: 2, name: "item", kind: "message", T: Item }
  ]
);
var UpdateRequest = proto3.makeMessageType(
  "auth.common.UpdateRequest",
  () => [
    { no: 2, name: "item", kind: "message", T: Item },
    { no: 3, name: "update_mask", kind: "message", T: FieldMask }
  ]
);
var UpdateResponse = proto3.makeMessageType(
  "auth.common.UpdateResponse",
  () => [
    { no: 2, name: "item", kind: "message", T: Item }
  ]
);
var DeleteRequest = proto3.makeMessageType(
  "auth.common.DeleteRequest",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
    {
      no: 4,
      name: "reason",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var DeleteResponse = proto3.makeMessageType(
  "auth.common.DeleteResponse",
  () => [
    { no: 2, name: "item", kind: "message", T: Item }
  ]
);
var HistoryRequest = proto3.makeMessageType(
  "auth.common.HistoryRequest",
  () => [
    { no: 1, name: "item", kind: "message", T: Item }
  ]
);
var HistoryResponse = proto3.makeMessageType(
  "auth.common.HistoryResponse",
  () => [
    { no: 2, name: "history", kind: "message", T: History }
  ]
);
var HiddenTxRequest = proto3.makeMessageType(
  "auth.common.HiddenTxRequest",
  () => [
    { no: 1, name: "item", kind: "message", T: Item }
  ]
);
var HiddenTxResponse = proto3.makeMessageType(
  "auth.common.HiddenTxResponse",
  () => [
    {
      no: 1,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTx, repeated: true }
  ]
);
var HideTxRequest = proto3.makeMessageType(
  "auth.common.HideTxRequest",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
    { no: 2, name: "hidden_tx", kind: "message", T: HiddenTx }
  ]
);
var HideTxResponse = proto3.makeMessageType(
  "auth.common.HideTxResponse",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTxList }
  ]
);
var UnHideTxRequest = proto3.makeMessageType(
  "auth.common.UnHideTxRequest",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
    {
      no: 2,
      name: "tx_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var UnHideTxResponse = proto3.makeMessageType(
  "auth.common.UnHideTxResponse",
  () => [
    { no: 1, name: "item", kind: "message", T: Item },
    { no: 2, name: "hidden_txs", kind: "message", T: HiddenTxList }
  ]
);
var ReferenceRequest = proto3.makeMessageType(
  "auth.common.ReferenceRequest",
  () => [
    { no: 1, name: "reference", kind: "message", T: ReferenceKey }
  ]
);
var ReferenceResponse = proto3.makeMessageType(
  "auth.common.ReferenceResponse",
  () => [
    {
      no: 1,
      name: "exists",
      kind: "scalar",
      T: 8
      /* ScalarType.BOOL */
    },
    { no: 2, name: "reference", kind: "message", T: Reference }
  ]
);
var ReferenceByCollectionRequest = proto3.makeMessageType(
  "auth.common.ReferenceByCollectionRequest",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var ReferenceByCollectionResponse = proto3.makeMessageType(
  "auth.common.ReferenceByCollectionResponse",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "references", kind: "message", T: ReferenceKey, repeated: true }
  ]
);
var ReferenceByPartialKeyRequest = proto3.makeMessageType(
  "auth.common.ReferenceByPartialKeyRequest",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    { no: 3, name: "reference", kind: "message", T: ReferenceKey }
  ]
);
var ReferenceByPartialKeyResponse = proto3.makeMessageType(
  "auth.common.ReferenceByPartialKeyResponse",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "references", kind: "message", T: ReferenceKey, repeated: true }
  ]
);
var ReferenceByItemRequest = proto3.makeMessageType(
  "auth.common.ReferenceByItemRequest",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "item_key", kind: "message", T: ItemKey }
  ]
);
var ReferenceByItemResponse = proto3.makeMessageType(
  "auth.common.ReferenceByItemResponse",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "references", kind: "message", T: ReferenceKey, repeated: true }
  ]
);
var ReferenceCreateRequest = proto3.makeMessageType(
  "auth.common.ReferenceCreateRequest",
  () => [
    { no: 1, name: "reference", kind: "message", T: Reference }
  ]
);
var ReferenceCreateResponse = proto3.makeMessageType(
  "auth.common.ReferenceCreateResponse",
  () => [
    { no: 1, name: "reference", kind: "message", T: Reference }
  ]
);
var ReferenceDeleteRequest = proto3.makeMessageType(
  "auth.common.ReferenceDeleteRequest",
  () => [
    { no: 1, name: "reference", kind: "message", T: Reference }
  ]
);
var ReferenceDeleteResponse = proto3.makeMessageType(
  "auth.common.ReferenceDeleteResponse",
  () => [
    { no: 1, name: "reference", kind: "message", T: Reference }
  ]
);
var SuggestionRequest = proto3.makeMessageType(
  "auth.common.SuggestionRequest",
  () => [
    { no: 1, name: "item_key", kind: "message", T: ItemKey },
    {
      no: 2,
      name: "suggestion_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var SuggestionResponse = proto3.makeMessageType(
  "auth.common.SuggestionResponse",
  () => [
    { no: 1, name: "suggestion", kind: "message", T: Suggestion }
  ]
);
var SuggestionListRequest = proto3.makeMessageType(
  "auth.common.SuggestionListRequest",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    }
  ]
);
var SuggestionListResponse = proto3.makeMessageType(
  "auth.common.SuggestionListResponse",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "suggestions", kind: "message", T: Suggestion, repeated: true }
  ]
);
var SuggestionListByCollectionRequest = proto3.makeMessageType(
  "auth.common.SuggestionListByCollectionRequest",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var SuggestionListByCollectionResponse = proto3.makeMessageType(
  "auth.common.SuggestionListByCollectionResponse",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "suggestions", kind: "message", T: Suggestion, repeated: true }
  ]
);
var SuggestionListByItemRequest = proto3.makeMessageType(
  "auth.common.SuggestionListByItemRequest",
  () => [
    { no: 1, name: "item_key", kind: "message", T: ItemKey }
  ]
);
var SuggestionListByItemResponse = proto3.makeMessageType(
  "auth.common.SuggestionListByItemResponse",
  () => [
    { no: 1, name: "suggestions", kind: "message", T: Suggestion, repeated: true }
  ]
);
var SuggestionByPartialKeyRequest = proto3.makeMessageType(
  "auth.common.SuggestionByPartialKeyRequest",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "limit",
      kind: "scalar",
      T: 13
      /* ScalarType.UINT32 */
    },
    {
      no: 3,
      name: "num_attrs",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    { no: 4, name: "item_key", kind: "message", T: ItemKey },
    {
      no: 5,
      name: "suggestion_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var SuggestionByPartialKeyResponse = proto3.makeMessageType(
  "auth.common.SuggestionByPartialKeyResponse",
  () => [
    {
      no: 1,
      name: "bookmark",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "suggestions", kind: "message", T: Suggestion, repeated: true }
  ]
);
var SuggestionCreateRequest = proto3.makeMessageType(
  "auth.common.SuggestionCreateRequest",
  () => [
    { no: 1, name: "suggestion", kind: "message", T: Suggestion }
  ]
);
var SuggestionCreateResponse = proto3.makeMessageType(
  "auth.common.SuggestionCreateResponse",
  () => [
    { no: 1, name: "suggestion", kind: "message", T: Suggestion }
  ]
);
var SuggestionDeleteRequest = proto3.makeMessageType(
  "auth.common.SuggestionDeleteRequest",
  () => [
    { no: 1, name: "item_key", kind: "message", T: ItemKey },
    {
      no: 2,
      name: "suggestion_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "reason",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var SuggestionDeleteResponse = proto3.makeMessageType(
  "auth.common.SuggestionDeleteResponse",
  () => [
    { no: 4, name: "suggestion", kind: "message", T: Suggestion }
  ]
);
var SuggestionApproveRequest = proto3.makeMessageType(
  "auth.common.SuggestionApproveRequest",
  () => [
    { no: 1, name: "item_key", kind: "message", T: ItemKey },
    {
      no: 2,
      name: "suggestion_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "reason",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var SuggestionApproveResponse = proto3.makeMessageType(
  "auth.common.SuggestionApproveResponse",
  () => [
    { no: 1, name: "suggestion", kind: "message", T: Suggestion },
    { no: 2, name: "item", kind: "message", T: Item }
  ]
);

// gen/chaincode/sample/v0/items_pb.js
var items_pb_exports = {};
__export(items_pb_exports, {
  Author: () => Author,
  Awards: () => Awards,
  Book: () => Book,
  Degree: () => Degree,
  Group: () => Group,
  Item: () => Item2,
  Person: () => Person
});
var Item2 = proto3.makeMessageType(
  "sample.Item",
  () => [
    {
      no: 1,
      name: "id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "quantity",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    }
  ]
);
var Group = proto3.makeMessageType(
  "sample.Group",
  () => [
    {
      no: 1,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 2, name: "items", kind: "message", T: Item2, repeated: true }
  ]
);
var Book = proto3.makeMessageType(
  "sample.Book",
  () => [
    {
      no: 1,
      name: "isbn",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "book_title",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "author",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 4,
      name: "year",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    {
      no: 5,
      name: "publisher",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 6,
      name: "language",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 7,
      name: "description",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var Degree = proto3.makeMessageType(
  "sample.Degree",
  () => [
    {
      no: 1,
      name: "degree_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "institute",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "degree_date", kind: "message", T: Timestamp }
  ]
);
var Awards = proto3.makeMessageType(
  "sample.Awards",
  () => [
    {
      no: 1,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "award_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 3, name: "award_date", kind: "message", T: Timestamp },
    {
      no: 4,
      name: "award_description",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    }
  ]
);
var Author = proto3.makeMessageType(
  "sample.Author",
  () => [
    {
      no: 1,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "author_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "author_name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    { no: 4, name: "books", kind: "message", T: Book, repeated: true },
    { no: 5, name: "degrees", kind: "map", K: 9, V: { kind: "message", T: Degree } }
  ]
);
var Person = proto3.makeMessageType(
  "sample.Person",
  () => [
    {
      no: 1,
      name: "collection_id",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 2,
      name: "name",
      kind: "scalar",
      T: 9
      /* ScalarType.STRING */
    },
    {
      no: 3,
      name: "age",
      kind: "scalar",
      T: 5
      /* ScalarType.INT32 */
    },
    { no: 4, name: "friends", kind: "scalar", T: 9, repeated: true },
    { no: 5, name: "groups", kind: "message", T: Group, repeated: true }
  ]
);

// utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  factory: () => factory_exports,
  reg: () => registry_exports
});

// utils/factory.ts
var factory_exports = {};
__export(factory_exports, {
  createAuthor: () => createAuthor,
  createAuthorItem: () => createAuthorItem,
  unpackItem: () => unpackItem
});

// utils/registry.ts
var registry_exports = {};
__export(registry_exports, {
  Registry: () => Registry
});
var Registry = createRegistry(
  Author,
  Awards,
  Degree,
  Item2,
  Group,
  Person,
  ACEntry,
  Attribute,
  Collection,
  HiddenTx,
  HiddenTxList,
  History,
  Item,
  ItemKey,
  KeySchema,
  Membership,
  Operation,
  PathPolicy,
  Reference,
  Role,
  StateActivity,
  Suggestion
);

// utils/factory.ts
function createAuthor() {
  const author = new Author();
  author.authorName = "John Doe";
  return author;
}
function createAuthorItem() {
  const obj = new Item();
  const author = createAuthor();
  console.log("author", author);
  obj.value = Any.pack(author);
  console.log("author", author);
  return obj;
}
function unpackItem(item) {
  var _a;
  const author = new Author();
  return (_a = item.value) == null ? void 0 : _a.unpack(Registry);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  authpb,
  cc,
  samplepb,
  utils
});