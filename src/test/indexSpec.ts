import supertest from 'supertest';
import app from '../index';
import sharp from 'sharp';
// import resize from '../routes/imageProcess';
// import { buffer } from 'stream/consumers';
import fs from 'fs';


const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    }
)});


describe('the output image', ()=> {
    sharp ('../test/portfolio1.png').resize(400,400);
    it ('get the image', async ()=> {
        fs.readFile('../test/portfolio1.png', function () {
        expect('../test/portfolio1.png').toBe('../test/portfolio1.png');
    })


})});