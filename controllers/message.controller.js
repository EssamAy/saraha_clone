const Message = require('../models/message');

const messageController = {
    getAllMessages: function(req, res) {
        res.json({
            messages: 'messages'
        });
    },
    getMessagesByUserId: function(req, res) {
        res.json({
            id: req.params._userid,
            messages: 'messages'
        });
    },
    addMessage: function(req, res) {
        res.json({
            message: 'Message Added'
        })
    }
}

module.exports = messageController;