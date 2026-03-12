/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("this is the home page");
});
app;
app.get("/about", (req, res) => {
  res.send("this is the home page");
});
app.get("/home.html", (req, res) => {
  const title = req.query.title;
  const content = req.query.content;
  res.render("home", { title, content });
});

app.post("/create-post", (req, res) => {
  const { title, content } = req.body;
  res.redirect(`/home.html?title=${title}&content=${content}`);
});

app.listen(3000, () => {
  console.log("The app listening on port 3000!");
});
