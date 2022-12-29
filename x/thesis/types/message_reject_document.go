package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRejectDocument = "reject_document"

var _ sdk.Msg = &MsgRejectDocument{}

func NewMsgRejectDocument(creator string, documentId string, reason string) *MsgRejectDocument {
	return &MsgRejectDocument{
		Creator:    creator,
		DocumentId: documentId,
		Reason:     reason,
	}
}

func (msg *MsgRejectDocument) Route() string {
	return RouterKey
}

func (msg *MsgRejectDocument) Type() string {
	return TypeMsgRejectDocument
}

func (msg *MsgRejectDocument) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRejectDocument) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRejectDocument) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
