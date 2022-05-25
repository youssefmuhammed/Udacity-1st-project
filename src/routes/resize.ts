import fs from 'fs';
import express from 'express';
import resize from './imageProcess';

const route = express.Router();

route.get('/img', async (req: express.Request ,res : express.Response )=> {
  const path = `./img/new_img/${req.query.filename}${req.query.height}&${req.query.width}.png`;

  if (fs.existsSync(path)) {
    console.log ("file exists");
    fs.readFile(`./img/new_img/${req.query.filename}${req.query.height}&${req.query.width}.png`, function (_err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(data); });
  } else {        
    console.log("file doesn't exists");

      resize(req.query.filename, req.query.height as string , req.query.width as string);
      fs.readFile(`./img/new_img/${req.query.filename}${req.query.height}&${req.query.width}.png`, function (_err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(data);
    }); 
    }
    
}  
);

  export default route;