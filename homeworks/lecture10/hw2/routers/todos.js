const express = require("express");
const {
  getAnItem,
  createAnItem,
  updateAnItem,
  deleteAnItem,
} = require("../controllers/todo");

const router = express.Router();

router.get("/:id", getAnItem);

router.post("/", createAnItem);

router.put("/:id", updateAnItem);

router.delete("/:id", deleteAnItem);

module.exports = router;
