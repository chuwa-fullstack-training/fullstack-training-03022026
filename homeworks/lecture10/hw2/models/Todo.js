const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  todo: { type: String, required: true },
  done: { type: Boolean, default: false },
  deadline: Date,
  createdAt: { type: Date, default: Date.now },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
