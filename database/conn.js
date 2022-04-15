var mysql2 = require("mysql2")
require('dotenv').config();

var conn = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "userdb"
})

conn.connect((err) => {
    if (err) throw err;
    console.log("Database Connected...")
})

module.exports = conn;
