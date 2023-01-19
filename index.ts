import { httpServer } from "./src/http_server/index";
import {socketHandling} from './src/controllers/socketHandling';
import { RawData, WebSocketServer, WebSocket, createWebSocketStream } from 'ws';


const HTTP_PORT = 8181;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({port: WS_PORT});

wss.on("connection", (ws: WebSocket)=>{
    const stream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
    stream.on('data', async (ch:string)=>{
        const [event, param, param2] = ch.split(' ');
        console.log(ch);
        console.log(event);
        stream.write(`${event} px`);
    })
    stream.write(`ws_start`);

    // ws.on('message', (data:RawData)=>{
    //     socketHandling(data.toString(), ws)
    //     // ws.send(data.toString()+' px')
    //     // console.log('data');
    // });
    ws.on('close', ()=>{
        console.log('ws closing');
    })
})



