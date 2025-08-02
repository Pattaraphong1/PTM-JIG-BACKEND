// models/userModel.js
const db = require('../config/db'); // เรียกใช้การเชื่อมต่อฐานข้อมูลที่เราสร้างไว้

const MasterEquipmentModel = {
    // เมธอดสำหรับดึงข้อมูลผู้ใช้ทั้งหมด
    getAllMasterEquipment: async () => {
        try {
            // const result = await db.query('SELECT * FROM master_equipments LIMIT 100');
            const result = await db.query('SELECT * FROM master_equipments');
            return result.rows;
        } catch (err) {
            throw new Error('Error fetching all master Equipments: ' + err.message);
        }
    },
    
    // เมธอดใหม่สำหรับเพิ่มข้อมูลอุปกรณ์หลัก
    addMasterEquipment: async (equipment) => {
        console.log("Add Master equipment");
        const {
            equipment_id, jig_name, jig_number, marker, suffix_no, serial_no,
            asset_no, type, photo, respond, section, control_no, application_model,
            entry_date, issue_date, calibration_date, next_calibration_date, shelf,
            floor, location, calibration_control, remark, status, create_by, update_by
        } = equipment;

        // คำสั่ง SQL สำหรับการ INSERT ข้อมูล
        const sql = `
            INSERT INTO master_equipments (
                equipment_id, jig_name, jig_number, marker, suffix_no, serial_no,
                asset_no, type, photo, respond, section, control_no, application_model,
                entry_date, issue_date, calibration_date, next_calibration_date, shelf,
                floor, location, calibration_control, remark, status, create_date, create_by,
                update_date, update_by
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16,
                $17, $18, $19, $20, $21, $22, $23, NOW(), $24, NOW(), $25
            ) RETURNING *;
        `;
        // ค่าที่จะใช้แทน $1, $2, ... ในคำสั่ง SQL
        const values = [
            equipment_id, jig_name, jig_number, marker, suffix_no, serial_no,
            asset_no, type, photo, respond, section, control_no, application_model,
            entry_date, issue_date, calibration_date, next_calibration_date, shelf,
            floor, location, calibration_control, remark, status, create_by, update_by
        ];

        try {
            const result = await db.query(sql, values);
            return result.rows[0]; // ส่งข้อมูลที่เพิ่มเข้าไปกลับมา
        } catch (err) {
            console.error('Error in addMasterEquipment model:', err.message);
            throw new Error('Error adding new master equipment: ' + err.message);
        }
    }
};

module.exports = MasterEquipmentModel;