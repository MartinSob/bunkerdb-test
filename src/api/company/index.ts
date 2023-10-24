import express from 'express';

import { getCompanies } from './getCompanies';
import { getCompanyById } from './getCompanyById';
import { postCompany } from './postCompany';

import { postCompanyValidator } from './postCompany/validator';

export const company = express.Router();

company
  .get('/company', getCompanies)
  .get('/company/:companyId', getCompanyById)
  .post('/company', postCompanyValidator, postCompany);
