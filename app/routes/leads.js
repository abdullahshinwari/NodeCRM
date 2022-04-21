const leadsController = require('../controllers/leadsController');
const express = require('express');
const router = express.Router();

router.post(
    '/add-lead',
    leadsController.addLead
);

router.get(
    '/test',
    leadsController.test
);

module.exports = router;