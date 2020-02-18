'use strict';

const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');
const fields = 'name owner breed tags createdAt';

exports.get = async () => {
	const res = await Pet
		.find({}, fields);
	return res;
};

exports.getById = async id => {
	const res = await Pet
		.findById(id, fields);
	return res;
};

exports.getByBreed = async breed => {
	const res = await Pet
		.find({ breed }, fields);
	return res;
};

exports.getByTag = async tags => {
	const res = await Pet
		.find({ tags }, fields);
	return res;
};

exports.create = async data => {
	const pet = new Pet(data);
	await pet.save();
};

exports.update = async (id, data) => {
	await Pet
		.findByIdAndUpdate(id, data, { new: true, select: fields });
};

exports.delete = async id => {
	await Pet
		.findByIdAndDelete(id, { select: fields });
};