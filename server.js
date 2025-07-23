// server.js
require('dotenv').config(); // ตรวจสอบให้แน่ใจว่าโหลด .env ก่อนใช้ค่า
const express = require('express');
const db = require('./src/config/db'); // อิมพอร์ตการเชื่อมต่อฐานข้อมูล

const app = express();
const PORT = process.env.PORT || 5000;
const masterEquipmentRoutes = require('./src/routes/masterEquipmentRoutes');
const masterEquipmentTypeRoutes = require ('./src/routes/masterEquipmentTypeRoutes')

// Middleware
app.use(express.json()); // สำหรับ Parse JSON body ของ request

// All Master Equipments
app.use('/api/allMasterEquipment', masterEquipmentRoutes);

// All Master Equipments Type
app.use('/api/allMasterEquipmentType', masterEquipmentTypeRoutes);

 // app.get('/allMasterEquipment', async (req, res) => {
//     try {
//         const result = await db.query('SELECT * FROM master_equipments'); // สมมติว่ามีตาราง users
//         res.status(200).json(result.rows);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// ทดสอบ API Endpoint: เพิ่มผู้ใช้ใหม่
// app.post('/users', async (req, res) => {
//     const { name, email } = req.body;
//     try {
//         const result = await db.query(
//             'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
//             [name, email]
//         );
//         res.status(201).json(result.rows[0]);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });



// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});