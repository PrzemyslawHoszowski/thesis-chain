/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesis.thesis";

export interface SystemInfo {
  nextDocumentId: number;
  nextAuthorizeId: number;
}

const baseSystemInfo: object = { nextDocumentId: 0, nextAuthorizeId: 0 };

export const SystemInfo = {
  encode(message: SystemInfo, writer: Writer = Writer.create()): Writer {
    if (message.nextDocumentId !== 0) {
      writer.uint32(8).uint64(message.nextDocumentId);
    }
    if (message.nextAuthorizeId !== 0) {
      writer.uint32(16).uint64(message.nextAuthorizeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): SystemInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSystemInfo } as SystemInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nextDocumentId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.nextAuthorizeId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SystemInfo {
    const message = { ...baseSystemInfo } as SystemInfo;
    if (object.nextDocumentId !== undefined && object.nextDocumentId !== null) {
      message.nextDocumentId = Number(object.nextDocumentId);
    } else {
      message.nextDocumentId = 0;
    }
    if (
      object.nextAuthorizeId !== undefined &&
      object.nextAuthorizeId !== null
    ) {
      message.nextAuthorizeId = Number(object.nextAuthorizeId);
    } else {
      message.nextAuthorizeId = 0;
    }
    return message;
  },

  toJSON(message: SystemInfo): unknown {
    const obj: any = {};
    message.nextDocumentId !== undefined &&
      (obj.nextDocumentId = message.nextDocumentId);
    message.nextAuthorizeId !== undefined &&
      (obj.nextAuthorizeId = message.nextAuthorizeId);
    return obj;
  },

  fromPartial(object: DeepPartial<SystemInfo>): SystemInfo {
    const message = { ...baseSystemInfo } as SystemInfo;
    if (object.nextDocumentId !== undefined && object.nextDocumentId !== null) {
      message.nextDocumentId = object.nextDocumentId;
    } else {
      message.nextDocumentId = 0;
    }
    if (
      object.nextAuthorizeId !== undefined &&
      object.nextAuthorizeId !== null
    ) {
      message.nextAuthorizeId = object.nextAuthorizeId;
    } else {
      message.nextAuthorizeId = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
