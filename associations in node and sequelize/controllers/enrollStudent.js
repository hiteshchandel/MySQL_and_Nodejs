const { Student, Course } = require("../models/associations");

// Add a new student
const addStudent = async (req, res) => {
  try {
    const { name } = req.body;
    const student = await Student.create({ name });
    res.status(201).json({ message: "Student created", student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new course
const addCourse = async (req, res) => {
  try {
    const { title } = req.body;
    const course = await Course.create({ title });
    res.status(201).json({ message: "Course created", course });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Enroll a student in a course
const enrollCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    const student = await Student.findByPk(studentId);
    const course = await Course.findByPk(courseId);

    if (!student || !course) {
      return res.status(404).json({ message: "Student or Course not found" });
    }

    await student.addCourse(course, { through: { enrollmentDate: new Date() } });

    res.json({ message: `${student.name} enrolled in ${course.title}` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all students with courses
const getStudentsWithCourses = async (req, res) => {
  try {
    const students = await Student.findAll({
      include: { model: Course, through: { attributes: ["enrollmentDate"] } },
    });
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addStudent, addCourse, enrollCourse, getStudentsWithCourses };
