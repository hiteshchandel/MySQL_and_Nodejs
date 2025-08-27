const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Student = sequelize.define(
  "Student",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "students",
    timestamps: true,
    underscored: true,
  }
);

module.exports = Student;
