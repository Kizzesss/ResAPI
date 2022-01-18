const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    user: 'root',
    password: '',
    database: 'take_a_pic',
    host: 'localhost',
    port: 3306
});

module.exports = pool;
