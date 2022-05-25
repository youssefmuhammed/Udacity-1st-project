import sharp from "sharp";


const resize =  (filename: unknown,height : string,width: string) => {

     sharp(`./img/${filename}.png`)
    .resize(parseInt(width),parseInt(height))
    .toFile(`./img/new_img/${filename}${height}&${width}.png`);  
};



  export default resize;