/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/home', (req, res) => {
  const name = req.query.name || '';
  const age = req.query.age || '';

  res.render('home', { name, age });
});

app.post('/create-post', (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  res.redirect(`/home?name=${name}&age=${age}`);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
