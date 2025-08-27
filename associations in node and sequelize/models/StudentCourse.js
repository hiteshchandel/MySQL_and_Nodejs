const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const StudentCourse = sequelize.define(
  "StudentCourse",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    enrollmentDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "enrollment_date",
    },
  },
  {
    tableName: "student_courses",
    timestamps: false,
  }
);

module.exports = StudentCourse;
