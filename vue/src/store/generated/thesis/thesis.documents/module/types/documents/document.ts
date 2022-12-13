/* eslint-disable */
import { Roles } from "../documents/roles";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesis.documents";

export interface Document {
  index: string;
  state: string;
  files: string[];
  roles: Roles | undefined;
  signed: string[];
}

const baseDocument: object = { index: "", state: "", files: "", signed: "" };

export const Document = {
  encode(message: Document, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Document {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDocument } as Document;
    message.files = [];
    message.signed = [];
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
    const message = { ...baseDocument } as Document;
    message.files = [];
    message.signed = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = String(object.state);
    } else {
      message.state = "";
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(String(e));
      }
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = Roles.fromJSON(object.roles);
    } else {
      message.roles = undefined;
    }
    if (object.signed !== undefined && object.signed !== null) {
      for (const e of object.signed) {
        message.signed.push(String(e));
      }
    }
    return message;
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

  fromPartial(object: DeepPartial<Document>): Document {
    const message = { ...baseDocument } as Document;
    message.files = [];
    message.signed = [];
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    } else {
      message.state = "";
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(e);
      }
    }
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = Roles.fromPartial(object.roles);
    } else {
      message.roles = undefined;
    }
    if (object.signed !== undefined && object.signed !== null) {
      for (const e of object.signed) {
        message.signed.push(e);
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
