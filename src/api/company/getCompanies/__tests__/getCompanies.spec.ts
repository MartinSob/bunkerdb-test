import { createRequest, createResponse } from 'node-mocks-http';
import { getCompanies } from '../index';
import { companyMock } from '../../../../../tests/mocks/companyMock'
import { employeeMock } from '../../../../../tests/mocks/employeeMock'

jest.mock("../../../../models", () => ({
  Company: {
    findAll: () => companyMock
  },
  Employee: {
    findAll: () => employeeMock
  }
}));

describe('Get companies', () => {
  it('returns http code 200', async () => {
    const req = createRequest();
    const res = createResponse();

    await getCompanies(req, res);

    const data = res._getJSONData();
    console.log(data);

    expect(res.statusCode).toBe(200);
    expect(data[0].name).toBe('CocaCola');
  });
});