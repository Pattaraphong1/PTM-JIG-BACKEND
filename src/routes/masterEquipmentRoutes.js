const express = require('express');
const router = express.Router();
const masterEquipmentControllers = require('../controllers/masterEquipmentControllers');

const MasterEquipmentModel = require('../models/masterEquipmentModel');

router.get('/', async (req, res) => {
    try {
        const masterEquipments = await MasterEquipmentModel.getAllMasterEquipment();
        res.status(200).json(masterEquipments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router; // ต้อง export router instance นี้ออกไป