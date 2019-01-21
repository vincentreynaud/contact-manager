const express = require("express");
const router = express.Router();

const {
  listContacts,
  addContact,
  getContact,
  updateContact,
  deleteContact
} = require("../controlers/contactController");

router
  .route("/")
  .get(listContacts)
  .post(addContact);

router
  .route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
