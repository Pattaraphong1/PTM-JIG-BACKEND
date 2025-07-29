// config/db.js
require('dotenv').config(); // โหลดตัวแปรจาก .env

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: false
});

console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);
console.log(process.env.DB_DATABASE);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_PORT);

pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (err) => {
    console.error('Database error:', err.message);
    process.exit(-1); // ออกจากโปรเซสหากเกิดข้อผิดพลาดร้ายแรง
});

// module.exports = {
//     query: (text, params) => pool.query(text, params),
// };

pool.connect()
  .then(client => {
    console.log('Connected to PostgreSQL database!');
    client.release(); // คืน client กลับสู่ pool ทันที
  })
  .catch(err => {
    console.error('Error connecting to PostgreSQL database:', err.stack);
  });

module.exports = pool;