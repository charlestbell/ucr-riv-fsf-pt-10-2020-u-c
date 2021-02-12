// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const connection = require("../config/connection.js");

// Routes
// =============================================================
module.exports = (app) => {
  // Get all chirps
  app.get("/chirps", (req, res) => {
    connection.query(`SELECT * FROM chirps`, (err, results) => {
      res.send(results);
    });
  });

  // Add a chirp
  // app.POST ('/', (req, res) => {
  //   connection.query(`SELECT * FROM chirps`, (err, results) => {
  //     res.send(resutls)
  //   })
  //   });
};
