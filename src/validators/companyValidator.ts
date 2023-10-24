import Joi from 'joi';

export const companyValidator = Joi.object({
    name: Joi.string().required(),
    country: Joi.string().valid('UY', 'BR', 'AR').required(),
}).options({ allowUnknown: true });
