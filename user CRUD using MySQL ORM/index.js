const express = require('express');
const app = express();
const {sequelize }= require('./models/association');
const userRoutes = require('./Routes/user');
const busRoutes = require('./Routes/bus');
const bookingRoutes = require('./Routes/booking');

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', busRoutes);
app.use('/api', bookingRoutes);

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