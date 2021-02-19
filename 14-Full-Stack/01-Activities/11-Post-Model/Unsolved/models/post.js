module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define("Blog", {
    title: { type: DataTypes.STRING },
    body: { type: DataTypes.TEXT },
    category: { type: DataTypes.STRING },
  });
  return Blog;
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
};
