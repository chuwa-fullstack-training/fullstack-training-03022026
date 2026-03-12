const Todo = require("../models/Todo");

// get an item
const getAnItem = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params?.id);
    res.status(200).json(todo);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// create an item
const createAnItem = async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json({ message: "Todo created" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// delete an item
const deleteAnItem = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// update status
const updateAnItem = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ message: "Todo updated" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAnItem,
  createAnItem,
  updateAnItem,
  deleteAnItem,
};
