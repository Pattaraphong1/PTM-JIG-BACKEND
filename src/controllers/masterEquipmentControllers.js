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

     // Controller ใหม่สำหรับเพิ่มข้อมูลอุปกรณ์หลัก
    addMasterEquipment: async (req, res) => {
        try {
            // รับข้อมูลจาก body ของ request
            const equipmentData = req.body;
            // สำหรับ photo ให้ใช้ req.file.filename หรือ filepath จาก multer
            if (req.file) {
                equipmentData.photo = req.file.path; // หรือ req.file.filename
            } else {
                equipmentData.photo = null;
            }

            // เนื่องจาก `create_by` และ `update_by` มาจาก user login
            // ในที่นี้จะใช้ค่าสมมติไปก่อน
            equipmentData.create_by = 'user_login_placeholder';
            equipmentData.update_by = 'user_login_placeholder';

            const newEquipment = await MasterEquipmentModel.addMasterEquipment(equipmentData);
            res.status(201).json({
                message: 'Master equipment added successfully',
                data: newEquipment
            });
        } catch (err) {
            console.error('Error in addMasterEquipment controller:', err.message);
            res.status(500).send('Server Error: ' + err.message);
        }
    }
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
