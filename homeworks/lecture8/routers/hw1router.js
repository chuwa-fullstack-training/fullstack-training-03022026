const express = require('express');
const router = express.Router();
const hwController = require('../controllers/hwcontroller');

// 匹配 http://localhost:3000/hw1/test/txt 
router.get('/:dir/:ext', hwController.handleHW1);

module.exports = router;