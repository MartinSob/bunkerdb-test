import { createRequest, createResponse } from 'node-mocks-http';
import { postCompany } from '../index';

jest.mock("../../../../models", () => ({
  Company: {
    create: (data: any) => ({ ...data })
  }
}));

describe('Post company', () => {
  it('returns http code 200 with company', async () => {
    const req = createRequest({
      body: { name: 'CocaCola' }
    });
    const res = createResponse();

    await postCompany(req, res);

    const data = res._getJSONData();

    expect(res.statusCode).toBe(200);
    expect(data.name).toBe('CocaCola');
  });
});