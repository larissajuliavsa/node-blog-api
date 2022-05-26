const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(), // https://joi.dev/api/?v=17.6.0
  password: Joi.string().required(),
});

const loginValidation = (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = schema.validate({ email, password });

  if (error) {
    return next({ status: 400, message: 'Some required fields are missing' });
  }

  next();
};

module.exports = {
  loginValidation,
};
