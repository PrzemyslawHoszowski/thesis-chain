# --pubkey should be replaced with generated key in .thesis/config/priv_validator_key.json
# also in configuration files cors should be enabled from ip of your website
# before running this command make sure u create account for Bob in thesisd cli
start-node:
	thesisd add-genesis-account cosmos1cren9wyl02qqna0tqs39k0c6a8yfsxgsszhjtk 200000000stake # alice
	thesisd add-genesis-account cosmos17ae3syeplrs2v4s02rdafz7w2jpfg0kmqvvcqp 200000000stake # bob
	thesisd gentx \
    		Bob \
    		100000000stake \
    		--amount 100000000stake \
    		--account-number 0 --sequence 0 \
    		--chain-id thesis \
    		--pubkey '{"@type":"/cosmos.crypto.ed25519.PubKey","key":"Bcenh80+/3NLz1hErMOWaIvyP6EgHYJQhEL8G24qHiE="}' \
    		--gas 1000000 --gas-prices 0.01stake
	thesisd collect-gentxs