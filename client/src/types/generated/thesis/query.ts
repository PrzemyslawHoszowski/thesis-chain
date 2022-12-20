/* eslint-disable */
import { Params } from "./params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Document } from "./document";
import { SystemInfo } from "./system_info";
import { AuthorizeAccount } from "./authorize_account";
import Long from "long";
import { Certificate } from "./certificate";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "thesis.thesis";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryCertificatesRequest {
  pagination?: PageRequest;
}

export interface QueryCertificatesResponse {
  Certificate: Certificate[];
  pagination?: PageResponse;
}

export interface QueryGetDocumentRequest {
  index: string;
}

export interface QueryGetDocumentResponse {
  document?: Document;
}

export interface QueryAllDocumentRequest {
  pagination?: PageRequest;
}

export interface QueryAllDocumentResponse {
  document: Document[];
  pagination?: PageResponse;
}

export interface QueryGetSystemInfoRequest {}

export interface QueryGetSystemInfoResponse {
  SystemInfo?: SystemInfo;
}

export interface QueryGetAuthorizeAccountRequest {
  index: string;
}

export interface QueryGetAuthorizeAccountResponse {
  authorizeAccount?: AuthorizeAccount;
}

export interface QueryAllAuthorizeAccountRequest {
  pagination?: PageRequest;
}

