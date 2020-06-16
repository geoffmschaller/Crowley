"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Sanitizer_1 = __importDefault(require("../validators/Sanitizer"));
const TextValidator_1 = __importDefault(require("../validators/TextValidator"));
const APIResponse_1 = __importDefault(require("../responses/APIResponse"));
const mailer_1 = __importDefault(require("../mailer/mailer"));
const ReviewModel_1 = __importDefault(require("../models/ReviewModel"));
const ReviewController = express_1.default.Router();
ReviewController.post('/', (req, res) => {
    // GET SUBMITTED DATA
    const submittedName = Sanitizer_1.default(req.body.name);
    const submittedRating = Sanitizer_1.default(req.body.rating);
    const submittedMessage = Sanitizer_1.default(req.body.message);
    // VALIDATE DATA
    if (!TextValidator_1.default(submittedName, 50))
        return APIResponse_1.default.error(res, "Valid name required. Max length 50.");
    if (!TextValidator_1.default(submittedRating, 50))
        return APIResponse_1.default.error(res, "Valid rating required");
    if (!TextValidator_1.default(submittedMessage, 500))
        return APIResponse_1.default.error(res, "Valid message required. Max length 500");
    // SAVE TO DB
    try {
        new ReviewModel_1.default({
            name: submittedName,
            rating: submittedRating,
            message: submittedMessage
        }).save();
    }
    catch (e) {
        return APIResponse_1.default.error(res, e.message);
    }
    const HouseReviewPayload = {
        from: { name: 'Clementine', address: "mailer@crowleyconstructionid.com" },
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
    };
    mailer_1.default(HouseReviewPayload);
    return res.json({ status: 200 });
});
exports.default = ReviewController;
