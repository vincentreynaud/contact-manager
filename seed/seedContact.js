const mongoose = require("mongoose");

const Contact = require("../models/Contact");

async function testContact() {
  mongoose.connect(
    "mongodb://localhost:27017/contact-manager",
    { useNewUrlParser: true }
  );
  // eslint-disable-next-line no-console
  mongoose.connection.on("error", console.error);

  const contact = new Contact({
    contact: {
      first_name: "Vincent",
      last_name: "Reynaud"
    },
    phones: [{ type: "home", number: 49034920210 }]
  });

  await contact.save();
  mongoose.connection.close();
}

testContact();
