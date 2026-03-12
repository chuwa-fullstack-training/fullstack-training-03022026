const express = require("express");
const {
  createCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getAllCompanies,
  getAllEmployeesByCompanyId,
} = require("../controllers/company");
const router = express.Router();

router.get("/", getAllCompanies);

router.get("/:id/employees", getAllEmployeesByCompanyId);
router.get("/:id", getCompanyById);

router.post("/", createCompany);

router.put("/:id", updateCompanyById);

router.delete("/:id", deleteCompanyById);

module.exports = router;
