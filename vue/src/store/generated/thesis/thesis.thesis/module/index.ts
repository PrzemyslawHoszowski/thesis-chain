// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgAddUsers } from "./types/thesis/tx";
import { MsgRemoveUsers } from "./types/thesis/tx";
import { MsgCreateDocument } from "./types/thesis/tx";
import { MsgAuthorize } from "./types/thesis/tx";
import { MsgAddCertificate } from "./types/thesis/tx";
import { MsgRejectSignature } from "./types/thesis/tx";
import { MsgRejectDocument } from "./types/thesis/tx";
import { MsgSignDocument } from "./types/thesis/tx";
import { MsgEditFiles } from "./types/thesis/tx";
import { MsgAckFiles } from "./types/thesis/tx";


const types = [
  ["/thesis.thesis.MsgAddUsers", MsgAddUsers],
  ["/thesis.thesis.MsgRemoveUsers", MsgRemoveUsers],
  ["/thesis.thesis.MsgCreateDocument", MsgCreateDocument],
  ["/thesis.thesis.MsgAuthorize", MsgAuthorize],
  ["/thesis.thesis.MsgAddCertificate", MsgAddCertificate],
  ["/thesis.thesis.MsgRejectSignature", MsgRejectSignature],
  ["/thesis.thesis.MsgRejectDocument", MsgRejectDocument],
  ["/thesis.thesis.MsgSignDocument", MsgSignDocument],
  ["/thesis.thesis.MsgEditFiles", MsgEditFiles],
  ["/thesis.thesis.MsgAckFiles", MsgAckFiles],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgAddUsers: (data: MsgAddUsers): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgAddUsers", value: MsgAddUsers.fromPartial( data ) }),
    msgRemoveUsers: (data: MsgRemoveUsers): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgRemoveUsers", value: MsgRemoveUsers.fromPartial( data ) }),
    msgCreateDocument: (data: MsgCreateDocument): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgCreateDocument", value: MsgCreateDocument.fromPartial( data ) }),
    msgAuthorize: (data: MsgAuthorize): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgAuthorize", value: MsgAuthorize.fromPartial( data ) }),
    msgAddCertificate: (data: MsgAddCertificate): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgAddCertificate", value: MsgAddCertificate.fromPartial( data ) }),
    msgRejectSignature: (data: MsgRejectSignature): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgRejectSignature", value: MsgRejectSignature.fromPartial( data ) }),
    msgRejectDocument: (data: MsgRejectDocument): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgRejectDocument", value: MsgRejectDocument.fromPartial( data ) }),
    msgSignDocument: (data: MsgSignDocument): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgSignDocument", value: MsgSignDocument.fromPartial( data ) }),
    msgEditFiles: (data: MsgEditFiles): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgEditFiles", value: MsgEditFiles.fromPartial( data ) }),
    msgAckFiles: (data: MsgAckFiles): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgAckFiles", value: MsgAckFiles.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
