"use strict";
const semver = require("semver");
module.exports = function (ajv) {
  // ensure a user_action string is a valid reference
  ajv.addKeyword({
    keyword: "ubports_user-action",
    type: "string",
    compile() {
      return (action, { rootData, instancePath }) =>
        !!rootData.user_actions[action] ||
        ajv.logger.error(
          `undefined user_action at v2/devices/yggdrasil.yml${rootData.codename}.yml#${instancePath}`
        );
    }
  });

  // ensure a semver string is a valid reference
  ajv.addKeyword({
    keyword: "ubports_semver",
    type: "string",
    compile() {
      return data => semver.validRange(data, { loose: true });
    }
  });

  // ensure the compatible_installer specified for the operating_system satisfies every action
  ajv.addKeyword({
    keyword: "ubports_installer-compatibility",
    compile(required_by_action) {
      return (_, { rootData, instancePath }) =>
        !instancePath.startsWith("/operating_systems/") ||
        semver.subset(
          // semver range specified in the installer configs for this os
          rootData.operating_systems[
            instancePath.split("/operating_systems/")[1].split("/")[0]
          ].compatible_installer,
          // minimum required version specifyed in the schema for this action
          required_by_action,
          { loose: true, includePrerelease: true }
        );
    },
    metaSchema: {
      type: "string",
      ubports_semver: null
    }
  });
};
