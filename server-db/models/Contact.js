const mongoose = require("mongoose");
const { Schema } = mongoose;

const { trimSchemaStrings, contactEntryTypeEnum } = require("../lib/helpers");

const NameSchema = new Schema(
  trimSchemaStrings({
    first_name: {
      type: String,
      required: true
    },
    last_name: String
  }),
  { _id: false }
);

const PhoneSchema = new Schema(
  trimSchemaStrings({
    type: contactEntryTypeEnum(["mobile", "main"]),
    country_code: Number,
    number: String
  }),
  { _id: false }
);

const EmailSchema = new Schema(
  trimSchemaStrings({
    type: contactEntryTypeEnum(),
    address: String
  }),
  { _id: false }
);

const AddressSchema = new Schema(
  trimSchemaStrings({
    type: contactEntryTypeEnum(),
    street_one: String,
    street_two: String,
    zip: Number,
    city: String,
    country: String
  }),
  { _id: false }
);

const UrlSchema = new Schema(
  trimSchemaStrings({
    type: contactEntryTypeEnum(["website"]),
    url: String
  }),
  { _id: false }
);

const ContactSchema = new Schema(
  trimSchemaStrings({
    contact: {
      type: NameSchema,
      required: true
    },
    company: String,
    phones: [PhoneSchema],
    emails: [EmailSchema],
    addresses: [AddressSchema],
    url: [UrlSchema]
  })
);

module.exports = mongoose.model("Contact", ContactSchema);

/*
// first approach
const trimmedString = options => ({
  type: String,
  trim: true,
  ...options
});
*/
