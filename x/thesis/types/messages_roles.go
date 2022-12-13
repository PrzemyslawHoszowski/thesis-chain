package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateRoles = "create_roles"
	TypeMsgUpdateRoles = "update_roles"
	TypeMsgDeleteRoles = "delete_roles"
)

var _ sdk.Msg = &MsgCreateRoles{}

func NewMsgCreateRoles(
	creator string,
	index string,
	admins []string,
	editors []string,
	signers []string,
	viewers []string,

) *MsgCreateRoles {
	return &MsgCreateRoles{
		Creator: creator,
		Index:   index,
		Admins:  admins,
		Editors: editors,
		Signers: signers,
		Viewers: viewers,
	}
}

func (msg *MsgCreateRoles) Route() string {
	return RouterKey
}

func (msg *MsgCreateRoles) Type() string {
	return TypeMsgCreateRoles
}

func (msg *MsgCreateRoles) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRoles) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRoles) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRoles{}

func NewMsgUpdateRoles(
	creator string,
	index string,
	admins []string,
	editors []string,
	signers []string,
	viewers []string,

) *MsgUpdateRoles {
	return &MsgUpdateRoles{
		Creator: creator,
		Index:   index,
		Admins:  admins,
		Editors: editors,
		Signers: signers,
		Viewers: viewers,
	}
}

func (msg *MsgUpdateRoles) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRoles) Type() string {
	return TypeMsgUpdateRoles
}

func (msg *MsgUpdateRoles) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRoles) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRoles) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRoles{}

func NewMsgDeleteRoles(
	creator string,
	index string,

) *MsgDeleteRoles {
	return &MsgDeleteRoles{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteRoles) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRoles) Type() string {
	return TypeMsgDeleteRoles
}

func (msg *MsgDeleteRoles) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRoles) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRoles) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
