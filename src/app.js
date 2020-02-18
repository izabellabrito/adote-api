'use strict';

const express = require('express');
const app = express();
app.use(express.json());

const mongoose = require('mongoose');
const config = require('./config');
mongoose.connect(
	config.connectionString,
	{ useNewUrlParser: true, useUnifiedTopology: true }
);

const Pet = require('./models/Pet');

const index = require('./routes/index-route');
const pets = require('./routes/pet-route');

app.use('/api', index);
app.use('/api', pets);
 
module.exports = app;