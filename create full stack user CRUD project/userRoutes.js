const express = require('express');
const { createUser, getUsers, deleteUser, getEditUser, updateUser } = require('./userController');
const router = express.Router();


router.get('/', getUsers);
router.post('/add', createUser);
router.post('/delete/:id', deleteUser);
router.get('/edit/:id', getEditUser);
router.post('/update/:id', updateUser);

module.exports = router;