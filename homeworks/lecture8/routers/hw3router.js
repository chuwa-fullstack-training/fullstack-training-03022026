const express = require('express');
const router = express.Router();
const hwController = require('../controllers/hwcontroller');

router.get('/home', hwController.renderHome);
router.post('/create-post', hwController.createPost);

module.exports = router;