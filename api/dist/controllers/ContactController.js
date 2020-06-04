"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Sanitizer_1 = __importDefault(require("../validators/Sanitizer"));
const TextValidator_1 = __importDefault(require("../validators/TextValidator"));
const EmailValidator_1 = __importDefault(require("../validators/EmailValidator"));
const APIResponse_1 = __importDefault(require("../responses/APIResponse"));
const mailer_1 = __importDefault(require("../mailer/mailer"));
const ContactModel_1 = __importDefault(require("../models/ContactModel"));
const ContactRouter = express_1.default.Router();
ContactRouter.post('/', async (req, res) => {
    // GET SUBMITTED DATA
    const submittedName = Sanitizer_1.default(req.body.name);
    const submittedEmail = Sanitizer_1.default(req.body.email);
    const submittedMessage = Sanitizer_1.default(req.body.message);
    // VALIDATE DATA
    if (!TextValidator_1.default(submittedName, 50))
        return APIResponse_1.default.error(res, "Valid name required. Max length 50.");
    if (!EmailValidator_1.default(submittedEmail))
        return APIResponse_1.default.error(res, "Valid email required.");
    if (!TextValidator_1.default(submittedMessage, 500))
        return APIResponse_1.default.error(res, "Valid message required. Max length 500");
    // SAVE TO DB
    new ContactModel_1.default({
        name: submittedName,
        email: submittedEmail,
        message: submittedMessage
    }).save();
    const ClientContactPayload = {
        from: { name: 'Crowley Construction', address: "mailer@crowleyconstructionid.com" },
        to: req.body.local ? "geoffmschaller@gmail.com" : submittedEmail,
        subject: "Message Recieved!",
        replyTo: "sean@crowleyconstructionid.com",
        template: {
            name: './emails/outbound_contact.pug',
            engine: 'pug',
            context: {
                name: submittedName,
                email: submittedEmail,
                message: submittedMessage,
                header: "We have recieved your message!"
            }
        }
    };
    const HouseContactPayload = {
        from: { name: 'Clementine', address: "mailer@crowleyconstructionid.com" },
        to: req.body.local ? "geoffmschaller@gmail.com" : "sean@crowleyconstructionid.com",
        subject: "New Message Recieved!",
        replyTo: submittedEmail,
        template: {
            name: './emails/inbound_contact.pug',
            engine: 'pug',
            context: {
                name: submittedName,
                email: submittedEmail,
                message: submittedMessage,
                header: "New message from website!"
            }
        }
    };
    // SEND CONTACT EMAILS
    mailer_1.default(ClientContactPayload);
    mailer_1.default(HouseContactPayload);
    return APIResponse_1.default.success(res, "Thank you! We have recieved your message!");
});
exports.default = ContactRouter;
