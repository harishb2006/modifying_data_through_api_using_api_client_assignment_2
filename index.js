const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;
require('dotenv').config();
app.use(express.static('static'));

app.use(express.json());

const connectDB = require('./database');
connectDB();

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use('/menu', require('./routes.js'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
