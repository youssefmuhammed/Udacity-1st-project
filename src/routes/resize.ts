import fs from 'fs';
import express from 'express';

const route = express.Router();



route.get('/img', (req: express.Request ,res : express.Response, next: ()=> void )=> {

    fs.readFile('./img/new_img/resized.png', function (_err, data) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.end(data); 
          
    });
    next();
    
  });



  export default route;