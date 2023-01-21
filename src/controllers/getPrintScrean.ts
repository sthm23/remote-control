import Jimp from 'jimp';
import { Region, screen } from "@nut-tree/nut-js";
import { Duplex } from 'stream';

export async function getPrintScrean(x:number, y:number, stream: Duplex){
  try {
    const reg = new Region(x, y, 200, 200)
    const {data, width, height} = await screen.grabRegion(reg);
  
    const jimpImg = new Jimp({ data, width, height }, (err:Error, image:Buffer) => {
      if(err) console.log(err);
        return image;
    });
      
    const img = await jimpImg.getBufferAsync('image/png');
    const base64Config = img.toString("base64");
    stream.write(`prnt_scrn ${base64Config}`);
  } catch (err) {
    console.log(err);
  }
}