const employeeController = require('../controllers/employeeController');
const express = require('express');
const router = express.Router();

router.get(
    '/employee-test',
    employeeController.test
);

module.exports = router;