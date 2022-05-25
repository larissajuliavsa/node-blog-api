const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING,
  }, {
    timestamps: false, // para evitar o erro de 'createdAt'
  })

  User.associate = (models) => {
		User.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'post' });
	};

  return User;
};

module.exports = User;
