#!/usr/bin/env python3

from jsonschema_path import SchemaPath
import yaml
import semantic_version
import jq
import sys

path = SchemaPath.from_file_path("/work/v2/schema/_.schema.yml")
action_schema = yaml.safe_load(open("/work/v2/schema/action.schema.yml", "r"))
obj = yaml.safe_load(open(sys.argv[1], "r"))

err = False

def handle_oneof(o, schema):
    if "oneOf" in schema:
        for variant in schema["oneOf"]:
            if "type" not in variant:
                continue

            matches_object = variant["type"] == "object" and isinstance(o, dict)
            matches_array = variant["type"] == "array" and isinstance(o, list)
            matches_null = variant["type"] == "null" and o is None

            if matches_object or matches_array or matches_null:
                return variant
    return schema

def check_nested_semver(node, path, ver):
    global err
    if not isinstance(node, dict):
        return
    schema = None
    try:
        with path.open() as schema:
            variant = handle_oneof(node, schema)
            if "ubports_installer-compatibility" in variant:
                variant_req = variant["ubports_installer-compatibility"]
                req = semantic_version.NpmSpec(variant_req.split("-")[0])
                for clause in req.clause:
                    clause.prerelease_policy = 'always'
                if ver not in req:
                    print(schema["title"], "requires installer version", variant_req, "- not compatible with", ver)
                    err = True
                return
    except:
        # not everything has a schema, no need to continue or error out
        return
    for (key, child) in node.items():
        new_path = path / "properties" / key
        if isinstance(child, dict):
            check_nested_semver(child, new_path, ver)
        elif isinstance(child, list):
            for item in child:
                check_nested_semver(item, new_path / "items", ver)
            

user_actions = set(obj["user_actions"].keys())
unlock_actions = set(obj["unlock"])
prerequisite_actions = set(jq.compile(
    ".operating_systems[].prerequisites[]").input_value(obj).all())
core_user_actions = set(jq.compile(
    '.. | objects | ."core:user_action".["action"]? | select(. != null)'
).input_value(obj).all())

leftover_actions = user_actions - unlock_actions - prerequisite_actions - core_user_actions

err = False
if not unlock_actions <= user_actions:
    print("unknown unlock_actions:", unlock_actions - user_actions)
    err = True
if not prerequisite_actions <= user_actions:
    print("unknown prerequisite_actions:", prerequisite_actions - user_actions)
    err = True
if not core_user_actions <= user_actions:
    print("unknown core:user_actions:", core_user_actions - user_actions)
    err = True
if len(leftover_actions) > 0:
    print("unused actions:", leftover_actions)
    err = True

for os in obj["operating_systems"]:
    ver = None
    try:
        ver = semantic_version.NpmSpec(os["compatible_installer"].split("-")[0])
        ver = next(iter(ver.clause)).target
    except:
        print("version spec invalid:", os["compatible_installer"])
        err = True

    check_nested_semver(os, path / "properties" / "operating_systems" / "items", ver)

if err:
    exit(1)
