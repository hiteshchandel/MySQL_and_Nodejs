const express = require('express');
const { createUser, getAllUsers, getUserById } = require('./controller');
const router = express.Router();


router.post('/user', createUser);
router.get('/user/all', getAllUsers);
router.get('/user/:id', getUserById);

module.exports = router;