generate_ts: # script used to generate thesis blockchain specific types in ts for js client used in python service
	ls ../proto/thesis | xargs -I {} ./protoc/bin/thesis \
		--plugin="./node_modules/.bin/protoc-gen-ts_proto" \
		--ts_proto_out="../client/src/types/generated" \
		--proto_path="../proto" \
		--ts_proto_opt="esModuleInterop=true,forceLong=long,useOptionals=messages" \
		thesis/{}