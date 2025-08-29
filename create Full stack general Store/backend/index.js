const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./db');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/items', itemRoutes);

sequelize.sync()
    .then(() => {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
    })
    .catch((error) => {
    console.error('Unable to connect to the database:', error);
    });