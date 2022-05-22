/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import express from 'express';
import fs from 'fs';
import sharp from 'sharp';


const app = express();
const port = 3000;

//http://localhost:3000/api/img/?filename=portfolio1&width=200&height=400 "URL full name"

const resize = async (req: { query: { filename: unknown; width: string; height: string; }; }, res:unknown, next: () => void) => {
  await sharp(`./img/${req.query.filename}.png`)
    .resize(parseInt(req.query.width), parseInt(req.query.height))
    .toFile('./img/new_img/resized.png');
  next();
};

const uploadimg = async (_req: unknown, res: { writeHead: (arg0: number, arg1: { 'Content-Type': string; }) => void; end: (arg0: Buffer) => void; }, next: () => void) => {
  fs.readFile('./img/new_img/resized.png', function (_err, data) {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(data); 
  });
  next();
};

app.listen(port, () => {
  console.log(`click => http://localhost:${port}/ `);
});

app.get('/', (req, res) => {
  res.send('Image Processing API');
});

app.get('/api/img', resize, uploadimg, (_req) => {});




export default app ;
