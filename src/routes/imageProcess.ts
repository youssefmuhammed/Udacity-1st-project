import sharp from "sharp";


const resize = async (req: { query: { filename: unknown; width: string; height: string; }; }) => {
    await sharp(`./img/${req.query.filename}.png`)
      .resize(parseInt(req.query.width), parseInt(req.query.height))
      .toFile('./img/new_img/resized.png');
  };
  


  export default resize;