const express = require('express');
const app = express();
const sequelize = require('./db');
const userRoutes = require('./router');

app.use(express.json());

app.use('/api', userRoutes);

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database & tables created!');
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch((err) => {
        console.error('Unable to create tables, shutting down...', err);
        process.exit(1);
    })