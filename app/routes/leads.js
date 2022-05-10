const express = require('express');
const router = express.Router();

const leadsController = require('../controllers/leadsController');

router.post('/add-lead', leadsController.addLead);
router.get('/all-leads', leadsController.allLeads);
router.get('/show-lead/:id', leadsController.showLead);
router.put('/update-lead/:id', leadsController.updateLead);
router.delete('/delete-lead/:id',leadsController.deleteLead);
router.get('/test', leadsController.test);

module.exports = router;
