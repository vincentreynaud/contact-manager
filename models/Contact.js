const mongoose = require("mongoose");
const { Schema } = mongoose;

const trimmedString = options => ({
  type: String,
  trim: true,
  ...options
});

const contactEntryTypeEnum = (types = []) => ({
  type: String,
  enum: [...types, "home", "work", "other", "null"],
  default: "null"
});

const NameSchema = new Schema(
  {
    first_name: trimmedString({ required: true }),
    last_name: trimmedString()
  },
  { _id: false }
);

const PhoneSchema = new Schema(
  {
    type: contactEntryTypeEnum(["mobile", "main"]),
    country_code: Number,
    number: trimmedString()
  },
  { _id: false }
);

const EmailSchema = new Schema(
  {
    type: contactEntryTypeEnum(),
    address: trimmedString()
  },
  { _id: false }
);

const AddressSchema = new Schema(
  {
    type: contactEntryTypeEnum(),
    street_one: trimmedString(),
    street_two: trimmedString(),
    zip: Number,
    city: trimmedString(),
    country: trimmedString()
  },
  { _id: false }
);

const UrlSchema = new Schema(
  {
    type: contactEntryTypeEnum(["website"]),
    url: trimmedString()
  },
  { _id: false }
);

const ContactSchema = new Schema({
  contact: {
    type: NameSchema,
    required: true
  },
  company: trimmedString(),
  phones: [PhoneSchema],
  emails: [EmailSchema],
  addresses: [AddressSchema],
  url: [UrlSchema]
});

module.exports = mongoose.model("Contact", ContactSchema);
