const mysql = require('mysql2');
const express = require('express');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@khatik360',
    database: 'studentdb'
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');

    const createQuery = `create table students (
        id int auto_increment primary key,
        name varchar(100) not null,
        age int not null,
        email varchar(100) not null
    )`

    connection.execute(createQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err);
            return;
        }
        console.log('Table created successfully');
    });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});