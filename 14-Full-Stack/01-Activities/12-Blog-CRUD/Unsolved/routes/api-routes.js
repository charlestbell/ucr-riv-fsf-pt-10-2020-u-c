const db = require("../models");

// Routes
module.exports = (app) => {
  app.get("/api/posts", (req, res) => {
    db.Post.findAll({}).then((dbPost) => res.json(dbPost));
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", (req, res) => {
    db.Post.findAll({
      where: {
        category: req.params.category,
      },
    }).then((dbTodo) => res.json(dbTodo));
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // Return the result to the user with res.json
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", (req, res) => {
    db.Post.findOne({
      where: {
        id: req.params.id,
      },
    }).then((dbTodo) => res.json(dbTodo));
  });

  // POST route for saving a new pos
  't
  app.post("/api/posts", (req, res) => {
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category,
    }).then((dbTodo) => res.json(dbTodo));
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", (req, res) => {
    // Add sequelize code to delete a post where the id is equal to req.params.id,
    // then return the result to the user using res.json
  });

  // PUT route for updating posts
  app.put("/api/posts", (req, res) => {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
  });
};
