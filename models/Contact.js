const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema({
  contact: {
    first_name: {
      type: String,
      required: true
    },
    last_name: String,
    company: String
  },
  phones: [
    {
      type: {
        type: String,
        enum: ["home", "mobile", "work", "main", "other"]
      },
      country_code: String,
      number: String
    }
  ],
  emails: [
    {
      type: {
        type: String,
        enum: ["home", "work", "other"]
      },
      address: String
    }
  ],
  addresses: [
    {
      type: {
        type: String,
        enum: ["home", "work", "other"]
      },
      street_one: String,
      street_two: String,
      zip: Number,
      city: String,
      country: String
    }
  ],
  url: [
    {
      type: {
        type: String,
        enum: ["website", "home", "work", "other"]
      },
      url: String
    }
  ],
  social_profile: [
    {
      type: {
        type: String,
        enum: ["facebook", "twitter", "linkedin", "flickr", "other"]
      },
      link: String
    }
  ]
});

module.exports = mongoose.model("Contact", ContactSchema);
