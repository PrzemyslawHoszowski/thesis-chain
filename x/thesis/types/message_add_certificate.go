package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddCertificate = "add_certificate"

var _ sdk.Msg = &MsgAddCertificate{}

func NewMsgAddCertificate(creator string, hash string, address string) *MsgAddCertificate {
	return &MsgAddCertificate{
		Creator: creator,
		Hash:    hash,
		Address: address,
	}
}

func (msg *MsgAddCertificate) Route() string {
	return RouterKey
}

func (msg *MsgAddCertificate) Type() string {
	return TypeMsgAddCertificate
}

func (msg *MsgAddCertificate) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddCertificate) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddCertificate) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
