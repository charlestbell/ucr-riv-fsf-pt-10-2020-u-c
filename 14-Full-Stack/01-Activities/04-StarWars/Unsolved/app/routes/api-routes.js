// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../model/character.js");

// Routes
// =============================================================
module.exports = (app) => {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", (req, res) => {
    // If the user provides a specific character in the URL...
    if (req.params.characters) {
      // Then display the JSON for ONLY that character.

      // (Note how we're using the ORM here to run our searches)
      db.findAll({
        name: [req.params.characters],
      }).then((results) => res.json(results));
      // db.searchCharacter(req.params.characters, (data) => res.json(data));
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.

      // (Note how we're using the ORM here to run our searches)
      db.findAll().then((results) => res.json(results));
      // db.allCharacters((data) => res.json(data));
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", (req, res) => {
    // Take the request...
    const character = req.body;

    // Then send it to the ORM to "save" into the DB.
    db.create({ name: character }).then((results) => res.json(results));
    // db.addCharacter(character, (data) => console.log(data));
  });
};
