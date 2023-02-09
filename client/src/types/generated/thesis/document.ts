/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "thesis.thesis";

export interface Document {
  index: string;
  state: string;
  files: string[];
  admins: string[];
  editors: string[];
  signers: string[];
  viewers: string[];
  signed: string[];
  rejectionReason: string;
  lastEditHeight: Long;
}

function createBaseDocument(): Document {
  return {
    index: "",
    state: "",
    files: [],
    admins: [],
    editors: [],
    signers: [],
    viewers: [],
    signed: [],
    rejectionReason: "",
    lastEditHeight: Long.ZERO,
  };
}

export const Document = {
  encode(
    message: Document,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.state !== "") {
      writer.uint32(18).string(message.state);
    }
    for (const v of message.files) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.admins) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.editors) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.signers) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.viewers) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.signed) {
      writer.uint32(66).string(v!);
    }
    if (message.rejectionReason !== "") {
      writer.uint32(74).string(message.rejectionReason);
    }
    if (!message.lastEditHeight.isZero()) {
      writer.uint32(80).int64(message.lastEditHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Document {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.state = reader.string();
          break;
        case 3:
          message.files.push(reader.string());
          break;
        case 4:
          message.admins.push(reader.string());
          break;
        case 5:
          message.editors.push(reader.string());
          break;
        case 6:
          message.signers.push(reader.string());
          break;
        case 7:
          message.viewers.push(reader.string());
          break;
        case 8:
          message.signed.push(reader.string());
          break;
        case 9:
          message.rejectionReason = reader.string();
          break;
        case 10:
          message.lastEditHeight = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Document {
    return {
      index: isSet(object.index) ? String(object.index) : "",
      state: isSet(object.state) ? String(object.state) : "",
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => String(e))
        : [],
      admins: Array.isArray(object?.admins)
        ? object.admins.map((e: any) => String(e))
        : [],
      editors: Array.isArray(object?.editors)
        ? object.editors.map((e: any) => String(e))
        : [],
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => String(e))
        : [],
      viewers: Array.isArray(object?.viewers)
        ? object.viewers.map((e: any) => String(e))
        : [],
      signed: Array.isArray(object?.signed)
        ? object.signed.map((e: any) => String(e))
        : [],
      rejectionReason: isSet(object.rejectionReason)
        ? String(object.rejectionReason)
        : "",
      lastEditHeight: isSet(object.lastEditHeight)
        ? Long.fromValue(object.lastEditHeight)
        : Long.ZERO,
    };
  },

  toJSON(message: Document): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.state !== undefined && (obj.state = message.state);
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    if (message.admins) {
      obj.admins = message.admins.map((e) => e);
    } else {
      obj.admins = [];
    }
    if (message.editors) {
      obj.editors = message.editors.map((e) => e);
    } else {
      obj.editors = [];
    }
    if (message.signers) {
      obj.signers = message.signers.map((e) => e);
    } else {
      obj.signers = [];
    }
    if (message.viewers) {
      obj.viewers = message.viewers.map((e) => e);
    } else {
      obj.viewers = [];
    }
    if (message.signed) {
      obj.signed = message.signed.map((e) => e);
    } else {
      obj.signed = [];
    }
    message.rejectionReason !== undefined &&
      (obj.rejectionReason = message.rejectionReason);
    message.lastEditHeight !== undefined &&
      (obj.lastEditHeight = (message.lastEditHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Document>, I>>(object: I): Document {
    const message = createBaseDocument();
    message.index = object.index ?? "";
    message.state = object.state ?? "";
    message.files = object.files?.map((e) => e) || [];
    message.admins = object.admins?.map((e) => e) || [];
    message.editors = object.editors?.map((e) => e) || [];
    message.signers = object.signers?.map((e) => e) || [];
    message.viewers = object.viewers?.map((e) => e) || [];
    message.signed = object.signed?.map((e) => e) || [];
    message.rejectionReason = object.rejectionReason ?? "";
    message.lastEditHeight =
      object.lastEditHeight !== undefined && object.lastEditHeight !== null
        ? Long.fromValue(object.lastEditHeight)
        : Long.ZERO;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
