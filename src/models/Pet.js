'use strict';

const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: [ true, 'Name is required' ]
	},
	breed: {
		type: String,
		required: [ true, 'Breed is required' ]
	},
	email: {
		type: String,
		required: true,
		trim: true
	},
	tags: [{
		type: String,
		required: false
	}],
	createdAt: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Pet', PetSchema);