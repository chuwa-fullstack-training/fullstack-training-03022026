const Employee = require('../models/Employee');

// Create a new employee
const createEmployee = async(req,res) =>{
    try{
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json({ message: 'Employee created' });
    } catch (err) {
        console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
    }
};

// Get an employee by id
const getEmployeeById = async(req,res)=>{
    try{
        const employee = await Employee.findById(req.params?.id);;
        res.status(200).json(employee);
    }catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
      }
}

// Update an employee by id
const updateEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.status(201).json({ message: 'Employee updated' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete an employee by id
const deleteEmployeeById = async (req, res) => {
    try {
      await Employee.findByIdAndDelete(req.params?.id);
      res.status(204).json({ message: 'Employee deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  };


// Get all employees
const getAllEmployees = async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };

module.exports = {
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees
}