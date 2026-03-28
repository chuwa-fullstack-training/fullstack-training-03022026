const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: String,
    done: { type: Boolean, default: false }
});

module.exports = mongoose.model('Todo', todoSchema);