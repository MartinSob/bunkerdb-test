import express from 'express';

import { getCompanies } from './getCompanies';
import { getCompany } from './getCompany';
import { postCompany } from './postCompany';

import { postCompanyValidator } from './postCompany/validator';

export const company = express.Router();

company
  .get('/company', getCompanies)
  .get('/company/:companyId', getCompany)
  .post('/company', postCompanyValidator, postCompany);
