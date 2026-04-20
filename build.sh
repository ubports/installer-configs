#!/usr/bin/env sh

jq_aliases='map(.codename as $codename | .aliases | map({ (.): $codename }))
	| flatten
	| reduce .[] as $alias ({}; . + $alias)'

jq_index='map({ name, codename, formfactor, operating_systems: [.operating_systems[].name] })'

mkdir -p ./build/v2/devices
mkdir -p ./build/v2/schema

yq --slurp "${jq_aliases}" ./v2/devices/*.yml > ./build/v2/aliases.json
yq --slurp "${jq_index}" ./v2/devices/*.yml > ./build/v2/index.json

for device in ./v2/devices/*.yml; do
	yq -c --arg sha "${GITHUB_SHA}" '{sha:$sha} + .' "${device}" > ./build/v2/devices/$(basename $device .yml).json
done

# FIXME: these are not useful with relative $id, left for backwards compatibility?
for schema in ./v2/schema/*.yml; do
	new_name="$(basename $schema .yml).json"
	yq -c --arg id "${new_name}" '. += {"$id": $id}' "${schema}" > "./build/v2/schema/${new_name}"
done

jq_schema='.[0] + {"$defs": .[1:] | reduce .[] as $def ({}; . + { ($def.["$id"]): $def })}'
yq --slurp "${jq_schema}" ./v2/schema/_.schema.yml ./v2/schema/??*.schema.yml > ./build/v2/schema/index.json
