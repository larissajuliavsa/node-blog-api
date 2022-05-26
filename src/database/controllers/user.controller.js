const services = require('../services');

const getUser = async (req, res, next) => {
  try {
    const { body } = req;

    const token = await services.user.getUser(body);
    
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUser,
};
