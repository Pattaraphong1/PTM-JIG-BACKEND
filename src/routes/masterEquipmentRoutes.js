const express = require('express');
const router = express.Router();
const MasterEquipmentController = require('../controllers/masterEquipmentControllers');

// Middleware สำหรับจัดการการอัปโหลดไฟล์ด้วย Multer
const multer = require('multer');
const path = require('path');

// ตั้งค่า storage สำหรับ Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Directory ที่จะเก็บไฟล์ที่อัปโหลด
    },
    filename: (req, file, cb) => {
        // ตั้งชื่อไฟล์ใหม่ เพื่อไม่ให้ชื่อไฟล์ซ้ำกัน
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// ฟังก์ชันสำหรับกรองไฟล์ที่อัปโหลด
const fileFilter = (req, file, cb) => {
    // ตรวจสอบนามสกุลไฟล์
    const allowedFileTypes = /jpeg|jpg|png/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    } else {
        cb('Error: Only jpeg, jpg, and png files are allowed!', false);
    }
};

// ตั้งค่า Multer instance
const upload = multer({
    storage: storage,
    limits: { fileSize: 2000000 }, // จำกัดขนาดไฟล์ไม่เกิน 2MB
    fileFilter: fileFilter
});


// Route สำหรับดึงข้อมูลอุปกรณ์ทั้งหมด
//router.get('/', MasterEquipmentController.getAllMasterEquipment);

// Route ใหม่สำหรับเพิ่มข้อมูลอุปกรณ์ (Endpoint: /addMasterEquipment)
// ใช้ upload.single('photo') เพื่อจัดการการอัปโหลดไฟล์รูปภาพ
router.post('/', upload.single('photo'), MasterEquipmentController.addMasterEquipment);


module.exports = router;