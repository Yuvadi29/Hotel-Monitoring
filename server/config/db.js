// import mysql from 'mysql';

const mysql = require('mysql');

//Creating a mysql connection
const connection = mysql.createConnection({
    host: "localhost", //Host of the database
    user: "root", //Username of database
    password: "", //Password of database
    database: "readings" //Database name
})

// module.exports = db;
connection.connect();