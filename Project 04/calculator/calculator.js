// jshint esversion:6

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("This is homepage.")
});

app.listen(port, () => {
    console.log(`${port} is running`)
});

