package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgEditFiles = "edit_files"

var _ sdk.Msg = &MsgEditFiles{}

func NewMsgEditFiles(creator string, documentId string, files []string) *MsgEditFiles {
	return &MsgEditFiles{
		Creator:    creator,
		DocumentId: documentId,
		Files:      files,
	}
}

func (msg *MsgEditFiles) Route() string {
	return RouterKey
}

func (msg *MsgEditFiles) Type() string {
	return TypeMsgEditFiles
}

func (msg *MsgEditFiles) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgEditFiles) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgEditFiles) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
