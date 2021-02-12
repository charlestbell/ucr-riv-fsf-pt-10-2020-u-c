const mysql = require("mysql");
const cTable = require("console.table");
require("dotenv").config();

module.exports = connection = mysql.createConnection({
  host: "localhost",

  // Your port, if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: process.env.SQL_PASSWORD,
  database: "parties_DB",
});
module.exports = orm = () => {
 selectPartNames(param, param, param) {
  await console.log("Party Names:");
  await connection.query(`SELECT * FROM parties;`, (err, results) => {
    results.forEach((element) => {
      console.log(`- ${element.party_name}`);
    });
  });
}
  // Log Client Names
  await console.log("Client Names:");
  await connection.query(`SELECT * FROM clients;`, (err, results) => {
    results.forEach((element) => {
      console.log(`- ${element.client_name}`);
    });
  });
};
logData();
