const mongoose = require('mongoose');
const schema = new mongoose.Schema(
    { 
        for: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            refs: 'User'
        },
        content: {
            type: String,
            required: true
        },
        created: { 
            type: Date, 
            default: Date.now 
        }
    }
);
const User = mongoose.model('Message', schema);

module.exports = User;