const express = require('express');
const app = express();
const {sequelize }= require('./models/associations');

app.use(express.json());

app.use('/api', require('./routes/studentCourseRoutes'));

sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database synchronized');
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Error synchronizing database:', error);
    });
