const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',  // referenciando a tabela Users do banco de dados para utilizar a coluna id
      key: 'id'
    }
  },
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
  }, {
    timestamps: false,
  })

  BlogPost.associate = (models) => {
		BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
	};

  return BlogPost;
};

module.exports = BlogPost;

