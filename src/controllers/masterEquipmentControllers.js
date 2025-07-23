const MasterEquipmentModel = require('../models/masterEquipmentModel');

const MasterEquipmentController = {
    // Controller สำหรับดึงผู้ใช้ทั้งหมด
    getAllMasterEquipment: async (req, res) => {
        try {
            const masterEquipments = await MasterEquipmentModel.getAllMasterEquipment(); // เรียกใช้เมธอดจาก Model
            res.status(200).json(masterEquipments); // ส่ง Response กลับ
        } catch (err) {
            console.error('Error in getAllMasterEquipments controller:', err.message);
            res.status(500).send('Server Error');
        }
    },
};

module.exports = MasterEquipmentController;

// const pool =require('../config/db'); // ดึง pool มาใช้
// exports.getAllMasterEquipment = async (req, res, next) => {  
  // try {
  //   const result = await pool.query('SELECT * FROM master_equipments');
  //   res.status(200).json(result.rows);
  // } catch (err) {
  //   next(err); // ส่ง error ไปยัง Global Error Handler
  // }  
// };
