const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'BlogPosts', // fazendo referencia a tabela BlogPosts da sua coluna id
        key: 'id',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories', // fazendo referencia a tabela Categories da sua coluna id
        key: 'id',
      },
    },
  },
    {
      timestamps: false,
    }
  );

  PostCategory.associate = (models) => {
		models.BlogPost.belongsToMany(models.Category, { foreignKey: 'postId', as: 'category' })

    models.Category.belongsToMany(models.BlogPost, { foreignKey: 'categoryId', as: 'post' });
    // fazendo as associações da tabela BlogPost e Category
  };

  return PostCategory;
};

module.exports = PostCategory;
