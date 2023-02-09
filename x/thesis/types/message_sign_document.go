package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSignDocument = "sign_document"

var _ sdk.Msg = &MsgSignDocument{}

func NewMsgSignDocument(creator string, documentId string, lastEditHeight uint64) *MsgSignDocument {
	return &MsgSignDocument{
		Creator:        creator,
		DocumentId:     documentId,
		LastEditHeight: lastEditHeight,
	}
}

func (msg *MsgSignDocument) Route() string {
	return RouterKey
}

func (msg *MsgSignDocument) Type() string {
	return TypeMsgSignDocument
}

func (msg *MsgSignDocument) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSignDocument) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSignDocument) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
