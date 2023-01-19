package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAckFiles = "ack_files"

var _ sdk.Msg = &MsgAckFiles{}

func NewMsgAckFiles(creator string, files []string, doc uint64) *MsgAckFiles {
	return &MsgAckFiles{
		Creator: creator,
		Files:   files,
		Doc:     doc,
	}
}

func (msg *MsgAckFiles) Route() string {
	return RouterKey
}

func (msg *MsgAckFiles) Type() string {
	return TypeMsgAckFiles
}

func (msg *MsgAckFiles) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAckFiles) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAckFiles) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
