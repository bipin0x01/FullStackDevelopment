//jshint esversion:6

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/about', (response, request) => {
    response.send('this is about us.')
});

app.listen(port, () => {
    console.log(`Exam app listening on port ${port}`)
});