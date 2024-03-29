/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "thesis.thesis";

export interface SystemInfo {
  nextDocumentId: Long;
  nextAuthorizeId: Long;
}

function createBaseSystemInfo(): SystemInfo {
  return { nextDocumentId: Long.UZERO, nextAuthorizeId: Long.UZERO };
}

export const SystemInfo = {
  encode(
    message: SystemInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.nextDocumentId.isZero()) {
      writer.uint32(8).uint64(message.nextDocumentId);
    }
    if (!message.nextAuthorizeId.isZero()) {
      writer.uint32(16).uint64(message.nextAuthorizeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextDocumentId = reader.uint64() as Long;
          break;
        case 2:
          message.nextAuthorizeId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SystemInfo {
    return {
      nextDocumentId: isSet(object.nextDocumentId)
        ? Long.fromValue(object.nextDocumentId)
        : Long.UZERO,
      nextAuthorizeId: isSet(object.nextAuthorizeId)
        ? Long.fromValue(object.nextAuthorizeId)
        : Long.UZERO,
    };
  },

  toJSON(message: SystemInfo): unknown {
    const obj: any = {};
    message.nextDocumentId !== undefined &&
      (obj.nextDocumentId = (message.nextDocumentId || Long.UZERO).toString());
    message.nextAuthorizeId !== undefined &&
      (obj.nextAuthorizeId = (
        message.nextAuthorizeId || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SystemInfo>, I>>(
    object: I
  ): SystemInfo {
    const message = createBaseSystemInfo();
    message.nextDocumentId =
      object.nextDocumentId !== undefined && object.nextDocumentId !== null
        ? Long.fromValue(object.nextDocumentId)
        : Long.UZERO;
    message.nextAuthorizeId =
      object.nextAuthorizeId !== undefined && object.nextAuthorizeId !== null
        ? Long.fromValue(object.nextAuthorizeId)
        : Long.UZERO;
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
