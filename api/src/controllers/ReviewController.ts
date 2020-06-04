import express, {Response, Request} from 'express';
import Sanitizer from "../validators/Sanitizer";
import TextValidator from "../validators/TextValidator";
import APIResponse from "../responses/APIResponse";
import MailerDataInterface from "../interfaces/MailerDataInterface";
import SendEmail from "../mailer/mailer";
import ReviewModel from "../models/ReviewModel";

const ReviewController = express.Router();

ReviewController.post('/', (req: Request, res: Response) => {

	// GET SUBMITTED DATA
	const submittedName: string = Sanitizer(req.body.name);
	const submittedRating: string = Sanitizer(req.body.rating);
	const submittedMessage: string = Sanitizer(req.body.message);

	// VALIDATE DATA
	if (!TextValidator(submittedName, 50)) return APIResponse.error(res, "Valid name required. Max length 50.");
	if (!TextValidator(submittedRating, 50)) return APIResponse.error(res, "Valid rating required");
	if (!TextValidator(submittedMessage, 500)) return APIResponse.error(res, "Valid message required. Max length 500");

	// SAVE TO DB
	try {
		new ReviewModel({
			name: submittedName,
			rating: submittedRating,
			message: submittedMessage
		}).save();
	} catch (e) {
		return APIResponse.error(res, e.message);
	}


	const HouseReviewPayload: MailerDataInterface = {
		from: {name: 'Clementine', address: "mailer@crowleyconstructionid.com"},
		to: req.body.local ? "geoffmschaller@gmail.com" : "sean@crowleyconstructionid.com",
		subject: "New Review Recieved!",
		replyTo: "mailer@crowleyconstructionid.com",
		template: {
			name: './emails/inbound_rating.pug',
			engine: 'pug',
			context: {
				name: submittedName,
				rating: submittedRating,
				message: submittedMessage,
				header: "New review from website!"
			}
		}
	}

	SendEmail(HouseReviewPayload);

	return res.json({status: 200});

});

export default ReviewController;
