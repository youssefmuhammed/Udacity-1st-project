import supertest from 'supertest';
import app from '../index';
import sharp from 'sharp';
import fs from 'fs';
import resize from '../routes/imageProcess';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
describe('endpoint: /api/img', (): void => {
  it('gets /api/img/?filename=portfolio1&width=200&height=200', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/img?filename=portfolio1&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
  it('gets /api/img/?filename=portfolio2&width=400&height=400', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/img?filename=portfolio1&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
  it('gets /api/img/?filename=portfolio3&width=600&height=600', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/img?filename=portfolio1&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
});

describe('sharp function', (): void => {
  it('should resize the image', () => {
    resize('portfolio1', '400', '400');
    const source = `./img/new_img/portfolio1400&400.png`;
    expect(fs.existsSync(source)).toBe(true);
  });
});
