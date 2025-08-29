const express = require('express');
const { createItem, getItems, updateQuantity } = require('../controllers/itemController');
const router = express.Router();


router.post('/', createItem);
router.get('/', getItems);
router.put('/:id/:qnt', updateQuantity);

module.exports = router;