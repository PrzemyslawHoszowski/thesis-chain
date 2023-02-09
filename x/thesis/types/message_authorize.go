package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAuthorize = "authorize"

var _ sdk.Msg = &MsgAuthorize{}

func NewMsgAuthorize(creator string) *MsgAuthorize {
	return &MsgAuthorize{
		Creator: creator,
	}
}

func (msg *MsgAuthorize) Route() string {
	return RouterKey
}

func (msg *MsgAuthorize) Type() string {
	return TypeMsgAuthorize
}

func (msg *MsgAuthorize) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAuthorize) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAuthorize) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
