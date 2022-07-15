//jshint esversion:6

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/about', (req, res) => {
    res.send('this is about us.')
});

app.get('/contact', (req, res) => {
    res.send('<h1>This is contact page.</h1>')
})

app.listen(port, () => {
    console.log(`Exam app listening on port ${port}`)
});