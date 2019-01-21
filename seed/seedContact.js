const mongoose = require("mongoose");
const faker = require("faker");
faker.locale = "de";

const Contact = require("../models/Contact");

async function seedContact() {
  mongoose.connect(
    "mongodb://localhost:27017/contact-manager",
    { useNewUrlParser: true }
  );
  mongoose.connection.on("error", console.error);

  await Contact.remove({});
  console.log("contacts purged!");

  const contactPromises = Array(15)
    .fill(null)
    .map(() => {
      const contact = new Contact({
        contact: {
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName()
        },
        phones: [
          {
            type: "mobile",
            country_code: null,
            number: faker.phone.phoneNumberFormat(2)
          }
        ],
        emails: [
          {
            type: "home",
            address: faker.internet.email()
          }
        ],
        addresses: [
          {
            type: "null",
            street_one: null,
            street_two: null,
            zip: null,
            city: null,
            country: null
          }
        ],
        url: [
          {
            type: "null",
            url: null
          }
        ],
        social_profile: [
          {
            type: "null",
            url: null
          }
        ]
      });

      return contact.save();
    });

  await Promise.all(contactPromises);
  console.log("contacts seeded!");

  mongoose.connection.close();
}

seedContact();
