const Expense = require('../models/Expense');

// (Pure-ish) validator – easy to test
function validateExpensePayload({ amount, description, category }) {
  const errors = [];
  if (amount == null || Number.isNaN(Number(amount)) || Number(amount) < 0) {
    errors.push('amount must be a non-negative number');
  }
  if (!description || typeof description !== 'string') {
    errors.push('description is required');
  }
  if (category && typeof category !== 'string') {
    errors.push('category must be a string');
  }
  return errors;
}

// CREATE
exports.createExpense = async (req, res) => {
  try {
    const errors = validateExpensePayload(req.body);
    if (errors.length) return res.status(400).json({ errors });

    const { amount, description, category } = req.body;
    const expense = await Expense.create({ amount, description, category });
    res.status(201).json(expense);
  } catch (err) {
    console.error('createExpense error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// READ (list all)
exports.getExpenses = async (_req, res) => {
  try {
    const expenses = await Expense.findAll({ order: [['created_at', 'DESC']] });
    res.json(expenses);
  } catch (err) {
    console.error('getExpenses error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// DELETE
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const rows = await Expense.destroy({ where: { id } });
    if (!rows) return res.status(404).json({ error: 'Expense not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error('deleteExpense error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// UPDATE (Bonus – edit)
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const errors = validateExpensePayload({ 
      amount: req.body.amount ?? 0, 
      description: req.body.description ?? '' ,
      category: req.body.category
    }).filter(e => !e.includes('required')); // allow partial? Or enforce full?

    // If you want to allow partial updates, skip payload validation above.

    const [rows] = await Expense.update(req.body, { where: { id } });
    if (!rows) return res.status(404).json({ error: 'Expense not found' });

    const updated = await Expense.findByPk(id);
    res.json(updated);
  } catch (err) {
    console.error('updateExpense error', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
