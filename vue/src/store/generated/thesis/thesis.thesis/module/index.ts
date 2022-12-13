// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteRoles } from "./types/thesis/tx";
import { MsgAddCertificate } from "./types/thesis/tx";
import { MsgCreateRoles } from "./types/thesis/tx";
import { MsgUpdateRoles } from "./types/thesis/tx";
import { MsgCreateDocument } from "./types/thesis/tx";


const types = [
  ["/thesis.thesis.MsgDeleteRoles", MsgDeleteRoles],
  ["/thesis.thesis.MsgAddCertificate", MsgAddCertificate],
  ["/thesis.thesis.MsgCreateRoles", MsgCreateRoles],
  ["/thesis.thesis.MsgUpdateRoles", MsgUpdateRoles],
  ["/thesis.thesis.MsgCreateDocument", MsgCreateDocument],
  
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
    msgDeleteRoles: (data: MsgDeleteRoles): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgDeleteRoles", value: MsgDeleteRoles.fromPartial( data ) }),
    msgAddCertificate: (data: MsgAddCertificate): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgAddCertificate", value: MsgAddCertificate.fromPartial( data ) }),
    msgCreateRoles: (data: MsgCreateRoles): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgCreateRoles", value: MsgCreateRoles.fromPartial( data ) }),
    msgUpdateRoles: (data: MsgUpdateRoles): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgUpdateRoles", value: MsgUpdateRoles.fromPartial( data ) }),
    msgCreateDocument: (data: MsgCreateDocument): EncodeObject => ({ typeUrl: "/thesis.thesis.MsgCreateDocument", value: MsgCreateDocument.fromPartial( data ) }),
    
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
