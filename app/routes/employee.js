const leadsController = require('../controllers/employeeController');
const express = require('express');
const router = express.Router();

router.get(
    '/employee-test',
    leadsController.test
);

module.exports = router;