'use strict';

const repository = require('../repositories/PetRepository');
const emailService = require('../services/EmailService');

exports.get = async (req, res, next) => {
	try {
		const data = await repository.get();
		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(requestError(error));
	}
};

exports.getById = async (req, res, next) => {
	try {
		const id = req.params.id;
		const data = await repository.getById(id);
		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(requestError(error));
	}	
};

exports.getByBreed = async (req, res, next) => {
	try {
		const breed = req.params.breed;
		const data = await repository.getByBreed(breed);
		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(requestError(error));
	}
};

exports.getByTag = async (req, res, next) => {
	try {
		const tags = req.params.tag;
		const data = await repository.getByTag(tags);
		res.status(200).send(data);
	} catch (error) {
		res.status(500).send(requestError(error));
	}
};

exports.post = async (req, res, next) => {
	try {
		await repository.create(req.body);

		emailService.send(
			req.body.email, 
			'Adote um pet!',
			global.EMAIL_TMPL.replace('{0}', req.body.name)
		);

		res.status(201).send({
			message: 'Pet created',
			item: req.body
		});
	} catch (error) {
		res.status(500).send(requestError(error));
	}
};

exports.put = async (req, res, next) => {
	try {
		const id = req.params.id;
		await repository.update(id, req.body);
		res.status(200).send({
			message: 'Pet updated',
		});
	} catch (error) {
		res.status(500).send(requestError(error));
	}
};

exports.delete = async (req, res, next) => {
	try {
		const id = req.params.id;
		await repository.delete(id);
		res.status(200).send({
			message: 'Pet deleted',
		});
	} catch (error) {
		res.status(400).send(requestError(error));
	}	
};

const requestError = error => {
	return {
		message: 'Error making request',
		error
	};
};