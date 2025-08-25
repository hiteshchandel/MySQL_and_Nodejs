const express = require('express');
const { createStudent, getAllStudents, getStudentById, updateStudentById, deleteStudentById } = require('./controller');
const router = express.Router();


router.post('/', createStudent);
router.get('/all', getAllStudents);
router.get('/:id', getStudentById);
router.put('/:id', updateStudentById);
router.delete('/:id', deleteStudentById);

module.exports = router;

