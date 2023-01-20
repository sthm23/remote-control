import { Duplex } from "stream";
import { mouse } from "@nut-tree/nut-js";
import { drawSquare } from "./drawSquare";

export async function drawFunction(com:string, pos:string, pos2:string, stream:Duplex) {
    const {x, y} = await mouse.getPosition();
    switch (com.split('_')[1]) {
        case 'square':
            // draw_square {px}
            await drawSquare(+x, +y, +pos)
            break;
        case 'rectangle':
            // draw_rectangle {px} {px}

            break;
        case 'circle':
            // draw_circle {px}

            break;
        default:
            break;
    }

}