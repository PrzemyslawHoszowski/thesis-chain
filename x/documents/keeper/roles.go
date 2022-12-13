package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"thesis/x/documents/types"
)

// SetRoles set a specific roles in the store from its index
func (k Keeper) SetRoles(ctx sdk.Context, roles types.Roles) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RolesKeyPrefix))
	b := k.cdc.MustMarshal(&roles)
	store.Set(types.RolesKey(
		roles.Index,
	), b)
}

// GetRoles returns a roles from its index
func (k Keeper) GetRoles(
	ctx sdk.Context,
	index string,

) (val types.Roles, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RolesKeyPrefix))

	b := store.Get(types.RolesKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveRoles removes a roles from the store
func (k Keeper) RemoveRoles(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RolesKeyPrefix))
	store.Delete(types.RolesKey(
		index,
	))
}

// GetAllRoles returns all roles
func (k Keeper) GetAllRoles(ctx sdk.Context) (list []types.Roles) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RolesKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Roles
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
