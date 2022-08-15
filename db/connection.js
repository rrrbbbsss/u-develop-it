const mysql = require('mysql2');

const DBUSER= process.env.DBUSER;
const DBPASS= process.env.DBPASS;

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: DBUSER,
        password: DBPASS,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;