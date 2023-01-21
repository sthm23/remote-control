import { Duplex } from 'stream';
import { mouse } from "@nut-tree/nut-js";
import { getPrintScrean } from './getPrintScrean';

export async function printScreen(com:string, stream:Duplex) {
    try {
        const {x, y} = await mouse.getPosition();
        await getPrintScrean(+x, +y, stream);
        console.log(com);
    } catch (err) {
        console.log(err);
    }
    
}