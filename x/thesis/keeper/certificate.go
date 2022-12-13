package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"thesis/x/thesis/types"
)

func (k Keeper) AppendCertificate(ctx sdk.Context, cert types.Certificate) uint64 {
	count := k.GetCertificateCount(ctx)
	cert.Id = count
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.CertificateKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, cert.Id)

	appendedValue := k.cdc.MustMarshal(&cert)
	store.Set(byteKey, appendedValue)

	k.SetCertificateCount(ctx, count+1)
	return count
}

func (k Keeper) GetCertificateCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.CertificateCountKey))

	byteKey := []byte(types.CertificateCountKey)
	bz := store.Get(byteKey)

	if bz == nil {
		return 0
	}

	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetCertificateCount(ctx sdk.Context, counter uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.CertificateCountKey))
	byteKey := []byte(types.CertificateCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, counter)
	store.Set(byteKey, bz)
}
