require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '12h',
  algorithm: 'HS256',
};

const errorMessage = (status, message) => ({
  status,
  message,
});

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, process.env.JWT_SECRET, jwtConfig);

  return token;
};

const validateJWT = (req, _res, next) => {
  const { headers: { authorization } } = req;

  if (!authorization) throw errorMessage(401, 'Token not found');  

  try {
    const verify = jwt.verify(authorization, process.env.JWT_SECRET);

    if (!verify.data) throw errorMessage(401, 'Expired or invalid token');
    
    next();
  } catch (err) {
    throw errorMessage(401, 'Expired or invalid token');
  }
};

module.exports = { 
  generateJWT,
  validateJWT,
};
