import { httpServer } from "./src/http_server/index";
import { WebSocketServer, WebSocket, createWebSocketStream } from 'ws';
import {socketHandling} from './src/controllers/socketHandling';

const HTTP_PORT = 8181;
const WS_PORT = 8080;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({port: WS_PORT});

try {
    wss.on("connection", async (ws: WebSocket)=>{
        const stream = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });
        console.log('Websocket Start!');
        stream.on('data', async (ch:string)=>{
            await socketHandling(ch, stream);
        });
        ws.send(`ws_start 8080`);

        ws.on('close', ()=>{
            console.log('Websocket close!');
        })
    })
} catch (err) {
    console.log('someError:', err);
}

process.on('SIGINT', () => {
    console.log('Websocket close!');
    wss.close();
    process.exit();
});


