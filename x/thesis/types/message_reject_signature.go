package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRejectSignature = "reject_signature"

var _ sdk.Msg = &MsgRejectSignature{}

func NewMsgRejectSignature(creator string, documentId string) *MsgRejectSignature {
	return &MsgRejectSignature{
		Creator:    creator,
		DocumentId: documentId,
	}
}

func (msg *MsgRejectSignature) Route() string {
	return RouterKey
}

func (msg *MsgRejectSignature) Type() string {
	return TypeMsgRejectSignature
}

func (msg *MsgRejectSignature) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRejectSignature) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRejectSignature) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
