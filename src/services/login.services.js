const { User } = require('../models');
const { generateJWT } = require('../../middleware/tokenMiddleware');

const errorMessage = (status, message) => ({
  status,
  message,
});

const getLogin = async (email, password) => {
  const data = await User.findOne({ where: { email, password } });

  if (!data) throw errorMessage(400, 'Invalid fields');

  const payload = {
    id: data.id,
    displayName: data.displayName,
    email: data.email,
    image: data.image,
  };

  const login = generateJWT({ payload });

  return login;
};

module.exports = {
  getLogin,
};
