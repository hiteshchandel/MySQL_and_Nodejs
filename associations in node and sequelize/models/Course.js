const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Course = sequelize.define(
  "Course",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
  },
    {
        tableName: "courses",
        timestamps: true,
        underscored: true,
    }
);

module.exports = Course;
