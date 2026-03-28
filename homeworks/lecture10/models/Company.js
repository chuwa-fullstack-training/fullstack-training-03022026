const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: String,
    description: String,
    headquarters: String,
    industry: String,
    // _employees stores references to employee document
    // using their ObjectId
    // _ for reference field
    _employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
});

// turn schema into model, for interacting with MongoDB
module.exports = mongoose.model('Company', companySchema);