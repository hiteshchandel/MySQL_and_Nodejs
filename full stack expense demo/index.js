const express = require('express');
const cors = require('cors');
const sequelize = require('./db');

require('./models/Expense'); // ensure model is registered

const expenseRoutes = require('./routes/expenseRoutes');

const app = express();
app.use(cors());
app.use(express.json());
// serve the tiny frontend

app.use('/api', expenseRoutes);

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
