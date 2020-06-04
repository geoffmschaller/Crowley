const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
	name: String,
	rating: String,
	message: String,
	date: {
		type: Date,
		default: Date.now
	}
});

const ReviewModel = mongoose.model('Review', ReviewSchema);

export default ReviewModel;
