// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the todos
  app.get("/api/todos", async (req, res) => {
    try {
      await db.Todo.findAll().then((allUsers) => {
        res.json(allUsers);
      });
    } catch (error) {
      res.status(503).send("Error retrieving todos from db");
    }
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", async (req, res) => {
    try {
      await db.Todo.create({
        text: req.body.text,
        complete: false,
      });
      res.json(req.body.text).send("Todo added to db successfully");
    } catch {
      res.status(503).send("Error adding todos to db");
    }
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from

  app.delete("/api/todos/:id", async (req, res) => {
    try {
      const deletedTodo = await db.Todo.destroy({
        where: {
          id: req.params.id,
        },
      });
      throw new Error("The error in question");
      console.log(`User ${deletedUser} has been deleted.`);
    } catch {
      res.status(503).send("Error deleting todos from db");
    }
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", async (req, res) => {
    try {
      await toolbar.Todo.update(req.body, {
        where: {
          text: req.body.text,
        },
      });
    } catch (error) {
      res.status(503).send("Error updating todos in db");
    }
  });
};
