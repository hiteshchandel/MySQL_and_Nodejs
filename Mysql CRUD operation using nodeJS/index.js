const studentRouter = require('./studentRouter.js');
const express = require('express');
const app = express();
app.use(express.json());

app.use('/students', studentRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
