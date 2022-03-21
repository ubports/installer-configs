"use strict";
const semver = require("semver");
module.exports = function (ajv) {
  // ensure a user_action string is a valid reference
  ajv.addKeyword({
    keyword: "ubports_user-action",
    type: "string",
    compile:
      () =>
      (action, { rootData }) =>
        rootData.user_actions[action],
    error: {
      message: "undefined user_action"
    }
  });

  // ensure a user_action is not already specified in the devices unlock block
  ajv.addKeyword({
    keyword: "ubports_not-in-unlock",
    type: "string",
    compile:
      () =>
      (action, { rootData }) =>
        !(rootData?.unlock?.indexOf(action) !== -1),
    error: {
      message:
        "unlock and operating_systems.prerequisites should be mutually exclusive"
    }
  });

  // ensure a user_action is used somewhere
  ajv.addKeyword({
    keyword: "ubports_no-unused-user_actions",
    type: "object",
    compile:
      () =>
      (_, { rootData, parentDataProperty: action }) =>
        rootData?.unlock?.indexOf(action) !== -1 ||
        rootData?.operating_systems?.reduce(
          (prev, { prerequisites, steps }) =>
            prev ||
            prerequisites?.indexOf(action) !== -1 ||
            steps
              .map(({ actions, fallback }) => [
                ...(actions || []),
                ...(fallback || [])
              ])
              .flat()
              .filter(a => {
                if (a["core:group"])
                  throw new Error(
                    "core:group desctructuring not yet implemented"
                  );
                else return a["core:user_action"]?.action === action;
              }).length,
          false
        ),
    error: {
      message: "no unused user_actions"
    }
  });

  // ensure a semver string is a valid reference
  ajv.addKeyword({
    keyword: "ubports_semver",
    type: "string",
    compile: () => data => semver.validRange(data, { loose: true }),
    error: {
      message: "invalid semver range"
    }
  });

  // ensure the compatible_installer specified for the operating_system satisfies every action
  ajv.addKeyword({
    keyword: "ubports_installer-compatibility",
    compile:
      required_by_action =>
      (_, { rootData, instancePath }) =>
        !instancePath.startsWith("/operating_systems/") ||
        semver.subset(
          // semver range specified in the installer configs for this os
          rootData.operating_systems[
            instancePath.split("/operating_systems/")[1].split("/")[0]
          ].compatible_installer,
          // minimum required version specifyed in the schema for this action
          required_by_action,
          { loose: true, includePrerelease: true }
        ),
    error: {
      message: ({ schema }) => `requires compatible_installer ${schema}`
    },
    metaSchema: {
      type: "string",
      ubports_semver: null
    }
  });
};
