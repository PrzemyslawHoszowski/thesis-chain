/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "thesis.thesis";

export interface MsgAddCertificate {
  creator: string;
  hash: string;
  address: string;
}

export interface MsgAddCertificateResponse {
  id: number;
}

export interface MsgCreateDocument {
  creator: string;
  files: string[];
}

export interface MsgCreateDocumentResponse {
  id: number;
}

export interface MsgAddUsers {
  creator: string;
  documentId: string;
  role: string;
  addresses: string[];
}

export interface MsgAddUsersResponse {
  id: number;
}

export interface MsgRemoveUsers {
  creator: string;
  documentId: string;
  role: string;
  addresses: string[];
}

export interface MsgRemoveUsersResponse {
  id: number;
}

export interface MsgEditFiles {
  creator: string;
  documentId: string;
  files: string[];
}

export interface MsgEditFilesResponse {
  id: number;
}

export interface MsgSignDocument {
  creator: string;
  documentId: string;
  files: string[];
}

export interface MsgSignDocumentResponse {
  id: number;
}

const baseMsgAddCertificate: object = { creator: "", hash: "", address: "" };

export const MsgAddCertificate = {
  encode(message: MsgAddCertificate, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddCertificate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddCertificate } as MsgAddCertificate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.hash = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddCertificate {
    const message = { ...baseMsgAddCertificate } as MsgAddCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgAddCertificate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.hash !== undefined && (obj.hash = message.hash);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddCertificate>): MsgAddCertificate {
    const message = { ...baseMsgAddCertificate } as MsgAddCertificate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgAddCertificateResponse: object = { id: 0 };

export const MsgAddCertificateResponse = {
  encode(
    message: MsgAddCertificateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddCertificateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddCertificateResponse,
    } as MsgAddCertificateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddCertificateResponse {
    const message = {
      ...baseMsgAddCertificateResponse,
    } as MsgAddCertificateResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgAddCertificateResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAddCertificateResponse>
  ): MsgAddCertificateResponse {
    const message = {
      ...baseMsgAddCertificateResponse,
    } as MsgAddCertificateResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgCreateDocument: object = { creator: "", files: "" };

export const MsgCreateDocument = {
  encode(message: MsgCreateDocument, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.files) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDocument {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDocument } as MsgCreateDocument;
    message.files = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.files.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDocument {
    const message = { ...baseMsgCreateDocument } as MsgCreateDocument;
    message.files = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateDocument): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDocument>): MsgCreateDocument {
    const message = { ...baseMsgCreateDocument } as MsgCreateDocument;
    message.files = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(e);
      }
    }
    return message;
  },
};

const baseMsgCreateDocumentResponse: object = { id: 0 };

export const MsgCreateDocumentResponse = {
  encode(
    message: MsgCreateDocumentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateDocumentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateDocumentResponse,
    } as MsgCreateDocumentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDocumentResponse {
    const message = {
      ...baseMsgCreateDocumentResponse,
    } as MsgCreateDocumentResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateDocumentResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateDocumentResponse>
  ): MsgCreateDocumentResponse {
    const message = {
      ...baseMsgCreateDocumentResponse,
    } as MsgCreateDocumentResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgAddUsers: object = {
  creator: "",
  documentId: "",
  role: "",
  addresses: "",
};

export const MsgAddUsers = {
  encode(message: MsgAddUsers, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.documentId !== "") {
      writer.uint32(18).string(message.documentId);
    }
    if (message.role !== "") {
      writer.uint32(26).string(message.role);
    }
    for (const v of message.addresses) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddUsers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddUsers } as MsgAddUsers;
    message.addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.documentId = reader.string();
          break;
        case 3:
          message.role = reader.string();
          break;
        case 4:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddUsers {
    const message = { ...baseMsgAddUsers } as MsgAddUsers;
    message.addresses = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.documentId !== undefined && object.documentId !== null) {
      message.documentId = String(object.documentId);
    } else {
      message.documentId = "";
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role);
    } else {
      message.role = "";
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgAddUsers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.documentId !== undefined && (obj.documentId = message.documentId);
    message.role !== undefined && (obj.role = message.role);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddUsers>): MsgAddUsers {
    const message = { ...baseMsgAddUsers } as MsgAddUsers;
    message.addresses = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.documentId !== undefined && object.documentId !== null) {
      message.documentId = object.documentId;
    } else {
      message.documentId = "";
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    } else {
      message.role = "";
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(e);
      }
    }
    return message;
  },
};

