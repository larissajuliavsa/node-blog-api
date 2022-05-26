const { User } = require('../models');
const { generateJWT } = require('../middleware/tokenMiddleware');

const errorMessage = (status, message) => ({
  status,
  message,
});

const createUser = async ({ displayName, email, password, image }) => {
  const data = await User.findOne({ where: { email, password } });

  if (data) throw errorMessage(409, 'User already registered');

  const create = User.create({ displayName, email, password, image });

  const payload = {
    id: create.id,
    displayName: create.displayName,
    email: create.email,
    image: create.image,
  };

  const user = generateJWT({ payload });

  return user;
};

module.exports = {
  createUser,
};
