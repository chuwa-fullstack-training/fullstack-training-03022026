const mongoose = require('mongoose');

// ======= Employee Schema =======
// company 和 manager 都是引用（ref），不是嵌套整个文档
// company: 多对一关系，多个员工属于一个公司
// manager: 自引用，manager 也是 Employee
const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required:true },
    lastName: { type: String, required:true },
    // ref: 'Company' → 引用 Company model
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'company'},
    startDate: { type: Date },
    jobTitle: { type: String },
    resigned: { type: Boolean, defalute: false },
    salary: { type: Number },
    // 自引用：manager 也是一个 Employee
    // required: false → 可选字段（有些员工没有 manager，比如 CEO）
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'employee', required: false }
});

module.exports = mongoose.model('employee', employeeSchema);