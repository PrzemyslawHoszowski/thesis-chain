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
  files: string;
}

export interface MsgCreateDocumentResponse {}

export interface MsgCreateRoles {
  creator: string;
  index: string;
  admins: string[];
  editors: string[];
  signers: string[];
  viewers: string[];
}

export interface MsgCreateRolesResponse {}

export interface MsgUpdateRoles {
  creator: string;
  index: string;
  admins: string[];
  editors: string[];
  signers: string[];
  viewers: string[];
}

export interface MsgUpdateRolesResponse {}

export interface MsgDeleteRoles {
  creator: string;
  index: string;
}

export interface MsgDeleteRolesResponse {}

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
    if (message.files !== "") {
      writer.uint32(18).string(message.files);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateDocument {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDocument } as MsgCreateDocument;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.files = reader.string();
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.files !== undefined && object.files !== null) {
      message.files = String(object.files);
    } else {
      message.files = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDocument): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.files !== undefined && (obj.files = message.files);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDocument>): MsgCreateDocument {
    const message = { ...baseMsgCreateDocument } as MsgCreateDocument;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.files !== undefined && object.files !== null) {
      message.files = object.files;
    } else {
      message.files = "";
    }
    return message;
  },
};

const baseMsgCreateDocumentResponse: object = {};

export const MsgCreateDocumentResponse = {
  encode(
    _: MsgCreateDocumentResponse,
    writer: Writer = Writer.create()
  ): Writer {
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateDocumentResponse {
    const message = {
      ...baseMsgCreateDocumentResponse,
    } as MsgCreateDocumentResponse;
    return message;
  },

  toJSON(_: MsgCreateDocumentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateDocumentResponse>
  ): MsgCreateDocumentResponse {
    const message = {
      ...baseMsgCreateDocumentResponse,
    } as MsgCreateDocumentResponse;
    return message;
  },
};

const baseMsgCreateRoles: object = {
  creator: "",
  index: "",
  admins: "",
  editors: "",
  signers: "",
  viewers: "",
};

export const MsgCreateRoles = {
  encode(message: MsgCreateRoles, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.admins) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.editors) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.signers) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.viewers) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRoles {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRoles } as MsgCreateRoles;
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.admins.push(reader.string());
          break;
        case 4:
          message.editors.push(reader.string());
          break;
        case 5:
          message.signers.push(reader.string());
          break;
        case 6:
          message.viewers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRoles {
    const message = { ...baseMsgCreateRoles } as MsgCreateRoles;
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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

  toJSON(message: MsgCreateRoles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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

  fromPartial(object: DeepPartial<MsgCreateRoles>): MsgCreateRoles {
    const message = { ...baseMsgCreateRoles } as MsgCreateRoles;
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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

const baseMsgCreateRolesResponse: object = {};

export const MsgCreateRolesResponse = {
  encode(_: MsgCreateRolesResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRolesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRolesResponse } as MsgCreateRolesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateRolesResponse {
    const message = { ...baseMsgCreateRolesResponse } as MsgCreateRolesResponse;
    return message;
  },

  toJSON(_: MsgCreateRolesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateRolesResponse>): MsgCreateRolesResponse {
    const message = { ...baseMsgCreateRolesResponse } as MsgCreateRolesResponse;
    return message;
  },
};

const baseMsgUpdateRoles: object = {
  creator: "",
  index: "",
  admins: "",
  editors: "",
  signers: "",
  viewers: "",
};

export const MsgUpdateRoles = {
  encode(message: MsgUpdateRoles, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    for (const v of message.admins) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.editors) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.signers) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.viewers) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateRoles {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateRoles } as MsgUpdateRoles;
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.admins.push(reader.string());
          break;
        case 4:
          message.editors.push(reader.string());
          break;
        case 5:
          message.signers.push(reader.string());
          break;
        case 6:
          message.viewers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateRoles {
    const message = { ...baseMsgUpdateRoles } as MsgUpdateRoles;
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
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

  toJSON(message: MsgUpdateRoles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
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

  fromPartial(object: DeepPartial<MsgUpdateRoles>): MsgUpdateRoles {
    const message = { ...baseMsgUpdateRoles } as MsgUpdateRoles;
    message.admins = [];
    message.editors = [];
    message.signers = [];
    message.viewers = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
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

const baseMsgUpdateRolesResponse: object = {};

export const MsgUpdateRolesResponse = {
  encode(_: MsgUpdateRolesResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateRolesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateRolesResponse } as MsgUpdateRolesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateRolesResponse {
    const message = { ...baseMsgUpdateRolesResponse } as MsgUpdateRolesResponse;
    return message;
  },

  toJSON(_: MsgUpdateRolesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateRolesResponse>): MsgUpdateRolesResponse {
    const message = { ...baseMsgUpdateRolesResponse } as MsgUpdateRolesResponse;
    return message;
  },
};

const baseMsgDeleteRoles: object = { creator: "", index: "" };

export const MsgDeleteRoles = {
  encode(message: MsgDeleteRoles, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteRoles {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteRoles } as MsgDeleteRoles;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRoles {
    const message = { ...baseMsgDeleteRoles } as MsgDeleteRoles;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteRoles): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteRoles>): MsgDeleteRoles {
    const message = { ...baseMsgDeleteRoles } as MsgDeleteRoles;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteRolesResponse: object = {};

export const MsgDeleteRolesResponse = {
  encode(_: MsgDeleteRolesResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteRolesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteRolesResponse } as MsgDeleteRolesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteRolesResponse {
    const message = { ...baseMsgDeleteRolesResponse } as MsgDeleteRolesResponse;
    return message;
  },

  toJSON(_: MsgDeleteRolesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteRolesResponse>): MsgDeleteRolesResponse {
    const message = { ...baseMsgDeleteRolesResponse } as MsgDeleteRolesResponse;
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
  CreateRoles(request: MsgCreateRoles): Promise<MsgCreateRolesResponse>;
  UpdateRoles(request: MsgUpdateRoles): Promise<MsgUpdateRolesResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteRoles(request: MsgDeleteRoles): Promise<MsgDeleteRolesResponse>;
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

  CreateRoles(request: MsgCreateRoles): Promise<MsgCreateRolesResponse> {
    const data = MsgCreateRoles.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Msg", "CreateRoles", data);
    return promise.then((data) =>
      MsgCreateRolesResponse.decode(new Reader(data))
    );
  }

  UpdateRoles(request: MsgUpdateRoles): Promise<MsgUpdateRolesResponse> {
    const data = MsgUpdateRoles.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Msg", "UpdateRoles", data);
    return promise.then((data) =>
      MsgUpdateRolesResponse.decode(new Reader(data))
    );
  }

  DeleteRoles(request: MsgDeleteRoles): Promise<MsgDeleteRolesResponse> {
    const data = MsgDeleteRoles.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Msg", "DeleteRoles", data);
    return promise.then((data) =>
      MsgDeleteRolesResponse.decode(new Reader(data))
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
