const MasterEquipmentTypeModel = require('../models/masterEquipmentTypeModel');

const MasterEquipmentTypeController = {
    // Controller สำหรับดึงผู้ใช้ทั้งหมด
    getAllMasterEquipmentType: async (req, res) => {
        try {
            const masterEquipmentsType = await MasterEquipmentTypeModel.getAllMasterEquipmentType(); // เรียกใช้เมธอดจาก Model
            res.status(200).json(masterEquipmentsType); // ส่ง Response กลับ
        } catch (err) {
            console.error('Error in getAllMasterEquipmentsType controller:', err.message);
            res.status(500).send('Server Error');
        }
    },
};

module.exports = MasterEquipmentTypeController;

// const pool =require('../config/db'); // ดึง pool มาใช้
// exports.getAllMasterEquipment = async (req, res, next) => {  
  // try {
  //   const result = await pool.query('SELECT * FROM master_equipments');
  //   res.status(200).json(result.rows);
  // } catch (err) {
  //   next(err); // ส่ง error ไปยัง Global Error Handler
  // }  
// };
