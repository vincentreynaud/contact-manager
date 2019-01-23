const { cloneDeep } = require("lodash/lang");

exports.trimSchemaStrings = schema => {
  schema = cloneDeep(schema);

  for (let key in schema) {
    if (schema[key] === String || schema[key].type === String) {
      const stringOptions = { type: String, trim: true };
      if (typeof schema[key] === "object") {
        schema[key] = Object.assign(stringOptions, schema[key]);
      } else if (schema[key] === String) {
        schema[key] = stringOptions;
      }
    }
  }

  return schema;
};

exports.contactEntryTypeEnum = (types = []) => ({
  type: String,
  enum: [...types, "home", "work", "other", ""],
  default: ""
});
