import Joi from "joi";

export const validateSchema = Joi.object({
	firstName: Joi.string(),
	lastName: Joi.string(),
	email: Joi.string().email().lowercase().required(),
	password: Joi.string().min(5),
	phoneNumber: Joi.string(),
});
