const mongoose = require("mongoose");
const faker = require("faker");

const Contact = require("../models/Contact");
const { CONTACT_ENTRY_TYPE } = require("../lib/constants");
faker.locale = "de";

async function seedContact() {
  mongoose.connect(
    "mongodb://localhost:27017/contact-manager",
    { useNewUrlParser: true }
  );
  // eslint-disable-next-line no-console
  mongoose.connection.on("error", console.error);

  await Contact.deleteMany({});

  const contactPromises = Array(30)
    .fill(null)
    .map(() => {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();

      const contact = new Contact({
        contact: {
          first_name: firstName,
          last_name: lastName
        },
        phones: [
          {
            type: "mobile",
            number: faker.phone.phoneNumberFormat(2)
          }
        ],
        emails: [
          {
            type: faker.random.arrayElement(CONTACT_ENTRY_TYPE),
            address: faker.internet.email(firstName, lastName).toLowerCase()
            // .toLowerCase as quick workaround as owercase: true in Schema only works with String types, not custom ones
          }
        ]
      });

      return contact.save();
    });

  await Promise.all(contactPromises);
  // eslint-disable-next-line no-console
  console.log("contacts seeded!");

  mongoose.connection.close();
}

seedContact();
