const db = require('./db.js');

const createStudent = async (req, res) => {
    try {
        const { name, email, mobile } = req.body;
        const query = 'INSERT INTO student (name, email, mobile) VALUES (?, ?, ?)';
        const [result] = await db.execute(query, [name, email, mobile]);

        res.status(201).json({
            id: result.insertId,
            name,
            email,
            mobile,
            message: 'Student created successfully'
        });
    } catch (error) {
        console.error('Error inserting student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const [results] = await db.execute('SELECT * FROM student');
        res.status(200).json(results);
    } catch (error) {
        console.error('Error fetching students:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getStudentById = async (req, res) => {
    try {
        const [result] = await db.execute('SELECT * FROM student WHERE id = ?', [req.params.id]);
        if (result.length === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(result[0]);
    } catch (error) {
        console.error('Error fetching student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { name, email, mobile } = req.body;
        const [result] = await db.execute(
            'UPDATE student SET name = ?, email = ?, mobile = ? WHERE id = ?',
            [name, email, mobile, req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json({
            id: req.params.id,
            name,
            email,
            mobile,
            message: 'Student updated successfully'
        });
    } catch (error) {
        console.error('Error updating student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const [result] = await db.execute('DELETE FROM student WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error('Error deleting student:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
