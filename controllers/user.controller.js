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
        const user = {
            email: req.body.email,
            password: req.body.password,
            username: req.body.username,
            name: req.body.name,
            birth_date: req.body.birth_date,
            gender: req.body.gender,
            country: req.body.country
        };
        User.create(user, (err, data)=>{
            if (err) {
                res.json({
                    success: false,
                    message: 'User not Registred'
                })
            } else {
                res.json(user);
            }
        });
    }
}

module.exports = userController;