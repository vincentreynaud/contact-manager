const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const contactRouter = require("./routes/contact");

const app = express();

mongoose.connect(
  "mongodb://localhost:27017/contact-manager",
  { useNewUrlParser: true }
);
// eslint-disable-next-line no-console
mongoose.connection.on("error", console.error);

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/contacts", contactRouter);

module.exports = app;
