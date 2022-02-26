const host = '127.0.0.1';
const path = require('path');

// Express
const express = require('express');
const app = express();

const port = process.env.PORT || 80;
// Static
app.use(express.static(path.join(__dirname, "../static")));



// Template engine;

const hbs = require('hbs');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../template/views'));
hbs.registerPartials(path.join(__dirname, '../template/partials'));


app.get('/', (req, res) => {
    res.render('index');
});
app.get('/faq', (req, res) => {
    res.render('faq');
});
app.get('/login', (req, res) => {
    res.render('login');
});




// 404 Page
app.get('*', (req, res) => {
    res.write('<h1>Its 404 Baby....!!</h1>');
});

// server
app.listen(port, () => {
    console.log(`http://${host}:${port}/`);
});