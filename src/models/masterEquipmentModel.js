// models/userModel.js
const db = require('../config/db'); // เรียกใช้การเชื่อมต่อฐานข้อมูลที่เราสร้างไว้

const MasterEquipmentModel = {
    // เมธอดสำหรับดึงข้อมูลผู้ใช้ทั้งหมด
    getAllMasterEquipment: async () => {
        try {
            const result = await db.query('SELECT * FROM master_equipments LIMIT 100');
            return result.rows;
        } catch (err) {
            throw new Error('Error fetching all master Equipments: ' + err.message);
        }
    },

    // // เมธอดสำหรับดึงข้อมูลผู้ใช้ตาม ID
    // getUserById: async (id) => {
    //     try {
    //         const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    //         return result.rows[0]; // คืนค่าผู้ใช้คนแรกที่พบ (หรือ undefined หากไม่พบ)
    //     } catch (err) {
    //         throw new Error('Error fetching user by ID: ' + err.message);
    //     }
    // },

    // // เมธอดสำหรับสร้างผู้ใช้ใหม่
    // createUser: async (name, email) => {
    //     try {
    //         const result = await db.query(
    //             'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    //             [name, email]
    //         );
    //         return result.rows[0]; // คืนค่าผู้ใช้ที่สร้างใหม่
    //     } catch (err) {
    //         throw new Error('Error creating user: ' + err.message);
    //     }
    // },

    // // เมธอดสำหรับอัปเดตข้อมูลผู้ใช้
    // updateUser: async (id, name, email) => {
    //     try {
    //         const result = await db.query(
    //             'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    //             [name, email, id]
    //         );
    //         return result.rows[0]; // คืนค่าผู้ใช้ที่อัปเดตแล้ว
    //     } catch (err) {
    //         throw new Error('Error updating user: ' + err.message);
    //     }
    // },

    // // เมธอดสำหรับลบผู้ใช้
    // deleteUser: async (id) => {
    //     try {
    //         const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    //         return result.rows[0]; // คืนค่าผู้ใช้ที่ถูกลบ
    //     } catch (err) {
    //         throw new Error('Error deleting user: ' + err.message);
    //     }
    // }
};

module.exports = MasterEquipmentModel;