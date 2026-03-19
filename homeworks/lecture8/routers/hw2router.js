const express = require('express');
const router = express.Router();
const hwController = require('../controllers/hwcontroller');

// 匹配 http://localhost:3000/hw2/parsetime?iso=... 
router.get('/parsetime', hwController.handleHW2);
router.get('/unixtime', hwController.handleHW2);

module.exports = router;