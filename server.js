// server.js
require('dotenv').config(); // ตรวจสอบให้แน่ใจว่าโหลด .env ก่อนใช้ค่า
const express = require('express');
const db = require('./src/config/db'); // อิมพอร์ตการเชื่อมต่อฐานข้อมูล

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const masterEquipmentRoutes = require('./src/routes/masterEquipmentRoutes');
const masterEquipmentTypeRoutes = require ('./src/routes/masterEquipmentTypeRoutes');
const { addMasterEquipment } = require('./src/models/masterEquipmentModel');




// ใช้ cors middleware
app.use(cors({
  origin: 'http://localhost:5173' // อนุญาตเฉพาะ Origin ของ React App ของคุณ
  // หรือ origin: '*' เพื่ออนุญาตทุก Origin (ไม่แนะนำสำหรับ Production)
}));

// Middleware
app.use(express.json()); // สำหรับ Parse JSON body ของ request
app.use(cors());

// All Master Equipments
app.use('/api/allMasterEquipment', masterEquipmentRoutes);

// All Master Equipments Type
app.use('/api/allMasterEquipmentType', masterEquipmentTypeRoutes);

app.use('/api/addMasterEquipment',masterEquipmentRoutes)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});