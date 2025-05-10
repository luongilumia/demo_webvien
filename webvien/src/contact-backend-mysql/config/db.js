const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123456", // hoặc password nếu có
  database: "contact_db",
});

module.exports = db;
