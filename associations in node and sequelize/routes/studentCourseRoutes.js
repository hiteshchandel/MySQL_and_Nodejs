const express = require("express");
const {
  addStudent,
  addCourse,
  enrollCourse,
  getStudentsWithCourses,
} = require("../controllers/enrollStudent");

const router = express.Router();

router.post("/students", addStudent);
router.post("/courses", addCourse);
router.post("/enroll", enrollCourse);
router.get("/students", getStudentsWithCourses);

module.exports = router;
