const services = require('../services');

const getUsers = async (_req, res, next) => {
  try {
    const user = await services.user.getUsers();
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { body } = req;

    const token = await services.user.createUser(body);
    
    return res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
};

const getUserId = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await services.user.getUserId(id);
    
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  createUser,
  getUserId,
};
