import { httpServer } from "./src/http_server/index";
import {socketHandling} from './src/controllers/socketHandling';
import { RawData, WebSocketServer, WebSocket, createWebSocketStream } from 'ws';


const HTTP_PORT = 8181;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({port: WS_PORT});

wss.on("connection", (ws: WebSocket)=>{

    ws.on('message', (data:RawData)=>{
        socketHandling(data.toString())
        ws.send(data.toString())
    });

    ws.on('close', ()=>{
        console.log('ws closing');
    })

    // const duplex = createWebSocketStream(ws, { encoding: 'utf8' });
    
    // duplex.pipe(output);
    // input.pipe(duplex);
})



