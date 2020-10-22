const express = require('express');
const mailer = require('../mailer/mailer');
const sanitizer = require('../sanitizer/sanitizer');
const validator = require('../validators/reviewValidator');
const reviewModel = require('../models/reviewModel');

const router = express.Router();

router.post('/new', async (req, res) => {

	// VALIDATE INPUT
	const valid_result = await validator(req.body);
	if (valid_result !== 200) return res.json(valid_result);

	// SANITIZE INPUTS
	const cleanedInputs = {
		name: sanitizer(req.body.name),
		rating: sanitizer(req.body.rating),
		message: sanitizer(req.body.message)
	};

	// SEND TO DB
	await new reviewModel({...cleanedInputs}).save();

	// SEND EMAIL
	const HouseReviewPayload = {
		from: {name: 'Clementine', address: "mailer@crowleyconstructionid.com"},
		to: "sean@crowleyconstructionid.com",
		//to: "geoffmschaller@gmail.com",
		subject: "New Review Received!",
		replyTo: "mailer@crowleyconstructionid.com",
		template: {
			name: './mailer/views/inbound_rating.pug',
			engine: 'pug',
			context: {
				name: cleanedInputs.name,
				rating: cleanedInputs.rating,
				message: cleanedInputs.message,
				header: "New review from website!"
			}
		}
	}
	await mailer(HouseReviewPayload);

	return res.json({status: 200});

});

module.exports = router;