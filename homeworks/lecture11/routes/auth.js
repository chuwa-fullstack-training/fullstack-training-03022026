const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee'); 

const router = express.Router();
const JWT_SECRET = 'lecture10_hw2_secret';

router.post('/login', async(req, res) => {
    try {
        const {username, password} = req.body;

        // you can use `firstName` as username and `lastName` as password
        const employee = await Employee.findOne({
            firstName: username,
            lastName: password
        });

        // Return 401 if no matching employee is found
        if (!employee) {
            return res.status(401).json({ error: 'Invalid username or password' });
            
        }
        // Generate JWT token with basic user identity info
        const token = jwt.sign(
            {
                employeeId: employee._id,
                companyId: employee.company,
                firstName: employee.firstName
            },
            JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.json({ token });

    } catch (error) {
        res.status(500).json({ error: error.message});
    }
})

module.exports = router;