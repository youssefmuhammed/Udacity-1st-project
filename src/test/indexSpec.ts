import supertest from 'supertest';
import app from '../index';


const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    }
)});



describe('endpoint: /api/img', (): void => {
    it('gets /api/img/?filename=portfolio1&width=200&height=200', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/img?filename=portfolio1&width=200&height=200'
      );

      expect(response.status).toBe(200);
    })
});
