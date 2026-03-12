const express = require('express');
const {
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees
} = require('../controllers/employee');
const {optionalJwt} = require('../middlewares/auth');

const router = express.Router();

router.get('/',requireJwt,getAllEmployees);

router.get('/:id',requireJwt,getEmployeeById);

router.post('/',createEmployee);

router.put('/:id',updateEmployeeById);

router.delete('/:id',deleteEmployeeById);

module.exports = router;