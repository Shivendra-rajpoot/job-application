const Joi = require("joi");

module.exports = Joi.object({
  applicant_id: Joi.number().integer().required(),
  job_id: Joi.number().integer().required(),

  full_name: Joi.string()
    .required()
    .messages({
      "string.empty": "Full name is required", // message when empty
      "any.required": "Full name is required"   // message when missing
    }),
  gender: Joi.string()
    .required()
    .messages({
      "string.empty": "Gender is required"
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email"
    }),

  date_of_birth: Joi.date().required(),
  father_name: Joi.string().required(),
  nationality: Joi.string().required(),

  mode_of_application: Joi.string().required(),
  current_organization: Joi.string().allow(null, ""),

  total_emoluments: Joi.number().integer().required(),
  total_experience_years: Joi.number().precision(1).required(),

  aadhaar_number: Joi.string().length(12).required(),
  social_category: Joi.string().required(),
  marital_status: Joi.string().required(),

  corr_address: Joi.string().required(),
  corr_city: Joi.string().required(),
  corr_state: Joi.string().required(),
  corr_country: Joi.string().required(),
  corr_pin: Joi.string().required(),
  corr_phone: Joi.string().required(),

  perm_address: Joi.string().required(),
  perm_city: Joi.string().required(),
  perm_state: Joi.string().required(),
  perm_country: Joi.string().required(),
  perm_pin: Joi.string().required(),
  perm_phone: Joi.string().required(),

  police_station: Joi.string().required()
});
