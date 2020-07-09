import express, {Application, Response, Request, NextFunction} from 'express';
import bodyParser from "body-parser";
import ContactRouter from "./controllers/ContactController";
import ReviewController from "./controllers/ReviewController";
import path from "path";

require('dotenv').config();
require('pug');

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});
const db = mongoose.connection;
db.on('errors', console.log.bind(console, 'connection errors:'));

const app: Application = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/emails'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if (req.method === 'options') {
		res.header('Access-Control-Allow-Methods', 'POST');
		return res.status(200).json({});
	}
	next();
});

app.use('/contact', ContactRouter);
app.use('/review', ReviewController);

app.use('/', (req, res) => {
	res.render('outbound_contact.pug', {name: "Geoff Schaller", email: "geoff@geoff.com", message: "Test message"});
})

app.listen(5000);
