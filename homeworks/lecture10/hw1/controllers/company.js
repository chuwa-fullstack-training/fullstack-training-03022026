const Company = require("../models/Company");

// Create a new company
const createCompany = async (req, res) => {
  try {
    const company = new Comapny(req.body);
    await company.save();
    res.status(201).json({ message: "Company created" });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get an company by id
const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// Update an company by id
const updateCompanyById = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ message: "Company updated" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Delete an company by id
const deleteCompanyById = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: "Company deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all employees
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all employees of a company
const getAllEmployeesByCompanyId = async (id) => {
  try {
    const employees = await Company.findById(req.params?.id).populate(
      "employees",
    );
    res.status(200).json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getAllCompanies,
  getAllEmployeesByCompanyId,
};
