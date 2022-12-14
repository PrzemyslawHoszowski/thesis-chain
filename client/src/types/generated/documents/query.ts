/* eslint-disable */
import { Params } from "./params";
import { Roles } from "./roles";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Document } from "./document";
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "thesis.documents";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: Params;
}

export interface QueryGetRolesRequest {
  index: string;
}

export interface QueryGetRolesResponse {
  roles?: Roles;
}

export interface QueryAllRolesRequest {
  pagination?: PageRequest;
}

export interface QueryAllRolesResponse {
  roles: Roles[];
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

function createBaseQueryGetRolesRequest(): QueryGetRolesRequest {
  return { index: "" };
}

export const QueryGetRolesRequest = {
  encode(
    message: QueryGetRolesRequest,
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
  ): QueryGetRolesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRolesRequest();
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

  fromJSON(object: any): QueryGetRolesRequest {
    return {
      index: isSet(object.index) ? String(object.index) : "",
    };
  },

  toJSON(message: QueryGetRolesRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRolesRequest>, I>>(
    object: I
  ): QueryGetRolesRequest {
    const message = createBaseQueryGetRolesRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetRolesResponse(): QueryGetRolesResponse {
  return { roles: undefined };
}

export const QueryGetRolesResponse = {
  encode(
    message: QueryGetRolesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.roles !== undefined) {
      Roles.encode(message.roles, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetRolesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roles = Roles.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRolesResponse {
    return {
      roles: isSet(object.roles) ? Roles.fromJSON(object.roles) : undefined,
    };
  },

  toJSON(message: QueryGetRolesResponse): unknown {
    const obj: any = {};
    message.roles !== undefined &&
      (obj.roles = message.roles ? Roles.toJSON(message.roles) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetRolesResponse>, I>>(
    object: I
  ): QueryGetRolesResponse {
    const message = createBaseQueryGetRolesResponse();
    message.roles =
      object.roles !== undefined && object.roles !== null
        ? Roles.fromPartial(object.roles)
        : undefined;
    return message;
  },
};

function createBaseQueryAllRolesRequest(): QueryAllRolesRequest {
  return { pagination: undefined };
}

export const QueryAllRolesRequest = {
  encode(
    message: QueryAllRolesRequest,
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
  ): QueryAllRolesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRolesRequest();
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

  fromJSON(object: any): QueryAllRolesRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllRolesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRolesRequest>, I>>(
    object: I
  ): QueryAllRolesRequest {
    const message = createBaseQueryAllRolesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryAllRolesResponse(): QueryAllRolesResponse {
  return { roles: [], pagination: undefined };
}

export const QueryAllRolesResponse = {
  encode(
    message: QueryAllRolesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.roles) {
      Roles.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllRolesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllRolesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.roles.push(Roles.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllRolesResponse {
    return {
      roles: Array.isArray(object?.roles)
        ? object.roles.map((e: any) => Roles.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAllRolesResponse): unknown {
    const obj: any = {};
    if (message.roles) {
      obj.roles = message.roles.map((e) => (e ? Roles.toJSON(e) : undefined));
    } else {
      obj.roles = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllRolesResponse>, I>>(
    object: I
  ): QueryAllRolesResponse {
    const message = createBaseQueryAllRolesResponse();
    message.roles = object.roles?.map((e) => Roles.fromPartial(e)) || [];
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Roles by index. */
  Roles(request: QueryGetRolesRequest): Promise<QueryGetRolesResponse>;
  /** Queries a list of Roles items. */
  RolesAll(request: QueryAllRolesRequest): Promise<QueryAllRolesResponse>;
  /** Queries a Document by index. */
  Document(request: QueryGetDocumentRequest): Promise<QueryGetDocumentResponse>;
  /** Queries a list of Document items. */
  DocumentAll(
    request: QueryAllDocumentRequest
  ): Promise<QueryAllDocumentResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Roles = this.Roles.bind(this);
    this.RolesAll = this.RolesAll.bind(this);
    this.Document = this.Document.bind(this);
    this.DocumentAll = this.DocumentAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("thesis.documents.Query", "Params", data);
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Roles(request: QueryGetRolesRequest): Promise<QueryGetRolesResponse> {
    const data = QueryGetRolesRequest.encode(request).finish();
    const promise = this.rpc.request("thesis.documents.Query", "Roles", data);
    return promise.then((data) =>
      QueryGetRolesResponse.decode(new _m0.Reader(data))
    );
  }

  RolesAll(request: QueryAllRolesRequest): Promise<QueryAllRolesResponse> {
    const data = QueryAllRolesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesis.documents.Query",
      "RolesAll",
      data
    );
    return promise.then((data) =>
      QueryAllRolesResponse.decode(new _m0.Reader(data))
    );
  }

  Document(
    request: QueryGetDocumentRequest
  ): Promise<QueryGetDocumentResponse> {
    const data = QueryGetDocumentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesis.documents.Query",
      "Document",
      data
    );
    return promise.then((data) =>
      QueryGetDocumentResponse.decode(new _m0.Reader(data))
    );
  }

  DocumentAll(
    request: QueryAllDocumentRequest
  ): Promise<QueryAllDocumentResponse> {
    const data = QueryAllDocumentRequest.encode(request).finish();
    const promise = this.rpc.request(
      "thesis.documents.Query",
      "DocumentAll",
      data
    );
    return promise.then((data) =>
      QueryAllDocumentResponse.decode(new _m0.Reader(data))
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
