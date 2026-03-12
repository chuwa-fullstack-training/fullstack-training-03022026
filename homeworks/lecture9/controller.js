const mongoose = require('./connect');
const { Employee,Company } = require('./model');

// Create a new company
const createCompany = (companyData) =>{
    return Company.create(companyData);
}

// Create a new employee
const createEmployee = (employeeData) =>{
    return Employee.create(employeeData);
}

// Get a company by id
const getCompanyById = (id)=>{
    return Company.findById(id);
}

// Get an employee by id
const getEmployeeById = (id)=>{
    return Employee.findById(id);
}

// Update a company by id
const updateCompanyById = (id,updateData)=>{
    return Company.findByIdAndUpdate(id,updateData);
}

// Update an employee by id
const updateEmployeeById = (id,updateData)=>{
    return Employee.findByIdAndUpdate(id,updateData);
}

// Delete a company by id
const deleteCompanyById = (id)=>{
    return Company.findAndDeleteById(id);
}

// Delete an employee by id
const deleteEmployeeById = (id)=>{
    return Employee.findAndDeleteById(id);
}

// Get all companies
const getAllCompanies = ()=>{
    return Company.find();
}

// Get all employees
const getAllEmployees = ()=>{
    return Employee.find();
}

// Get all employees of a company
const getAllEmployeesByCompanyId = async (id)=>{
    const company = await getCompanyById(id);
    return company.employees;
}