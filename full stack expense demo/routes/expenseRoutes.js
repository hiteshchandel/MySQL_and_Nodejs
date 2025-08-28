const express = require('express');
const router = express.Router();
const {
  createExpense, getExpenses, deleteExpense, updateExpense
} = require('../controllers/expenseController');

router.get('/expenses', getExpenses);       // List all
router.post('/expenses', createExpense);    // Create
router.delete('/expenses/:id', deleteExpense); // Delete
router.put('/expenses/:id', updateExpense);    // Edit

module.exports = router;
