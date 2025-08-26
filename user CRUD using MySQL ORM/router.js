const express = require('express');
const { createUser, getAllUsers, getUserById, updateUser } = require('./controller');
const router = express.Router();


router.post('/user', createUser);
router.get('/user/all', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);

module.exports = router;