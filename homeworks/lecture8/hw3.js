/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); // 当已经有view/ejs了。
app.set('view', path.join(__dirname, 'views'));

app.use(espress.uselencoded({extended: true}));

// router part
app.get('/', (req, res) => {
    res.send('this is a home page');
});
app.get('/about', (req, res) => {
    res.send('this is the aboutpage');
});

app.get('/home', (req, res) => {
    const { title, content } = req.query; 
    res.render('home', { title, content });
});

app.post('/create-post', (req, res) => {
    const { title, content} = req.body;
    res.redirct(`/home?title=${title}&content=${content}`);
});

app.use((req, res) => {
    res.status(404).send('this is a 404 page');
});

app.listen(3000, ()=>{console.log('Server is running on port 3000')});