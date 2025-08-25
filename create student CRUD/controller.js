const db = require('./db.js');

exports.createStudent = (req, res) => {
    const { name, age, email } = req.body;

    const checkQuery = "SELECT * FROM student WHERE email = ?";
    const insertQuery = "INSERT INTO student (name, age, email) VALUES (?, ?, ?)";

    // Check if email already exists
    db.execute(checkQuery, [email], (err, result) => {
        if (err) {
            console.error("Error checking student:", err);
            return res.status(500).json({ message: "Internal server error." });
        }

        if (result.length > 0) {
            return res.status(409).json({ message: "Student with this email already exists." });
        }

        // Insert new student
        db.execute(insertQuery, [name, age, email], (err, result) => {
            if (err) {
                console.error("Error creating student:", err);
                return res.status(500).json({ message: "Internal server error." });
            }

            res.status(201).json({
                message: "Student created successfully.",
                studentId: result.insertId
            });
        });
    });
};

exports.getAllStudents = (req, res) => {
    const query = "SELECT * FROM student";
    db.execute(query, (err, results) => {
        if (err) {
            console.error("Error fetching students:", err);
            return res.status(500).json({ message: "Internal server error." });
        }
        res.status(200).json(results);
    });
}

exports.getStudentById = (req, res) => {
    const query = "select * from student where id  = ?";
    db.execute(query, [req.params.id], (err, result) => {
        if(err){
            console.error("Error fetching student:", err);
            return res.status(500).json({ message: "Internal server error." });
        }
        res.status(200).json(result);
    })
}

exports.updateStudentById = (req, res) => {
    const query = "update student set name = ?, age = ?, email = ? where id = ?";
    const { name, age, email } = req.body;
    db.execute(query, [name, age, email, req.params.id], (err, result) => {
        if(err){
            console.error("Error updating student:", err);
            return res.status(500).json({ message: "Internal server error." });
        }
        res.status(200).json({ message: "Student updated successfully." });
    })
}

exports.deleteStudentById = (req, res) => {
    const query = "delete from student where id = ?";
    db.execute(query, [req.params.id], (err, result) => {
        if(err){
            console.error("Error deleting student:", err);
            return res.status(500).json({ message: "Internal server error." });
        }
        res.status(200).json({ message: "Student deleted successfully." });
    })
}