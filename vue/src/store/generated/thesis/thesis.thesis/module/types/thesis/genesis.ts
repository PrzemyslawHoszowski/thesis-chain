/* eslint-disable */
import { Params } from "../thesis/params";
import { Roles } from "../thesis/roles";
import { Document } from "../thesis/document";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesis.thesis";

/** GenesisState defines the thesis module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  rolesList: Roles[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  documentList: Document[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.rolesList = [];
    message.documentList = [];
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
    const message = { ...baseGenesisState } as GenesisState;
    message.rolesList = [];
    message.documentList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.rolesList !== undefined && object.rolesList !== null) {
      for (const e of object.rolesList) {
        message.rolesList.push(Roles.fromJSON(e));
      }
    }
    if (object.documentList !== undefined && object.documentList !== null) {
      for (const e of object.documentList) {
        message.documentList.push(Document.fromJSON(e));
      }
    }
    return message;
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

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.rolesList = [];
    message.documentList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.rolesList !== undefined && object.rolesList !== null) {
      for (const e of object.rolesList) {
        message.rolesList.push(Roles.fromPartial(e));
      }
    }
    if (object.documentList !== undefined && object.documentList !== null) {
      for (const e of object.documentList) {
        message.documentList.push(Document.fromPartial(e));
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
