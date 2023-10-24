import Joi from 'joi';

export const employeeValidator = Joi.object({
    documentNumber: Joi.number().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    dateAdmission: Joi.date().required(),
    companyId: Joi.number().required(),
}).options({ allowUnknown: true });
