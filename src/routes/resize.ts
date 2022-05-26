import fs from 'fs';
import express from 'express';
import resize from './imageProcess';

const route = express.Router();

route.get('/img', async (req: express.Request, res: express.Response) => {
  const filename = req.query.filename;
  const height = req.query.height;
  const width = req.query.width;

  const path = `./img/new_img/${filename}${height}&${width}.png`;

  if (fs.existsSync(path)) {
    console.log('file exists');
    fs.readFile(
      `./img/new_img/${filename}${height}&${width}.png`,
      function (_err, data) {
        res.end(data);
      }
    );
  } else {
    console.log("file doesn't exists");
    if (parseInt(height as string) > 0 && parseInt(width as string) > 0) {
      await resize(filename, height as string, width as string);

      fs.readFile(
        `./img/new_img/${req.query.filename}${req.query.height}&${req.query.width}.png`,
        function (_err, data) {
          res.end(data);
        }
      );
    } else {
      res.send('please enter a valid parameters');
    }
  }
});

export default route;
