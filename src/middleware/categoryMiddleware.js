const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().required().messages({
    'string.min': '"name" is required',
  }),
});

const categoryValidation = (req, _res, next) => {
  const { name } = req.body;
  const { error } = schema.validate({ name });

  if (error) {
    return next({ status: 400, message: error.message });
  }

  next();
};

module.exports = {
  categoryValidation,
};
