import { Duplex } from "stream";
import { mouse } from "@nut-tree/nut-js";
import { drawSquare } from "./drawSquare";
import { drawRectangular } from "./drawRectangular";
import { drawCircle } from "./drawCircle";

export async function drawFunction(com:string, pos:string, pos2:string, stream:Duplex) {
    const {x, y} = await mouse.getPosition();
    switch (com.split('_')[1]) {
        case 'square':
            // draw_square {px}
            await drawSquare(+x, +y, +pos)
            stream.write(`${com}_${pos}px`);
            console.log(`${com} ${pos}px`);
            break;
        case 'rectangle':
            // draw_rectangle {px} {px}
            await drawRectangular(+x, +y, +pos, +pos2)
            stream.write(`${com}_${pos}px_${pos2}px`);
            console.log(`${com} ${pos}px ${pos2}px`);            
            break;
        case 'circle':
            // draw_circle {px}
            await drawCircle(+x, +y, +pos)
            stream.write(`${com}_${pos}px`);
            console.log(`${com} ${pos}px`);
            break;
        default:
            break;
    }

}