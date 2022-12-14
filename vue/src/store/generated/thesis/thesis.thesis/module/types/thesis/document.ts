/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

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
}

const baseDocument: object = {
  index: "",
  state: "",
  files: "",
  admins: "",
  editors: "",
  signers: "",
  viewers: "",
  signed: "",
  rejectionReason: "",
};

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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Document {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDocument } as Document;
    message.files = [];
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
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
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
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
    if (object.signed !== undefined && object.signed !== null) {
      for (const e of object.signed) {
        message.signed.push(String(e));
      }
    }
    if (
      object.rejectionReason !== undefined &&
      object.rejectionReason !== null
    ) {
      message.rejectionReason = String(object.rejectionReason);
    } else {
      message.rejectionReason = "";
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
    return obj;
  },

  fromPartial(object: DeepPartial<Document>): Document {
    const message = { ...baseDocument } as Document;
    message.files = [];
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
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
    if (object.signed !== undefined && object.signed !== null) {
      for (const e of object.signed) {
        message.signed.push(e);
      }
    }
    if (
      object.rejectionReason !== undefined &&
      object.rejectionReason !== null
    ) {
      message.rejectionReason = object.rejectionReason;
    } else {
      message.rejectionReason = "";
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
