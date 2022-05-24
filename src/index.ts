/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import express from 'express';
import resize from './routes/imageProcess';
import route from './routes/resize';


const app = express();
const port = 3000;

//http://localhost:3000/api/img/?filename=portfolio1&width=200&height=400 "URL full name"



app.listen(port, () => {
  console.log(`click => http://localhost:${port}/ `);
});

app.get('/', (req : express.Request, res: express.Response) => {
  res.send('Image Processing API');
} ) ;

//app.get('/api/img', resize, uploadimg, (_req) => {});
app.use('/api',route, resize);




export default app ;
