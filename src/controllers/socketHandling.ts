import { Duplex } from "stream";
import {moveMouse} from './moveMouse';
import {printScreen} from './printScreen';
import {drawFunction} from './drawFunction';

export async function socketHandling(ch:string, stream:Duplex) {
    const [com, pos, pos2] = ch.split(' ');

    if(com.startsWith('mouse')){
        await moveMouse(com, pos, stream)
    } else if (com.startsWith('draw')) {
        await drawFunction(com, pos, pos2, stream)
    } else {
        await printScreen(com, stream);
    }
}