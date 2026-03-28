const express = require('express');
const mongoose = require('mongoose');
const Todo = require('../models/Todo');
const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

// const todos = [
//   { id: 1, todo: 'first thing', done: true },
//   { id: 2, todo: 'second thing', done: false },
//   { id: 3, todo: 'third thing', done: false }
// ];

// Use the real connection string for executing
mongoose.connect('mongodb+srv://********/?appName=Cluster0')
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.log('MongoDB connection error:', error);
  });

app.get('/', async (req, res) => {
  //res.render('index', { todos });
  try {
    const todos = await Todo.find();
    const formattedTodos = todos.map(t => ({
      id: t._id.toString(),
      todo: t.todo,
      done: t.done
    }));

    res.render('index', { todos: formattedTodos });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    const formattedTodos = todos.map(t => ({
      id: t._id.toString(),
      todo: t.todo,
      done: t.done
    }));

    res.json(formattedTodos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/todos', async (req, res) => {
  // const todo = req.body.todo;
  // todos.push({ id: todos.length + 1, todo, done: false });
  // res.json(todos);
  try {
    const todo = new Todo({
      todo: req.body.todo,
      done: false
    });

    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/todos/:id', async (req, res) => {
  // const id = parseInt(req.params.id, 10);
  // const todo = todos.find(t => t.id === id);
  // todo.done = !todo.done;
  // res.json(todo);
    try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }

    todo.done = !todo.done;
    await todo.save();

    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }

    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
