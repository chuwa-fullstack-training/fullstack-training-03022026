const express = require('express');
const {
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees
} = require('../controllers/employee');
const router = express.Router();

router.get('/',getAllEmployees);

router.get('/:id',getEmployeeById);

router.post('/',createEmployee);

router.put('/:id',updateEmployeeById);

router.delete('/:id',deleteEmployeeById);

module.exports = router;