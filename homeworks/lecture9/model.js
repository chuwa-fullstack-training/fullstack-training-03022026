const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
    firstName: { type: String, required: true },
  
    lastName: { type: String, required: true },
  
    company: { type: companySchema, required: true },
  
    startDate: { type: Date, required: true },
  
    jobTitle: { type: String, required: true },
  
    resigned: { type: Boolean, required: true },
  
    salary: { type: Number, required: true },
  
    manager: employeeSchema,
  });

const companySchema = new Schema({
  name: { type: String, required: true },

  description: { type: String, required: true },

  headquarters: { type: String, required: true },

  industry: { type: String, required: true },

  employees: { type: [employeeSchema], required: true },
});


const Company = mongoose.model("Company", companySchema);
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = {
  Company,
  Employee,
};
