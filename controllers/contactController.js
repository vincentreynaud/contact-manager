exports.listContacts = (req, res) => {
  res.send("list of all contacts");
};

exports.addContact = (req, res) => {
  res.send("contact added");
};

exports.getContact = (req, res) => {
  res.send("single contact");
};

exports.updateContact = (req, res) => {
  res.send("contact updated");
};

exports.deleteContact = (req, res) => {
  res.send("contact deleted");
};
