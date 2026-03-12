/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */
const fs = require('fs');
const path = require('path');
const express = require("express");
const app = express();

const hw1Router = express.Router();
const hw2Router = express.Router();

app.use("/hw1", hw1Router);
app.use("/api", hw2Router);

// hw1
hw1Router.get("/:dir/:ext?", getFiles);

function getFiles(req, res) {
  const dir = req.params.dir;
  const ext = req.params.ext;
  fs.readdir(dir, (err, files) => {
    if (err) return res.status(500).json({ error: err.message });

    const extensionMap = new Map();
    files.forEach((file) => {
      const fileExt = path.extname(file);
      if (!extensionMap.has(fileExt)) {
        extensionMap.set(fileExt, []);
      }
      extensionMap.get(fileExt).push(file);
    });

    if (ext === undefined) {
      res.json(files);
    } else if (!extensionMap.has(`.${ext}`)) {
      res.json([]);
    } else {
      res.json(extensionMap.get(`.${ext}`));
    }
  });
}

// hw2
hw2Router.get("/parsetime", parseTimeController);
hw2Router.get("/unixtime", unixtimeController);

function parseTimeController(req, res) {
  const date = new Date(req.query.iso);
  res.json({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  });
}
function unixtimeController(req, res) {
  const date = new Date(req.query.iso);

  res.json({
    unixtime: date.getTime(),
  });
}

app.listen(3000, () => {
  console.log("The app listening on port 3000!");
});
