const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    { 
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        birth_date: {
            type: Date
        },
        gender: {
            type: String,
            required: true
        },
        country: {
            type: String
        },
        created: { 
            type: Date, 
            default: Date.now 
        }
    }
);
const User = mongoose.model('User', schema);

module.exports = User;