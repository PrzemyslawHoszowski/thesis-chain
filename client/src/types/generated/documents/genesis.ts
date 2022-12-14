/* eslint-disable */
import { Params } from "./params";
import Long from "long";
import { Roles } from "./roles";
import { Document } from "./document";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "thesis.documents";

/** GenesisState defines the documents module's genesis state. */
export interface GenesisState {
  params?: Params;
  rolesList: Roles[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  documentList: Document[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, rolesList: [], documentList: [] };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.rolesList) {
      Roles.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.documentList) {
      Document.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.rolesList.push(Roles.decode(reader, reader.uint32()));
          break;
        case 3:
          message.documentList.push(Document.decode(reader, reader.uint32()));
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
      rolesList: Array.isArray(object?.rolesList)
        ? object.rolesList.map((e: any) => Roles.fromJSON(e))
        : [],
      documentList: Array.isArray(object?.documentList)
        ? object.documentList.map((e: any) => Document.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.rolesList) {
      obj.rolesList = message.rolesList.map((e) =>
        e ? Roles.toJSON(e) : undefined
      );
    } else {
      obj.rolesList = [];
    }
    if (message.documentList) {
      obj.documentList = message.documentList.map((e) =>
        e ? Document.toJSON(e) : undefined
      );
    } else {
      obj.documentList = [];
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
    message.rolesList =
      object.rolesList?.map((e) => Roles.fromPartial(e)) || [];
    message.documentList =
      object.documentList?.map((e) => Document.fromPartial(e)) || [];
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
