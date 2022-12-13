package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/documents/types"
)

// SetDocument set a specific document in the store from its index
func (k Keeper) SetDocument(ctx sdk.Context, document types.Document) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentKeyPrefix))
	b := k.cdc.MustMarshal(&document)
	store.Set(types.DocumentKey(
		document.Index,
	), b)
}

// GetDocument returns a document from its index
func (k Keeper) GetDocument(
	ctx sdk.Context,
	index string,

) (val types.Document, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentKeyPrefix))

	b := store.Get(types.DocumentKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveDocument removes a document from the store
func (k Keeper) RemoveDocument(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentKeyPrefix))
	store.Delete(types.DocumentKey(
		index,
	))
}

// GetAllDocument returns all document
func (k Keeper) GetAllDocument(ctx sdk.Context) (list []types.Document) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.DocumentKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Document
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
