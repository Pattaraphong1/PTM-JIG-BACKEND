const express = require('express');
const router = express.Router();
const masterEquipmentTypeControllers = require('../controllers/masterEquipmentTypeControllers');

router.get('/',masterEquipmentTypeControllers.getAllMasterEquipmentType)

module.exports = router; // ต้อง export router instance นี้ออกไป