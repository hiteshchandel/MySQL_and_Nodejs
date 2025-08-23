const express = require('express');
const { createStudent, getStudentById, getAllStudents, updateStudent, deleteStudent } = require('./studentController');
const router = express.Router();

router.post('/', createStudent);
router.get('/all', getAllStudents);
router.get('/:id', getStudentById);

router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;