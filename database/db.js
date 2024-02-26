const mysql = require('mysql2');
const util = require('util');
require('dotenv').config();

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    debug: false
});

pool.query = util.promisify(pool.query);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.errno === -4078) {
            return console.log('connection err');
        }
        console.log('Database Connection failed!');
        return;
    }
    console.log('MySQL Connected');
    connection.release();
});

module.exports = pool;