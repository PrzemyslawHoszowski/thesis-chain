package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateDocument = "create_document"

var _ sdk.Msg = &MsgCreateDocument{}

func NewMsgCreateDocument(creator string, files []string) *MsgCreateDocument {
	return &MsgCreateDocument{
		Creator: creator,
		Files:   files,
	}
}

func (msg *MsgCreateDocument) Route() string {
	return RouterKey
}

func (msg *MsgCreateDocument) Type() string {
	return TypeMsgCreateDocument
}

func (msg *MsgCreateDocument) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateDocument) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateDocument) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
