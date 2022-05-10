const express = require('express');
const router = express.Router();

const userRoleController = require('../controllers/userRoleController');

router.post('/add-user-role', userRoleController.addUserRole);
router.get('/all-roles', userRoleController.allUserRoles);

module.exports = router;