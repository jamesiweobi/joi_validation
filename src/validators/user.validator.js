const Joi = require('joi');

const userValidator = Joi.object({
  name: Joi.string().required(),
  sex:  Joi.string().required().valid("male", "female", "transgender", "none-binary"),
  age: Joi.number().required(),
  password: Joi.string().required()
}).strict(true)


module.exports = {userValidator}
