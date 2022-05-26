/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import express from 'express';
import route from './routes/resize';

const app = express();
const port = 3000;

app.use('/api', route);

//http://localhost:3000/api/img/?filename=portfolio1&width=200&height=400 "URL full name"

app.listen(port, () => {
  console.log(`click => http://localhost:${port}/ `);
});

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Image Processing API');
});

export default app;
