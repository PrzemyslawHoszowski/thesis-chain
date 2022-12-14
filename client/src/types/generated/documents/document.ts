/* eslint-disable */
import { Roles } from "./roles";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "thesis.documents";

export interface Document {
  index: string;
  state: string;
  files: string[];
  roles?: Roles;
  signed: string[];
}

function createBaseDocument(): Document {
  return { index: "", state: "", files: [], roles: undefined, signed: [] };
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
    if (message.roles !== undefined) {
      Roles.encode(message.roles, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.signed) {
      writer.uint32(42).string(v!);
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
          message.roles = Roles.decode(reader, reader.uint32());
          break;
        case 5:
          message.signed.push(reader.string());
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
      roles: isSet(object.roles) ? Roles.fromJSON(object.roles) : undefined,
      signed: Array.isArray(object?.signed)
        ? object.signed.map((e: any) => String(e))
        : [],
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
    message.roles !== undefined &&
      (obj.roles = message.roles ? Roles.toJSON(message.roles) : undefined);
    if (message.signed) {
      obj.signed = message.signed.map((e) => e);
    } else {
      obj.signed = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Document>, I>>(object: I): Document {
    const message = createBaseDocument();
    message.index = object.index ?? "";
    message.state = object.state ?? "";
    message.files = object.files?.map((e) => e) || [];
    message.roles =
      object.roles !== undefined && object.roles !== null
        ? Roles.fromPartial(object.roles)
        : undefined;
    message.signed = object.signed?.map((e) => e) || [];
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
