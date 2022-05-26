const services = require('../services');

const createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const token = await services.user.createUser(body);
    
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
};
