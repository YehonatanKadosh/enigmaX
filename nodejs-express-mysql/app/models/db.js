const mysql = require("mysql");
const fs = require("fs");

var connection = mysql.createConnection({
  host: "yehonatan.mysql.database.azure.com",
  user: "yehonatan@yehonatan",
  password: "Kadosh1234",
  database: "enigmaX",
});

module.exports = connection;
