// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser);
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.js');
});

app.listen(port, () => {
    console.log(`${port} is running`)
});

