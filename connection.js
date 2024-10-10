var mysql = require('mysql');
const { createConnection } = require('mysql2');

var con = createConnection({

    host:"localhost",
    user:"root",
    password:"",
    database:"node-crud",
});

module.exports = con;


