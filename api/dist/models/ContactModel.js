"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: {
        type: Date,
        default: Date.now
    }
});
const ContactModel = mongoose.model('Contact', ContactSchema);
exports.default = ContactModel;
