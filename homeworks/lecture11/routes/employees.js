const express = require('express');
const router = express.Router();

const Company = require('../models/Company');
const Employee = require('../models/Employee');
const { optionalAuth } = require('../middleware/auth');

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
// Logged-in users can see all fields
// Anonymous users can only see firstName and lastName
router.get('/', optionalAuth, async (req, res) => {
    try {
        const employees = await Employee.find();
        // res.json(employees);
        // logged-in users
        if (req.user) {
            return res.json(employees);
        }
        // anonymous users
        const publicEmployees = employees.map(employee => ({
            firstName: employee.firstName,
            lastName: employee.lastName
        }));

        res.json(publicEmployees);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get an employee by id
router.get('/:id', optionalAuth, async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
            // return;
        }

        if (req.user) {
            return res.json(employee);
        }

        return res.json ({
            firstName: employee.firstName,
            lastName: employee.lastName
        });
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