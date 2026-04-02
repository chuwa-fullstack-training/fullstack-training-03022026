const express = require('express'); 
const router = express.Router();
const Company = require('../models/company');

// ============ GET /companies 获取所有公司============
router.get('/', async (req, res) => {
    try {
        // .populate('employees') 会把 employees 数组里的 ObjectId,替换成完整的 Employee 文档（不然只能看到一堆 id）
        const companies = await Company.find().populate('employees');
        res.json(companies);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});
// ============ GET /companies/:id 根据 id 获取单个公司============
router.get('/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
    }catch (error) {res.status(500).json( {error: error.message })};
});

// ============ GET /companies/:id/employees获取某个公司的所有员工 ============
router.get('/:id/employees', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company.employees);
    } catch (error) {res.status(500).json( {error: error.message})};
});

// ============ POST /companies 创建新公司 ============
router.post('/', async (req, res) => {
    try {
        const company = new Company(req.body);
        const saved = await company.save();
        res.status(201).json(saved);
    } catch (error) {res.status(500).json({ error: error.message })};
});

// ============ PUT /companies/:id  更新公司信息============
router.put('/:id', async (req, res) => {
    try {
        // findByIdAndUpdate 三个参数：id; 要更新的数据; { new: true } → 返回更新后的文档（默认返回更新前的）
        const company = await Company.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        if (!company) { return res.status(404).json({ error: 'Company not found' })};
        res.json(company);
    } catch (error) {res.status(500).json({ error: error.message })};
});

// ============ DELETE /companies/:id  删除公司============
router.delete('/:id', async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) {return res.status(404).json({ error: 'Company not found' })};
        res.json({ message: 'Company deleted successfully' });
    } catch (error) {res.status(500).json({ error: error.message })};
})

module.exports = router;