package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRemoveUsers = "remove_users"

var _ sdk.Msg = &MsgRemoveUsers{}

func NewMsgRemoveUsers(creator string, documentId string, role string, addresses []string) *MsgRemoveUsers {
	return &MsgRemoveUsers{
		Creator:    creator,
		DocumentId: documentId,
		Role:       role,
		Addresses:  addresses,
	}
}

func (msg *MsgRemoveUsers) Route() string {
	return RouterKey
}

func (msg *MsgRemoveUsers) Type() string {
	return TypeMsgRemoveUsers
}

func (msg *MsgRemoveUsers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRemoveUsers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRemoveUsers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
