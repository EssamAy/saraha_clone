const User = require('../models/user');

const userController = {
    getAllUsers: function(req, res) {
        User.find(function(err, users) {
            if(err) {
                res.json({
                    success: false,
                    message: err
                });
            } else {
                res.json(users);
            }
        });
    },
    getUserById: function(req, res) {
        res.json({
            id: req.params._id
        })
    },
    addUser: function(req, res) {
        res.json({
            message: 'User Added'
        })
    }
}

module.exports = userController;