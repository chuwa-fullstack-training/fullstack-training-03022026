const express = require('express');
const router = express.Router();

const Company = require('../models/Company');
const Employee = require('../models/Employee');

// Create a new company
router.post('/', async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all companies
router.get('/', async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a company by id
router.get('/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);

        if (!company) {
            res.status(404).json({ error: 'Company not found' });
            return;
        }
        res.json(company);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all employees of a company
router.get('/:id/employees', async (req, res) => {
    try {
        const employees = await Employee.find({ company: req.params.id });
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a company by id
router.put('/:id', async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(
        req.params.id,
        req.body,
        // return the updated document
        { returnDocument: 'after' }
        );

        if (!company) {
            res.status(404).json({ error: 'Company not found' });
            return;
        }

        res.json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a company by id
router.delete('/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);

        if (!company) {
            res.status(404).json({ error: 'Company not found' });
            return;
        }

        await Employee.deleteMany({ company: req.params.id });
        await Company.findByIdAndDelete(req.params.id);

        res.json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;