const express = require('express');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const contactRouter = require('./routes/contact');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/', indexRouter);
app.use('/contact', contactRouter);

module.exports = app;
