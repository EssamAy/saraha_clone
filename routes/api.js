const express = require('express');
const router = require('express').Router();
const userController = require('../controllers/user.controller');
const messageController = require('../controllers/message.controller');

router.get('/users', userController.getAllUsers);
router.get('/users/:_id', userController.getUserById);
router.post('/users', userController.addUser);


router.get('/messages', messageController.getAllMessages);
router.get('/messages/:_userid', messageController.getMessagesByUserId);
router.post('/messages', messageController.addMessage);

module.exports = router;