/* eslint-disable */
import { Params } from "./params";
import { SystemInfo } from "./system_info";
import Long from "long";
import { Document } from "./document";
import { AuthorizeAccount } from "./authorize_account";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "thesis.thesis";

/** GenesisState defines the thesis module's genesis state. */
export interface GenesisState {
  params?: Params;
  documentList: Document[];
  systemInfo?: SystemInfo;
  /** this line is used by starport scaffolding # genesis/proto/state */
  authorizeAccountList: AuthorizeAccount[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    documentList: [],
    systemInfo: undefined,
    authorizeAccountList: [],
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.documentList) {
      Document.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.systemInfo !== undefined) {
      SystemInfo.encode(message.systemInfo, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.authorizeAccountList) {
      AuthorizeAccount.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.documentList.push(Document.decode(reader, reader.uint32()));
          break;
        case 3:
          message.systemInfo = SystemInfo.decode(reader, reader.uint32());
          break;
        case 4:
          message.authorizeAccountList.push(
            AuthorizeAccount.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      documentList: Array.isArray(object?.documentList)
        ? object.documentList.map((e: any) => Document.fromJSON(e))
        : [],
      systemInfo: isSet(object.systemInfo)
        ? SystemInfo.fromJSON(object.systemInfo)
        : undefined,
      authorizeAccountList: Array.isArray(object?.authorizeAccountList)
        ? object.authorizeAccountList.map((e: any) =>
            AuthorizeAccount.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.documentList) {
      obj.documentList = message.documentList.map((e) =>
        e ? Document.toJSON(e) : undefined
      );
    } else {
      obj.documentList = [];
    }
    message.systemInfo !== undefined &&
      (obj.systemInfo = message.systemInfo
        ? SystemInfo.toJSON(message.systemInfo)
        : undefined);
    if (message.authorizeAccountList) {
      obj.authorizeAccountList = message.authorizeAccountList.map((e) =>
        e ? AuthorizeAccount.toJSON(e) : undefined
      );
    } else {
      obj.authorizeAccountList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.documentList =
      object.documentList?.map((e) => Document.fromPartial(e)) || [];
    message.systemInfo =
      object.systemInfo !== undefined && object.systemInfo !== null
        ? SystemInfo.fromPartial(object.systemInfo)
        : undefined;
    message.authorizeAccountList =
      object.authorizeAccountList?.map((e) =>
        AuthorizeAccount.fromPartial(e)
      ) || [];
    return message;
  },
};

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
