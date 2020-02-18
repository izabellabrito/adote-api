'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/PetController');

router.get('/pets', controller.get);
router.get('/pets/id/:id', controller.getById);
router.get('/pets/breed/:breed', controller.getByBreed);
router.get('/pets/tags/:tag', controller.getByTag);
router.post('/pets', controller.post);
router.put('/pets/:id', controller.put);
router.delete('/pets/:id', controller.delete);

module.exports = router;