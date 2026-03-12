const express = require("express");
const path = require("path");

const Todo = require("./models/todo");
const todoRouter = require("./routers/todos");
const connectDB = require("./db");
const app = express();

connectDB();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/api/todo", todoRouter);

app.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.render("index", { todos });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
