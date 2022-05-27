const { Category } = require('../database/models');

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const createCategory = async (name) => {
  const create = Category.create({ name });
  return create;
};

module.exports = {
  getCategories,
  createCategory,
};