const baseMsgAddUsersResponse: object = { id: 0 };

export const MsgAddUsersResponse = {
  encode(
    message: MsgAddUsersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddUsersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddUsersResponse } as MsgAddUsersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddUsersResponse {
    const message = { ...baseMsgAddUsersResponse } as MsgAddUsersResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgAddUsersResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddUsersResponse>): MsgAddUsersResponse {
    const message = { ...baseMsgAddUsersResponse } as MsgAddUsersResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgRemoveUsers: object = {
  creator: "",
  documentId: "",
  role: "",
  addresses: "",
};

export const MsgRemoveUsers = {
  encode(message: MsgRemoveUsers, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.documentId !== "") {
      writer.uint32(18).string(message.documentId);
    }
    if (message.role !== "") {
      writer.uint32(26).string(message.role);
    }
    for (const v of message.addresses) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveUsers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveUsers } as MsgRemoveUsers;
    message.addresses = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.documentId = reader.string();
          break;
        case 3:
          message.role = reader.string();
          break;
        case 4:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveUsers {
    const message = { ...baseMsgRemoveUsers } as MsgRemoveUsers;
    message.addresses = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.documentId !== undefined && object.documentId !== null) {
      message.documentId = String(object.documentId);
    } else {
      message.documentId = "";
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role);
    } else {
      message.role = "";
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgRemoveUsers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.documentId !== undefined && (obj.documentId = message.documentId);
    message.role !== undefined && (obj.role = message.role);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveUsers>): MsgRemoveUsers {
    const message = { ...baseMsgRemoveUsers } as MsgRemoveUsers;
    message.addresses = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.documentId !== undefined && object.documentId !== null) {
      message.documentId = object.documentId;
    } else {
      message.documentId = "";
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role;
    } else {
      message.role = "";
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(e);
      }
    }
    return message;
  },
};

const baseMsgRemoveUsersResponse: object = { id: 0 };

export const MsgRemoveUsersResponse = {
  encode(
    message: MsgRemoveUsersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveUsersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveUsersResponse } as MsgRemoveUsersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveUsersResponse {
    const message = { ...baseMsgRemoveUsersResponse } as MsgRemoveUsersResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgRemoveUsersResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveUsersResponse>
  ): MsgRemoveUsersResponse {
    const message = { ...baseMsgRemoveUsersResponse } as MsgRemoveUsersResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgEditFiles: object = { creator: "", documentId: "", files: "" };

export const MsgEditFiles = {
  encode(message: MsgEditFiles, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.documentId !== "") {
      writer.uint32(18).string(message.documentId);
    }
    for (const v of message.files) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgEditFiles {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEditFiles } as MsgEditFiles;
    message.files = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.documentId = reader.string();
          break;
        case 3:
          message.files.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditFiles {
    const message = { ...baseMsgEditFiles } as MsgEditFiles;
    message.files = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.documentId !== undefined && object.documentId !== null) {
      message.documentId = String(object.documentId);
    } else {
      message.documentId = "";
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgEditFiles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.documentId !== undefined && (obj.documentId = message.documentId);
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEditFiles>): MsgEditFiles {
    const message = { ...baseMsgEditFiles } as MsgEditFiles;
    message.files = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.documentId !== undefined && object.documentId !== null) {
      message.documentId = object.documentId;
    } else {
      message.documentId = "";
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(e);
      }
    }
    return message;
  },
};

const baseMsgEditFilesResponse: object = { id: 0 };

