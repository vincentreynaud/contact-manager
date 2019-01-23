const Contact = require("../models/Contact");

exports.listContacts = async (req, res) => {
  res.json(await Contact.find());
};

exports.addContact = async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
};

exports.getContact = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  res.json(contact);
};

exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });
  res.json(contact);
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndDelete(id);
  res.json(contact);
};
