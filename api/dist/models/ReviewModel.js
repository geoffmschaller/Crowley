"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = ReviewModel;
