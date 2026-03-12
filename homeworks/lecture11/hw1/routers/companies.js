const express = require("express");
const {
  createCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getAllCompanies,
  getAllEmployeesByCompanyId,
} = require("../controllers/company");
const {requireJwt} = require('../middlewares/auth');

const router = express.Router();

router.get("/", getAllCompanies);

router.get("/:id/employees",requireJwt, getAllEmployeesByCompanyId);
router.get("/:id", getCompanyById);

router.post("/", createCompany);

router.put("/:id", updateCompanyById);

router.delete("/:id", deleteCompanyById);

module.exports = router;
