package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgAddCertificate{}, "thesis/AddCertificate", nil)
	cdc.RegisterConcrete(&MsgCreateDocument{}, "thesis/CreateDocument", nil)
	cdc.RegisterConcrete(&MsgAddUsers{}, "thesis/AddUsers", nil)
	cdc.RegisterConcrete(&MsgRemoveUsers{}, "thesis/RemoveUsers", nil)
	cdc.RegisterConcrete(&MsgEditFiles{}, "thesis/EditFiles", nil)
	cdc.RegisterConcrete(&MsgSignDocument{}, "thesis/SignDocument", nil)
	cdc.RegisterConcrete(&MsgRejectSignature{}, "thesis/RejectSignature", nil)
	cdc.RegisterConcrete(&MsgAuthorize{}, "thesis/Authorize", nil)
	cdc.RegisterConcrete(&MsgRejectDocument{}, "thesis/RejectDocument", nil)
	cdc.RegisterConcrete(&MsgAckFiles{}, "thesis/AckFiles", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAddCertificate{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateDocument{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAddUsers{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRemoveUsers{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgEditFiles{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSignDocument{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRejectSignature{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAuthorize{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRejectDocument{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAckFiles{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
