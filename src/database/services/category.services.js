const { Category } = require('../models');
// const { generateJWT } = require('../middleware/tokenMiddleware');

const createCategory = async (name) => {
  const create = Category.create({ name });

  // const payload = {
  //   id: create.id,
  //   name: create.name,
  // };

  // const category = generateJWT({ payload });

  return create;
};

module.exports = {
  createCategory,
};
