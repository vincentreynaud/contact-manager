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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", indexRouter);
app.use("/contacts", contactRouter);

// add err handling & not found

module.exports = app;
