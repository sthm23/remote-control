import { httpServer } from "./src/http_server/index";
import { mouse } from "@nut-tree/nut-js";
import { WebSocketServer } from 'ws';


const HTTP_PORT = 8181;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: WS_PORT });

wss.on('connection', function connection(ws) {

  ws.on('message', function message(data:Buffer) {
    const mouseCommand = data.toString().split(' ')
    switch (mouseCommand[0]) {
        case 'mouse_up':
            console.log('up')
            ws.send('up');
            break;
        case 'mouse_down':
            console.log('down')
            ws.send('down');
            break;
        case 'mouse_left':
            console.log('left')
            ws.send('left');
            break;
        case 'mouse_right':
            console.log('right')
            ws.send('right');
            break;
        default:
            // console.log('%s',data);
            ws.send(data.toString());
            break;
    }
  });

  
});

wss.on('listening', ()=>{
    console.log(`Start WebSocket server on the ${WS_PORT} port!` );
})