const services = require('../services');

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
  createCategory,
};