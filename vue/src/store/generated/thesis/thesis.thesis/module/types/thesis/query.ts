/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../thesis/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Certificate } from "../thesis/certificate";
import { Document } from "../thesis/document";
import { SystemInfo } from "../thesis/system_info";
import { AuthorizeAccount } from "../thesis/authorize_account";

export const protobufPackage = "thesis.thesis";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryCertificatesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryCertificatesResponse {
  Certificate: Certificate[];
  pagination: PageResponse | undefined;
}

export interface QueryGetDocumentRequest {
  index: string;
}

export interface QueryGetDocumentResponse {
  document: Document | undefined;
}

export interface QueryAllDocumentRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllDocumentResponse {
  document: Document[];
  pagination: PageResponse | undefined;
}

export interface QueryGetSystemInfoRequest {}

export interface QueryGetSystemInfoResponse {
  SystemInfo: SystemInfo | undefined;
}

export interface QueryGetAuthorizeAccountRequest {
  index: string;
}

export interface QueryGetAuthorizeAccountResponse {
  authorizeAccount: AuthorizeAccount | undefined;
}

export interface QueryAllAuthorizeAccountRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAuthorizeAccountResponse {
  authorizeAccount: AuthorizeAccount[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryCertificatesRequest: object = {};

export const QueryCertificatesRequest = {
  encode(
    message: QueryCertificatesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCertificatesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCertificatesRequest,
    } as QueryCertificatesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCertificatesRequest {
    const message = {
      ...baseQueryCertificatesRequest,
    } as QueryCertificatesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCertificatesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCertificatesRequest>
  ): QueryCertificatesRequest {
    const message = {
      ...baseQueryCertificatesRequest,
    } as QueryCertificatesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryCertificatesResponse: object = {};

export const QueryCertificatesResponse = {
  encode(
    message: QueryCertificatesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Certificate) {
      Certificate.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCertificatesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCertificatesResponse,
    } as QueryCertificatesResponse;
    message.Certificate = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Certificate.push(Certificate.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCertificatesResponse {
    const message = {
      ...baseQueryCertificatesResponse,
    } as QueryCertificatesResponse;
    message.Certificate = [];
    if (object.Certificate !== undefined && object.Certificate !== null) {
      for (const e of object.Certificate) {
        message.Certificate.push(Certificate.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryCertificatesResponse): unknown {
    const obj: any = {};
    if (message.Certificate) {
      obj.Certificate = message.Certificate.map((e) =>
        e ? Certificate.toJSON(e) : undefined
      );
    } else {
      obj.Certificate = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCertificatesResponse>
  ): QueryCertificatesResponse {
    const message = {
      ...baseQueryCertificatesResponse,
    } as QueryCertificatesResponse;
    message.Certificate = [];
    if (object.Certificate !== undefined && object.Certificate !== null) {
      for (const e of object.Certificate) {
        message.Certificate.push(Certificate.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetDocumentRequest: object = { index: "" };

export const QueryGetDocumentRequest = {
  encode(
    message: QueryGetDocumentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetDocumentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDocumentRequest,
    } as QueryGetDocumentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDocumentRequest {
    const message = {
      ...baseQueryGetDocumentRequest,
    } as QueryGetDocumentRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetDocumentRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDocumentRequest>
  ): QueryGetDocumentRequest {
    const message = {
      ...baseQueryGetDocumentRequest,
    } as QueryGetDocumentRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetDocumentResponse: object = {};

export const QueryGetDocumentResponse = {
  encode(
    message: QueryGetDocumentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.document !== undefined) {
      Document.encode(message.document, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetDocumentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetDocumentResponse,
    } as QueryGetDocumentResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.document = Document.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDocumentResponse {
    const message = {
      ...baseQueryGetDocumentResponse,
    } as QueryGetDocumentResponse;
    if (object.document !== undefined && object.document !== null) {
      message.document = Document.fromJSON(object.document);
    } else {
      message.document = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDocumentResponse): unknown {
    const obj: any = {};
    message.document !== undefined &&
      (obj.document = message.document
        ? Document.toJSON(message.document)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetDocumentResponse>
  ): QueryGetDocumentResponse {
    const message = {
      ...baseQueryGetDocumentResponse,
    } as QueryGetDocumentResponse;
    if (object.document !== undefined && object.document !== null) {
      message.document = Document.fromPartial(object.document);
    } else {
      message.document = undefined;
    }
    return message;
  },
};

const baseQueryAllDocumentRequest: object = {};

export const QueryAllDocumentRequest = {
  encode(
    message: QueryAllDocumentRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllDocumentRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDocumentRequest,
    } as QueryAllDocumentRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDocumentRequest {
    const message = {
      ...baseQueryAllDocumentRequest,
    } as QueryAllDocumentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDocumentRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDocumentRequest>
  ): QueryAllDocumentRequest {
    const message = {
      ...baseQueryAllDocumentRequest,
    } as QueryAllDocumentRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllDocumentResponse: object = {};

export const QueryAllDocumentResponse = {
  encode(
    message: QueryAllDocumentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.document) {
      Document.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllDocumentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllDocumentResponse,
    } as QueryAllDocumentResponse;
    message.document = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.document.push(Document.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllDocumentResponse {
    const message = {
      ...baseQueryAllDocumentResponse,
    } as QueryAllDocumentResponse;
    message.document = [];
    if (object.document !== undefined && object.document !== null) {
      for (const e of object.document) {
        message.document.push(Document.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllDocumentResponse): unknown {
    const obj: any = {};
    if (message.document) {
      obj.document = message.document.map((e) =>
        e ? Document.toJSON(e) : undefined
      );
    } else {
      obj.document = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllDocumentResponse>
  ): QueryAllDocumentResponse {
    const message = {
      ...baseQueryAllDocumentResponse,
    } as QueryAllDocumentResponse;
    message.document = [];
    if (object.document !== undefined && object.document !== null) {
      for (const e of object.document) {
        message.document.push(Document.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSystemInfoRequest: object = {};

export const QueryGetSystemInfoRequest = {
  encode(
    _: QueryGetSystemInfoRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSystemInfoRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSystemInfoRequest,
    } as QueryGetSystemInfoRequest;
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

  fromJSON(_: any): QueryGetSystemInfoRequest {
    const message = {
      ...baseQueryGetSystemInfoRequest,
    } as QueryGetSystemInfoRequest;
    return message;
  },

  toJSON(_: QueryGetSystemInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetSystemInfoRequest>
  ): QueryGetSystemInfoRequest {
    const message = {
      ...baseQueryGetSystemInfoRequest,
    } as QueryGetSystemInfoRequest;
    return message;
  },
};

const baseQueryGetSystemInfoResponse: object = {};

export const QueryGetSystemInfoResponse = {
  encode(
    message: QueryGetSystemInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.SystemInfo !== undefined) {
      SystemInfo.encode(message.SystemInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSystemInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSystemInfoResponse,
    } as QueryGetSystemInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SystemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSystemInfoResponse {
    const message = {
      ...baseQueryGetSystemInfoResponse,
    } as QueryGetSystemInfoResponse;
    if (object.SystemInfo !== undefined && object.SystemInfo !== null) {
      message.SystemInfo = SystemInfo.fromJSON(object.SystemInfo);
    } else {
      message.SystemInfo = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSystemInfoResponse): unknown {
    const obj: any = {};
    message.SystemInfo !== undefined &&
      (obj.SystemInfo = message.SystemInfo
        ? SystemInfo.toJSON(message.SystemInfo)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSystemInfoResponse>
  ): QueryGetSystemInfoResponse {
    const message = {
      ...baseQueryGetSystemInfoResponse,
    } as QueryGetSystemInfoResponse;
    if (object.SystemInfo !== undefined && object.SystemInfo !== null) {
      message.SystemInfo = SystemInfo.fromPartial(object.SystemInfo);
    } else {
      message.SystemInfo = undefined;
    }
    return message;
  },
};

const baseQueryGetAuthorizeAccountRequest: object = { index: "" };

export const QueryGetAuthorizeAccountRequest = {
  encode(
    message: QueryGetAuthorizeAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuthorizeAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuthorizeAccountRequest,
    } as QueryGetAuthorizeAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuthorizeAccountRequest {
    const message = {
      ...baseQueryGetAuthorizeAccountRequest,
    } as QueryGetAuthorizeAccountRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetAuthorizeAccountRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuthorizeAccountRequest>
  ): QueryGetAuthorizeAccountRequest {
    const message = {
      ...baseQueryGetAuthorizeAccountRequest,
    } as QueryGetAuthorizeAccountRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetAuthorizeAccountResponse: object = {};

export const QueryGetAuthorizeAccountResponse = {
  encode(
    message: QueryGetAuthorizeAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.authorizeAccount !== undefined) {
      AuthorizeAccount.encode(
        message.authorizeAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAuthorizeAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAuthorizeAccountResponse,
    } as QueryGetAuthorizeAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorizeAccount = AuthorizeAccount.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuthorizeAccountResponse {
    const message = {
      ...baseQueryGetAuthorizeAccountResponse,
    } as QueryGetAuthorizeAccountResponse;
    if (
      object.authorizeAccount !== undefined &&
      object.authorizeAccount !== null
    ) {
      message.authorizeAccount = AuthorizeAccount.fromJSON(
        object.authorizeAccount
      );
    } else {
      message.authorizeAccount = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAuthorizeAccountResponse): unknown {
    const obj: any = {};
    message.authorizeAccount !== undefined &&
      (obj.authorizeAccount = message.authorizeAccount
        ? AuthorizeAccount.toJSON(message.authorizeAccount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAuthorizeAccountResponse>
  ): QueryGetAuthorizeAccountResponse {
    const message = {
      ...baseQueryGetAuthorizeAccountResponse,
    } as QueryGetAuthorizeAccountResponse;
    if (
      object.authorizeAccount !== undefined &&
      object.authorizeAccount !== null
    ) {
      message.authorizeAccount = AuthorizeAccount.fromPartial(
        object.authorizeAccount
      );
    } else {
      message.authorizeAccount = undefined;
    }
    return message;
  },
};

const baseQueryAllAuthorizeAccountRequest: object = {};

export const QueryAllAuthorizeAccountRequest = {
  encode(
    message: QueryAllAuthorizeAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAuthorizeAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAuthorizeAccountRequest,
    } as QueryAllAuthorizeAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuthorizeAccountRequest {
    const message = {
      ...baseQueryAllAuthorizeAccountRequest,
    } as QueryAllAuthorizeAccountRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAuthorizeAccountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAuthorizeAccountRequest>
  ): QueryAllAuthorizeAccountRequest {
    const message = {
      ...baseQueryAllAuthorizeAccountRequest,
    } as QueryAllAuthorizeAccountRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAuthorizeAccountResponse: object = {};

export const QueryAllAuthorizeAccountResponse = {
  encode(
    message: QueryAllAuthorizeAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.authorizeAccount) {
      AuthorizeAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllAuthorizeAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllAuthorizeAccountResponse,
    } as QueryAllAuthorizeAccountResponse;
    message.authorizeAccount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorizeAccount.push(
            AuthorizeAccount.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuthorizeAccountResponse {
    const message = {
      ...baseQueryAllAuthorizeAccountResponse,
    } as QueryAllAuthorizeAccountResponse;
    message.authorizeAccount = [];
    if (
      object.authorizeAccount !== undefined &&
      object.authorizeAccount !== null
    ) {
      for (const e of object.authorizeAccount) {
        message.authorizeAccount.push(AuthorizeAccount.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAuthorizeAccountResponse): unknown {
    const obj: any = {};
    if (message.authorizeAccount) {
      obj.authorizeAccount = message.authorizeAccount.map((e) =>
        e ? AuthorizeAccount.toJSON(e) : undefined
      );
    } else {
      obj.authorizeAccount = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAuthorizeAccountResponse>
  ): QueryAllAuthorizeAccountResponse {
    const message = {
      ...baseQueryAllAuthorizeAccountResponse,
    } as QueryAllAuthorizeAccountResponse;
    message.authorizeAccount = [];
    if (
      object.authorizeAccount !== undefined &&
      object.authorizeAccount !== null
    ) {
      for (const e of object.authorizeAccount) {
        message.authorizeAccount.push(AuthorizeAccount.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Certificates items. */
  Certificates(
    request: QueryCertificatesRequest
  ): Promise<QueryCertificatesResponse>;
  /** Queries a Document by index. */
  Document(request: QueryGetDocumentRequest): Promise<QueryGetDocumentResponse>;
  /** Queries a list of Document items. */
  DocumentAll(
    request: QueryAllDocumentRequest
  ): Promise<QueryAllDocumentResponse>;
  /** Queries a SystemInfo by index. */
  SystemInfo(
    request: QueryGetSystemInfoRequest
  ): Promise<QueryGetSystemInfoResponse>;
  /** Queries a AuthorizeAccount by index. */
  AuthorizeAccount(
    request: QueryGetAuthorizeAccountRequest
  ): Promise<QueryGetAuthorizeAccountResponse>;
  /** Queries a list of AuthorizeAccount items. */
  AuthorizeAccountAll(
    request: QueryAllAuthorizeAccountRequest
  ): Promise<QueryAllAuthorizeAccountResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Certificates(
    request: QueryCertificatesRequest
  ): Promise<QueryCertificatesResponse> {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesis.thesis.Query",
      "Certificates",
      data
    );
    return promise.then((data) =>
      QueryCertificatesResponse.decode(new Reader(data))
    );
  }

  Document(
    request: QueryGetDocumentRequest
  ): Promise<QueryGetDocumentResponse> {
    const data = QueryGetDocumentRequest.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Query", "Document", data);
    return promise.then((data) =>
      QueryGetDocumentResponse.decode(new Reader(data))
    );
  }

  DocumentAll(
    request: QueryAllDocumentRequest
  ): Promise<QueryAllDocumentResponse> {
    const data = QueryAllDocumentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesis.thesis.Query",
      "DocumentAll",
      data
    );
    return promise.then((data) =>
      QueryAllDocumentResponse.decode(new Reader(data))
    );
  }

  SystemInfo(
    request: QueryGetSystemInfoRequest
  ): Promise<QueryGetSystemInfoResponse> {
    const data = QueryGetSystemInfoRequest.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Query", "SystemInfo", data);
    return promise.then((data) =>
      QueryGetSystemInfoResponse.decode(new Reader(data))
    );
  }

  AuthorizeAccount(
    request: QueryGetAuthorizeAccountRequest
  ): Promise<QueryGetAuthorizeAccountResponse> {
    const data = QueryGetAuthorizeAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesis.thesis.Query",
      "AuthorizeAccount",
      data
    );
    return promise.then((data) =>
      QueryGetAuthorizeAccountResponse.decode(new Reader(data))
    );
  }

  AuthorizeAccountAll(
    request: QueryAllAuthorizeAccountRequest
  ): Promise<QueryAllAuthorizeAccountResponse> {
    const data = QueryAllAuthorizeAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesis.thesis.Query",
      "AuthorizeAccountAll",
      data
    );
    return promise.then((data) =>
      QueryAllAuthorizeAccountResponse.decode(new Reader(data))
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
