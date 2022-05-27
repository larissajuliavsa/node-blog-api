const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const postValidation = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = schema.validate({ title, content, categoryIds });

  if (error) {
    return next({ status: 400, message: 'Some required fields are missing' });
  }

  next();
};

module.exports = {
  postValidation,
};
