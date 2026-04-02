const express = require('express'); 
const router = express.Router();
const Employee = require('../models/employee');
const Company = require('../models/company');

// ============ GET /employees  获取所有员工============
router.get('/', async (requestAnimationFrame, res) => {
    try {
        // populate 两个字段：company 和 manager, so看到公司名和 manager 的名字
        const employees = await Employee.find().populate('company').populate('manager');
        res.json(employees);
    } catch (error) {res.status(500).json({ error: error.message })};
});

// ============ GET /employees/:id 根据 id 获取单个员工============
router.get('/:id', async (requestAnimationFrame, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('company').populate('manager');
        if (!employee) {return res.status(404).json({ error: 'Employee not found' })};
        res.json(employee);
    } catch (error) {res.status(500).json({error: error.message })};
});

// ============ POST /employees 创建新员工============
router.post('/', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const saved = await employee.save();
        // 如果员工关联了公司，把这个员工的 id 也加到公司的 employees 数组里, 这样两边的关系都保持同步
        if (saved.company) {
            await Company.findByIdAndUpdate(
                saved.company,
                { $push: {employee: saved._id }}
            );
        }
        res.status(201).json(saved);
    } catch (error) {res.status(500).json({ error: error.message })};
}); 

// ============ PUT /employees/:id 更新员工信息============
router.put('/:id', async (req, res) => {
    try {
        const employess = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!employee) {return res.status(404).json({ error: 'Employee not found' })};
        res.json(employee);
    } catch (error) {res.status(500).json({ error: error.message })};
});

// ============ DELETE /employees/:id 删除员工============
router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {return res.status(404).json({ error: 'Employee not found' })}
        if (!employee.company) { await Company.findByIdAndUpdate(
            employee.company,
            { $push: {employee: employee._id }}
        )};
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {res.status(500).json({ error: error.message })};
});
module.exports = router;