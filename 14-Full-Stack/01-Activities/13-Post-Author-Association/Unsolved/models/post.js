module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
  });

  Post.associate = (models) => {
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // Add a belongsTo association to Authors here
  return Post;
};
