const express = require('express');
const sequelize = require('./db');
const Student = require('./models/Student');

const app = express();
app.use(express.json());

// Sync database (create table if not exists)
sequelize.sync()
    .then(() => console.log('✅ Student table created (if not already).'))
    .catch(err => console.error('❌ Error creating table:', err));

// Sample route
app.post('/students', async (req, res) => {
    try {
        const { name, age, email } = req.body;
        const student = await Student.create({ name, age, email });
        res.status(201).json(student);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
