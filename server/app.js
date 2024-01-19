import express from 'express';
import { Server } from "socket.io";
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
    res.send('hello world');
})


app.listen(3000, () => {
    console.log("server is running on port 3000")
});