export interface QueryAllAuthorizeAccountResponse {
  authorizeAccount: AuthorizeAccount[];
  pagination?: PageResponse;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryCertificatesRequest(): QueryCertificatesRequest {
  return { pagination: undefined };
}

export const QueryCertificatesRequest = {
  encode(
    message: QueryCertificatesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCertificatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesRequest();
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
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryCertificatesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCertificatesRequest>, I>>(
    object: I
  ): QueryCertificatesRequest {
    const message = createBaseQueryCertificatesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryCertificatesResponse(): QueryCertificatesResponse {
  return { Certificate: [], pagination: undefined };
}

export const QueryCertificatesResponse = {
  encode(
    message: QueryCertificatesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCertificatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesResponse();
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
    return {
      Certificate: Array.isArray(object?.Certificate)
        ? object.Certificate.map((e: any) => Certificate.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
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

  fromPartial<I extends Exact<DeepPartial<QueryCertificatesResponse>, I>>(
    object: I
  ): QueryCertificatesResponse {
    const message = createBaseQueryCertificatesResponse();
    message.Certificate =
      object.Certificate?.map((e) => Certificate.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGetDocumentRequest(): QueryGetDocumentRequest {
  return { index: "" };
}

export const QueryGetDocumentRequest = {
  encode(
    message: QueryGetDocumentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDocumentRequest();
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
    return {
      index: isSet(object.index) ? String(object.index) : "",
    };
  },

  toJSON(message: QueryGetDocumentRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDocumentRequest>, I>>(
    object: I
  ): QueryGetDocumentRequest {
    const message = createBaseQueryGetDocumentRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetDocumentResponse(): QueryGetDocumentResponse {
  return { document: undefined };
}

export const QueryGetDocumentResponse = {
  encode(
    message: QueryGetDocumentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.document !== undefined) {
      Document.encode(message.document, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDocumentResponse();
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
    return {
      document: isSet(object.document)
        ? Document.fromJSON(object.document)
        : undefined,
    };
  },

  toJSON(message: QueryGetDocumentResponse): unknown {
    const obj: any = {};
    message.document !== undefined &&
      (obj.document = message.document
        ? Document.toJSON(message.document)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDocumentResponse>, I>>(
    object: I
  ): QueryGetDocumentResponse {
    const message = createBaseQueryGetDocumentResponse();
    message.document =
      object.document !== undefined && object.document !== null
        ? Document.fromPartial(object.document)
        : undefined;
    return message;
  },
};

function createBaseQueryAllDocumentRequest(): QueryAllDocumentRequest {
  return { pagination: undefined };
}

export const QueryAllDocumentRequest = {
  encode(
    message: QueryAllDocumentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllDocumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDocumentRequest();
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
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllDocumentRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDocumentRequest>, I>>(
    object: I
  ): QueryAllDocumentRequest {
    const message = createBaseQueryAllDocumentRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllDocumentResponse(): QueryAllDocumentResponse {
  return { document: [], pagination: undefined };
}

export const QueryAllDocumentResponse = {
  encode(
    message: QueryAllDocumentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllDocumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDocumentResponse();
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
    return {
      document: Array.isArray(object?.document)
        ? object.document.map((e: any) => Document.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
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

  fromPartial<I extends Exact<DeepPartial<QueryAllDocumentResponse>, I>>(
    object: I
  ): QueryAllDocumentResponse {
    const message = createBaseQueryAllDocumentResponse();
    message.document =
      object.document?.map((e) => Document.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryGetSystemInfoRequest(): QueryGetSystemInfoRequest {
  return {};
}

export const QueryGetSystemInfoRequest = {
  encode(
    _: QueryGetSystemInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetSystemInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfoRequest();
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
    return {};
  },

  toJSON(_: QueryGetSystemInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfoRequest>, I>>(
    _: I
  ): QueryGetSystemInfoRequest {
    const message = createBaseQueryGetSystemInfoRequest();
    return message;
  },
};

function createBaseQueryGetSystemInfoResponse(): QueryGetSystemInfoResponse {
  return { SystemInfo: undefined };
}

export const QueryGetSystemInfoResponse = {
  encode(
    message: QueryGetSystemInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.SystemInfo !== undefined) {
      SystemInfo.encode(message.SystemInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetSystemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetSystemInfoResponse();
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
    return {
      SystemInfo: isSet(object.SystemInfo)
        ? SystemInfo.fromJSON(object.SystemInfo)
        : undefined,
    };
  },

  toJSON(message: QueryGetSystemInfoResponse): unknown {
    const obj: any = {};
    message.SystemInfo !== undefined &&
      (obj.SystemInfo = message.SystemInfo
        ? SystemInfo.toJSON(message.SystemInfo)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetSystemInfoResponse>, I>>(
    object: I
  ): QueryGetSystemInfoResponse {
    const message = createBaseQueryGetSystemInfoResponse();
    message.SystemInfo =
      object.SystemInfo !== undefined && object.SystemInfo !== null
        ? SystemInfo.fromPartial(object.SystemInfo)
        : undefined;
    return message;
  },
};

function createBaseQueryGetAuthorizeAccountRequest(): QueryGetAuthorizeAccountRequest {
  return { index: "" };
}

export const QueryGetAuthorizeAccountRequest = {
  encode(
    message: QueryGetAuthorizeAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetAuthorizeAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAuthorizeAccountRequest();
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
    return {
      index: isSet(object.index) ? String(object.index) : "",
    };
  },

  toJSON(message: QueryGetAuthorizeAccountRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAuthorizeAccountRequest>, I>>(
    object: I
  ): QueryGetAuthorizeAccountRequest {
    const message = createBaseQueryGetAuthorizeAccountRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetAuthorizeAccountResponse(): QueryGetAuthorizeAccountResponse {
  return { authorizeAccount: undefined };
}

export const QueryGetAuthorizeAccountResponse = {
  encode(
    message: QueryGetAuthorizeAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authorizeAccount !== undefined) {
      AuthorizeAccount.encode(
        message.authorizeAccount,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetAuthorizeAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAuthorizeAccountResponse();
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
    return {
      authorizeAccount: isSet(object.authorizeAccount)
        ? AuthorizeAccount.fromJSON(object.authorizeAccount)
        : undefined,
    };
  },

  toJSON(message: QueryGetAuthorizeAccountResponse): unknown {
    const obj: any = {};
    message.authorizeAccount !== undefined &&
      (obj.authorizeAccount = message.authorizeAccount
        ? AuthorizeAccount.toJSON(message.authorizeAccount)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryGetAuthorizeAccountResponse>, I>
  >(object: I): QueryGetAuthorizeAccountResponse {
    const message = createBaseQueryGetAuthorizeAccountResponse();
    message.authorizeAccount =
      object.authorizeAccount !== undefined && object.authorizeAccount !== null
        ? AuthorizeAccount.fromPartial(object.authorizeAccount)
        : undefined;
    return message;
  },
};

function createBaseQueryAllAuthorizeAccountRequest(): QueryAllAuthorizeAccountRequest {
  return { pagination: undefined };
}

export const QueryAllAuthorizeAccountRequest = {
  encode(
    message: QueryAllAuthorizeAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllAuthorizeAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAuthorizeAccountRequest();
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
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllAuthorizeAccountRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAuthorizeAccountRequest>, I>>(
    object: I
  ): QueryAllAuthorizeAccountRequest {
    const message = createBaseQueryAllAuthorizeAccountRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllAuthorizeAccountResponse(): QueryAllAuthorizeAccountResponse {
  return { authorizeAccount: [], pagination: undefined };
}

export const QueryAllAuthorizeAccountResponse = {
  encode(
    message: QueryAllAuthorizeAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllAuthorizeAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAuthorizeAccountResponse();
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
    return {
      authorizeAccount: Array.isArray(object?.authorizeAccount)
        ? object.authorizeAccount.map((e: any) => AuthorizeAccount.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
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

  fromPartial<
    I extends Exact<DeepPartial<QueryAllAuthorizeAccountResponse>, I>
  >(object: I): QueryAllAuthorizeAccountResponse {
    const message = createBaseQueryAllAuthorizeAccountResponse();
    message.authorizeAccount =
      object.authorizeAccount?.map((e) => AuthorizeAccount.fromPartial(e)) ||
      [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
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
    this.Params = this.Params.bind(this);
    this.Certificates = this.Certificates.bind(this);
    this.Document = this.Document.bind(this);
    this.DocumentAll = this.DocumentAll.bind(this);
    this.SystemInfo = this.SystemInfo.bind(this);
    this.AuthorizeAccount = this.AuthorizeAccount.bind(this);
    this.AuthorizeAccountAll = this.AuthorizeAccountAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
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
      QueryCertificatesResponse.decode(new _m0.Reader(data))
    );
  }

  Document(
    request: QueryGetDocumentRequest
  ): Promise<QueryGetDocumentResponse> {
    const data = QueryGetDocumentRequest.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Query", "Document", data);
    return promise.then((data) =>
      QueryGetDocumentResponse.decode(new _m0.Reader(data))
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
      QueryAllDocumentResponse.decode(new _m0.Reader(data))
    );
  }

  SystemInfo(
    request: QueryGetSystemInfoRequest
  ): Promise<QueryGetSystemInfoResponse> {
    const data = QueryGetSystemInfoRequest.encode(request).finish();
    const promise = this.rpc.request("thesis.thesis.Query", "SystemInfo", data);
    return promise.then((data) =>
      QueryGetSystemInfoResponse.decode(new _m0.Reader(data))
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
      QueryGetAuthorizeAccountResponse.decode(new _m0.Reader(data))
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
      QueryAllAuthorizeAccountResponse.decode(new _m0.Reader(data))
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
