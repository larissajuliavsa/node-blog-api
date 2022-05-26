const Joi = require('joi');

const schema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com'] } })
    .required()
    .messages({
      'any.required': '"email" must be a valid email',
    }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
});

const userValidation = (req, _res, next) => {
  const { displayName, email, password } = req.body;
  const { error } = schema.validate({ displayName, email, password });

  if (error) {
    console.log(error);
    return next({ status: 400, message: error.message });
  }

  next();
};

module.exports = {
  userValidation,
};
