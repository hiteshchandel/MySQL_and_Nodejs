const sequelize = require("../db");
const Student = require("./Student");
const Course = require("./Course");
const StudentCourse = require("./StudentCourse");

// Many-to-Many Association
Student.belongsToMany(Course, {
  through: StudentCourse,
  foreignKey: "student_id",
});
Course.belongsToMany(Student, {
  through: StudentCourse,
  foreignKey: "course_id",
});

module.exports = { sequelize, Student, Course, StudentCourse };
