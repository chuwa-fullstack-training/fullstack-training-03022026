const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: String,
    lastName: String,
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number,
    // can be empty
    // _ for reference field
    _manager: { type: Schema.Types.ObjectId, ref: 'Employee', default: null }
});

// turn schema into model, for interacting with MongoDB
module.exports = mongoose.model('Employee', employeeSchema);