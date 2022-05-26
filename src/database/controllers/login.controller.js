const services = require('../services');

const getLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const token = await services.login.getLogin(email, password);
    
    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getLogin,
};
