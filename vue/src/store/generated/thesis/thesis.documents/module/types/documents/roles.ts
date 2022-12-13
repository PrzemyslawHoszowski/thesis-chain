/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesis.documents";

export interface Roles {
  index: string;
  admins: string[];
  editors: string[];
  signers: string[];
  viewers: string[];
}

const baseRoles: object = {
  index: "",
  admins: "",
  editors: "",
  signers: "",
  viewers: "",
};

export const Roles = {
  encode(message: Roles, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    for (const v of message.admins) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.editors) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.signers) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.viewers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Roles {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRoles } as Roles;
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.admins.push(reader.string());
          break;
        case 3:
          message.editors.push(reader.string());
          break;
        case 4:
          message.signers.push(reader.string());
          break;
        case 5:
          message.viewers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Roles {
    const message = { ...baseRoles } as Roles;
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.admins !== undefined && object.admins !== null) {
      for (const e of object.admins) {
        message.admins.push(String(e));
      }
    }
    if (object.editors !== undefined && object.editors !== null) {
      for (const e of object.editors) {
        message.editors.push(String(e));
      }
    }
    if (object.signers !== undefined && object.signers !== null) {
      for (const e of object.signers) {
        message.signers.push(String(e));
      }
    }
    if (object.viewers !== undefined && object.viewers !== null) {
      for (const e of object.viewers) {
        message.viewers.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Roles): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
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
    return obj;
  },

  fromPartial(object: DeepPartial<Roles>): Roles {
    const message = { ...baseRoles } as Roles;
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.admins !== undefined && object.admins !== null) {
      for (const e of object.admins) {
        message.admins.push(e);
      }
    }
    if (object.editors !== undefined && object.editors !== null) {
      for (const e of object.editors) {
        message.editors.push(e);
      }
    }
    if (object.signers !== undefined && object.signers !== null) {
      for (const e of object.signers) {
        message.signers.push(e);
      }
    }
    if (object.viewers !== undefined && object.viewers !== null) {
      for (const e of object.viewers) {
        message.viewers.push(e);
      }
    }
    return message;
  },
};

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
