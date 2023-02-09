#!/bin/sh
ls
if ! [ -f /home/app/.thesis/data/priv_validator_state.json ]; then
  mkdir -p /home/app/.thesis/data
  cp templates/priv_validator_state.json /home/app/.thesis/data/priv_validator_state.json
fi

if ! [ -d /.thesis/config ]; then
  mkdir -p /home/app/.thesis/config
  envsubst <templates/config.toml > /home/app/.thesis/config/config.toml
  envsubst <templates/genesis.json > /home/app/.thesis/config/genesis.json
  envsubst <templates/node_key.json > /home/app/.thesis/config/node_key.json
  envsubst <templates/priv_validator_key.json > /home/app/.thesis/config/priv_validator_key.json
  cp templates/app.toml /home/app/.thesis/config/app.toml
  cp -r templates/gentx /home/app/.thesis/config/gentx
fi

ls /home/app/.thesis/config

exec "$@"