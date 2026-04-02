const mongoose = require('mongoose');

// ======= Company Schema =======
const companySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    headquarters: { type: String },
    industry: { type: String },
    employees: [{type: mongoose.Schema.Types.ObjectId, ref: 'employee'}]
});

module.exports = mongoose.model('company', companySchema);


