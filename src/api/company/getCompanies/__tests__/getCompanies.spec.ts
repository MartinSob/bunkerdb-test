import { createRequest, createResponse } from 'node-mocks-http';
import { getCompanies } from '../index';
import { companyMock } from '../../../../../tests/mocks/companyMock'

jest.mock("../../../../models", () => ({
  Company: {
    findAll: () => companyMock
  }
}));

describe('Get companies', () => {
  it('returns http code 200', async () => {
    const req = createRequest();
    const res = createResponse();

    await getCompanies(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toBe(200);
    expect(data[0].name).toBe('CocaCola');
  });
});