export const MsgEditFilesResponse = {
  encode(
    message: MsgEditFilesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgEditFilesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgEditFilesResponse } as MsgEditFilesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditFilesResponse {
    const message = { ...baseMsgEditFilesResponse } as MsgEditFilesResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgEditFilesResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgEditFilesResponse>): MsgEditFilesResponse {
    const message = { ...baseMsgEditFilesResponse } as MsgEditFilesResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgSignDocument: object = { creator: "", documentId: "", files: "" };

export const MsgSignDocument = {
  encode(message: MsgSignDocument, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.documentId !== "") {
      writer.uint32(18).string(message.documentId);
    }
    for (const v of message.files) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSignDocument {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSignDocument } as MsgSignDocument;
    message.files = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.documentId = reader.string();
          break;
        case 3:
          message.files.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignDocument {
    const message = { ...baseMsgSignDocument } as MsgSignDocument;
    message.files = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.documentId !== undefined && object.documentId !== null) {
      message.documentId = String(object.documentId);
    } else {
      message.documentId = "";
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgSignDocument): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.documentId !== undefined && (obj.documentId = message.documentId);
    if (message.files) {
      obj.files = message.files.map((e) => e);
    } else {
      obj.files = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSignDocument>): MsgSignDocument {
    const message = { ...baseMsgSignDocument } as MsgSignDocument;
    message.files = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.documentId !== undefined && object.documentId !== null) {
      message.documentId = object.documentId;
    } else {
      message.documentId = "";
    }
    if (object.files !== undefined && object.files !== null) {
      for (const e of object.files) {
        message.files.push(e);
      }
    }
    return message;
  },
};

const baseMsgSignDocumentResponse: object = { id: 0 };

export const MsgSignDocumentResponse = {
  encode(
    message: MsgSignDocumentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSignDocumentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSignDocumentResponse,
    } as MsgSignDocumentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignDocumentResponse {
    const message = {
      ...baseMsgSignDocumentResponse,
    } as MsgSignDocumentResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgSignDocumentResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSignDocumentResponse>
  ): MsgSignDocumentResponse {
    const message = {
      ...baseMsgSignDocumentResponse,
    } as MsgSignDocumentResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  AddCertificate(
    request: MsgAddCertificate
  ): Promise<MsgAddCertificateResponse>;
  CreateDocument(
    request: MsgCreateDocument
  ): Promise<MsgCreateDocumentResponse>;
  AddUsers(request: MsgAddUsers): Promise<MsgAddUsersResponse>;
  RemoveUsers(request: MsgRemoveUsers): Promise<MsgRemoveUsersResponse>;
  EditFiles(request: MsgEditFiles): Promise<MsgEditFilesResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SignDocument(request: MsgSignDocument): Promise<MsgSignDocumentResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  AddCertificate(
    request: MsgAddCertificate
  ): Promise<MsgAddCertificateResponse> {
    const data = MsgAddCertificate.encode(request).finish();
    const promise = this.rpc.request(
      "thesis.thesis.Msg",
      "AddCertificate",
      data
    );
    return promise.then((data) =>
      MsgAddCertificateResponse.decode(new Reader(data))
    );
  }

  CreateDocument(
    request: MsgCreateDocument
  ): Promise<MsgCreateDocumentResponse> {
    const data = MsgCreateDocument.encode(request).finish();
    const promise = this.rpc.request(
      "thesis.thesis.Msg",
      "CreateDocument",
      data
    );
    return promise.then((data) =>
      MsgCreateDocumentResponse.decode(new Reader(data))
    );
  }

  AddUsers(request: MsgAddUsers): Promise<MsgAddUsersResponse> {
    const data = MsgAddUsers.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Msg", "AddUsers", data);
    return promise.then((data) => MsgAddUsersResponse.decode(new Reader(data)));
  }

  RemoveUsers(request: MsgRemoveUsers): Promise<MsgRemoveUsersResponse> {
    const data = MsgRemoveUsers.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Msg", "RemoveUsers", data);
    return promise.then((data) =>
      MsgRemoveUsersResponse.decode(new Reader(data))
    );
  }

  EditFiles(request: MsgEditFiles): Promise<MsgEditFilesResponse> {
    const data = MsgEditFiles.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Msg", "EditFiles", data);
    return promise.then((data) =>
      MsgEditFilesResponse.decode(new Reader(data))
    );
  }

  SignDocument(request: MsgSignDocument): Promise<MsgSignDocumentResponse> {
    const data = MsgSignDocument.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Msg", "SignDocument", data);
    return promise.then((data) =>
      MsgSignDocumentResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
