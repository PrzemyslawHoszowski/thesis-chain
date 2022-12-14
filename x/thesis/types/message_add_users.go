package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddUsers = "add_users"

var _ sdk.Msg = &MsgAddUsers{}

func NewMsgAddUsers(creator string, documentId string, role string, addresses []string) *MsgAddUsers {
	return &MsgAddUsers{
		Creator:    creator,
		DocumentId: documentId,
		Role:       role,
		Addresses:  addresses,
	}
}

func (msg *MsgAddUsers) Route() string {
	return RouterKey
}

func (msg *MsgAddUsers) Type() string {
	return TypeMsgAddUsers
}

func (msg *MsgAddUsers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddUsers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddUsers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
