import sharp from "sharp";
//import express from 'express';
// const res = express.response;


const resize = (filename: unknown,height : string,width: string) => {

    sharp(`./img/${filename}.png`)
    .resize(parseInt(width),parseInt(height))
    .toFile(`./img/new_img/${filename}${height}&${width}.png`);
  
};



  export default resize ;