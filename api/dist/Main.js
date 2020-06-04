"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const ContactController_1 = __importDefault(require("./controllers/ContactController"));
const ReviewController_1 = __importDefault(require("./controllers/ReviewController"));
const path_1 = __importDefault(require("path"));
require('dotenv').config();
require('pug');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://geoffmschaller:oz7@@@5t*1FMH*o3EPF4O$m73@crowley-5jvz8.mongodb.net/Crowley?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
const db = mongoose.connection;
db.on('errors', console.log.bind(console, 'connection errors:'));
const app = express_1.default();
app.set('view engine', 'pug');
app.set('views', path_1.default.join(__dirname, '/emails'));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'options') {
        res.header('Access-Control-Allow-Methods', 'POST');
        return res.status(200).json({});
    }
    next();
});
app.use('/contact', ContactController_1.default);
app.use('/review', ReviewController_1.default);
app.use('/', (req, res) => {
    res.render('outbound_contact.pug', { name: "Geoff Schaller", email: "geoff@geoff.com", message: "Test message" });
});
app.listen(5000);
