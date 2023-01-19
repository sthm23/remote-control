import { mouse, left, right, up, down } from "@nut-tree/nut-js";
import WebSocket, { createWebSocketStream } from "ws";

export function socketHandling(str:string, ws: WebSocket) {
    const command = str.split(' ');
    const com = command[0];
    const pos = command[1];
    const secCom = command[2];
    
    if(com === 'mouse_up') {
        mouse.move(up(+pos))
        // duplexStream.write(`${com} ${pos} px`)
        // const res = Buffer.from(`${com} ${pos} px`, "utf-8")
        // console.log(res);
        
        
        // ws.send(res)

        // duplexStream.write(`${com} ${pos} px`, 'utf-8')
        // duplexStream.write(Buffer.from(`${com} ${pos} px`, "utf-8"), 'utf-8')

        // ws.send(com +'\ '+ pos +'\ ' +'px')
        
        // ws.send(`${com}\0${pos}px`)



    } else if (com === 'mouse_left') {
        mouse.move(left(+pos))
        ws.send(`mouse\0left\0${pos}\0px`)
    } else if (com === 'mouse_down') {
        mouse.move(down(+pos))
        ws.send(com +'&nbsp;'+ pos +'&nbsp;' +'px')
    } else if (com === 'mouse_right') {
        mouse.move(right(+pos))
        ws.send(com +'&nbsp;'+ pos +'&nbsp;' +'px')
    } else if (com === 'draw_square') {
        
    } else if (com === 'draw_rectangle') {
        
    } else if (com === 'draw_circle') {
        
    } else if (com === 'mouse_position') {
        mouse.getPosition().then(res=>ws.send(res.toString()))
    } else {

    }
    
    
}