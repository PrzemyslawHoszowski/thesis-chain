/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../documents/params";
import { Roles } from "../documents/roles";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Document } from "../documents/document";

export const protobufPackage = "thesis.documents";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetRolesRequest {
  index: string;
}

export interface QueryGetRolesResponse {
  roles: Roles | undefined;
}

export interface QueryAllRolesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRolesResponse {
  roles: Roles[];
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

const baseQueryGetRolesRequest: object = { index: "" };

export const QueryGetRolesRequest = {
  encode(
    message: QueryGetRolesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRolesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetRolesRequest } as QueryGetRolesRequest;
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
    const message = { ...baseQueryGetRolesRequest } as QueryGetRolesRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetRolesRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetRolesRequest>): QueryGetRolesRequest {
    const message = { ...baseQueryGetRolesRequest } as QueryGetRolesRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetRolesResponse: object = {};

export const QueryGetRolesResponse = {
  encode(
    message: QueryGetRolesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.roles !== undefined) {
      Roles.encode(message.roles, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRolesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetRolesResponse } as QueryGetRolesResponse;
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
    const message = { ...baseQueryGetRolesResponse } as QueryGetRolesResponse;
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = Roles.fromJSON(object.roles);
    } else {
      message.roles = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRolesResponse): unknown {
    const obj: any = {};
    message.roles !== undefined &&
      (obj.roles = message.roles ? Roles.toJSON(message.roles) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRolesResponse>
  ): QueryGetRolesResponse {
    const message = { ...baseQueryGetRolesResponse } as QueryGetRolesResponse;
    if (object.roles !== undefined && object.roles !== null) {
      message.roles = Roles.fromPartial(object.roles);
    } else {
      message.roles = undefined;
    }
    return message;
  },
};

const baseQueryAllRolesRequest: object = {};

export const QueryAllRolesRequest = {
  encode(
    message: QueryAllRolesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRolesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRolesRequest } as QueryAllRolesRequest;
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
    const message = { ...baseQueryAllRolesRequest } as QueryAllRolesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRolesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllRolesRequest>): QueryAllRolesRequest {
    const message = { ...baseQueryAllRolesRequest } as QueryAllRolesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllRolesResponse: object = {};

export const QueryAllRolesResponse = {
  encode(
    message: QueryAllRolesResponse,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): QueryAllRolesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRolesResponse } as QueryAllRolesResponse;
    message.roles = [];
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
    const message = { ...baseQueryAllRolesResponse } as QueryAllRolesResponse;
    message.roles = [];
    if (object.roles !== undefined && object.roles !== null) {
      for (const e of object.roles) {
        message.roles.push(Roles.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
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

  fromPartial(
    object: DeepPartial<QueryAllRolesResponse>
  ): QueryAllRolesResponse {
    const message = { ...baseQueryAllRolesResponse } as QueryAllRolesResponse;
    message.roles = [];
    if (object.roles !== undefined && object.roles !== null) {
      for (const e of object.roles) {
        message.roles.push(Roles.fromPartial(e));
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
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("thesis.documents.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Roles(request: QueryGetRolesRequest): Promise<QueryGetRolesResponse> {
    const data = QueryGetRolesRequest.encode(request).finish();
    const promise = this.rpc.request("thesis.documents.Query", "Roles", data);
    return promise.then((data) =>
      QueryGetRolesResponse.decode(new Reader(data))
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
      QueryAllRolesResponse.decode(new Reader(data))
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
      QueryGetDocumentResponse.decode(new Reader(data))
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
      QueryAllDocumentResponse.decode(new Reader(data))
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
