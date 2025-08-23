const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());

//Mysql Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@khatik360',
    database:"bus_booking_db"
})

db.connect(err => {
    if (err) throw err;
    console.log('✅ MySQL Connected...');
});

// ------------------- USERS -------------------

// POST /users → Add new user
app.post("/users", (req, res) => {
    const { name, email, phone } = req.body;
    const sql = 'insert into users (name,email,phone) values (?,?,?)';
    db.execute(sql, [name, email, phone], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'User created', userId: result.insertId });
    })
})

app.get("/users", (req, res) => {
    const sql = 'select * from users';
    db.execute(sql, (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);
    })
})

// ------------------- BUSES -------------------

// POST /buses → Add new bus

app.post("/buses", (req, res) => {
    const { bus_name, total_seats, available_seats } = req.body;
    const sql = "insert into buses (bus_name, total_seats, available_seats) values (?,?,?)";
    db.execute(sql, [bus_name, total_seats, available_seats], (err, result) => {
        if (err) {
            console.error('Error inserting bus:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Bus created', busId: result.insertId });
    });
});

app.get('/buses/avilable/:seats', (req, res) => {
    const { seats } = req.params;
    const sql = "select * from buses where available_seats > ?";
    db.execute(sql, [seats], (err, results) => {
        if (err) {
            console.error('Error fetching buses:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);
    });
});

app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000")
})