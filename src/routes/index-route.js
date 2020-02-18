'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/PetController');

router.get('/pets', controller.get);

module.exports = router;