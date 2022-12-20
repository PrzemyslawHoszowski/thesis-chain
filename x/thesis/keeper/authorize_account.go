package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/thesis/types"
)

// SetAuthorizeAccount set a specific authorizeAccount in the store from its index
func (k Keeper) SetAuthorizeAccount(ctx sdk.Context, authorizeAccount types.AuthorizeAccount) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthorizeAccountKeyPrefix))
	b := k.cdc.MustMarshal(&authorizeAccount)
	store.Set(types.AuthorizeAccountKey(
		authorizeAccount.Index,
	), b)
}

// GetAuthorizeAccount returns a authorizeAccount from its index
func (k Keeper) GetAuthorizeAccount(
	ctx sdk.Context,
	index string,

) (val types.AuthorizeAccount, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthorizeAccountKeyPrefix))

	b := store.Get(types.AuthorizeAccountKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAuthorizeAccount removes a authorizeAccount from the store
func (k Keeper) RemoveAuthorizeAccount(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthorizeAccountKeyPrefix))
	store.Delete(types.AuthorizeAccountKey(
		index,
	))
}

// GetAllAuthorizeAccount returns all authorizeAccount
func (k Keeper) GetAllAuthorizeAccount(ctx sdk.Context) (list []types.AuthorizeAccount) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuthorizeAccountKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AuthorizeAccount
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
