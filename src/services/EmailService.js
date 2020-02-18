'use strict';

const config = require('../config');
const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(config.sendgridKey);

exports.send = async (to, subject, body) => {
	sendgrid.send({
		to,
		from: 'oi@adoteumpet',
		subject,
		html: body
	});
};