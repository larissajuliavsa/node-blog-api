const services = require('../services');

const getCategories = async (_req, res, next) => {
  try {
    const categories = await services.category.getCategories();
    
    return res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;

    const category = await services.category.createCategory(name);
    
    return res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCategories,
  createCategory,
};