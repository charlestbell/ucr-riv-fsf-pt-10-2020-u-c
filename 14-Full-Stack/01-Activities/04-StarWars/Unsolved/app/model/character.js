// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
const allCharacters = sequelize.define("allcharacter", {
  routeName: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  role: { type: Sequelize.STRING, allowNull: false },
  age: { type: Sequelize.INTEGER, allowNull: false },
  age: { type: Sequelize.INTEGER, allowNull: false },
});

// Syncs with DB
allCharacters.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = allCharacters;
