const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ReviewSchema = new Schema({
	id: ObjectId,
	name: String,
	rating: String,
	message: String,
	Date: {
		type: Date,
		default: new Date()
	}
});

const ReviewModel = mongoose.model('Ratings', ReviewSchema);

module.exports = ReviewModel;