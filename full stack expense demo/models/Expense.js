const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Expense = sequelize.define('Expense', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  amount: { type: DataTypes.DECIMAL(10,2), allowNull: false, validate: { min: 0 } },
  description: { type: DataTypes.STRING(255), allowNull: false },
  category: { type: DataTypes.STRING(50), allowNull: true },
}, {
  tableName: 'expenses',
  timestamps: true,             // adds createdAt, updatedAt
  underscored: true             // created_at, updated_at (optional)
});

module.exports = Expense;
