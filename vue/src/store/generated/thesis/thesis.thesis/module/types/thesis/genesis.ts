/* eslint-disable */
import { Params } from "../thesis/params";
import { Document } from "../thesis/document";
import { SystemInfo } from "../thesis/system_info";
import { AuthorizeAccount } from "../thesis/authorize_account";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "thesis.thesis";

/** GenesisState defines the thesis module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  documentList: Document[];
  systemInfo: SystemInfo | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  authorizeAccountList: AuthorizeAccount[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.documentList = [];
    message.authorizeAccountList = [];
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
    const message = { ...baseGenesisState } as GenesisState;
    message.documentList = [];
    message.authorizeAccountList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.documentList !== undefined && object.documentList !== null) {
      for (const e of object.documentList) {
        message.documentList.push(Document.fromJSON(e));
      }
    }
    if (object.systemInfo !== undefined && object.systemInfo !== null) {
      message.systemInfo = SystemInfo.fromJSON(object.systemInfo);
    } else {
      message.systemInfo = undefined;
    }
    if (
      object.authorizeAccountList !== undefined &&
      object.authorizeAccountList !== null
    ) {
      for (const e of object.authorizeAccountList) {
        message.authorizeAccountList.push(AuthorizeAccount.fromJSON(e));
      }
    }
    return message;
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

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.documentList = [];
    message.authorizeAccountList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.documentList !== undefined && object.documentList !== null) {
      for (const e of object.documentList) {
        message.documentList.push(Document.fromPartial(e));
      }
    }
    if (object.systemInfo !== undefined && object.systemInfo !== null) {
      message.systemInfo = SystemInfo.fromPartial(object.systemInfo);
    } else {
      message.systemInfo = undefined;
    }
    if (
      object.authorizeAccountList !== undefined &&
      object.authorizeAccountList !== null
    ) {
      for (const e of object.authorizeAccountList) {
        message.authorizeAccountList.push(AuthorizeAccount.fromPartial(e));
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
