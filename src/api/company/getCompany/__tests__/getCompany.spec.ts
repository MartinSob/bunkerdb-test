import { createRequest, createResponse } from 'node-mocks-http';
import { getCompany } from '../index';
import { companyMock } from '../../../../../tests/mocks/companyMock'

jest.mock("../../../../models", () => ({
  Company: {
    findByPk: () => companyMock[0]
  }
}));

describe('Get company', () => {
  it('returns http code 200 with company', async () => {
    const req = createRequest();
    const res = createResponse();

    await getCompany(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toBe(200);
    expect(data.name).toBe('CocaCola');
  });
});