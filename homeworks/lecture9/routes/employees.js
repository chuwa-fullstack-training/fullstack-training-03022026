const express = require('express');
const router = express.Router();

const Company = require('../models/Company');
const Employee = require('../models/Employee');

// Create a new employee
router.post('/', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        // add the employee in company
        await Company.findByIdAndUpdate(
        employee.company,
        { $push: { _employees: employee._id } }
        );

        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get an employee by id
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
        res.status(404).json({ error: 'Employee not found' });
        return;
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an employee by id
router.put('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        // return the updated document
        { returnDocument: 'after' }
        );

        if (!employee) {
            res.status(404).json({ error: 'Employee not found' });
            return;
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an employee by id
router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            res.status(404).json({ error: 'Employee not found' });
            return;
        }
        // delete from company
        await Company.findByIdAndUpdate(
        employee.company,
        { $pull: { _employees: employee._id } }
        );

        await Employee.findByIdAndDelete(req.params.id);

        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;