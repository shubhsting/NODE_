const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors());
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: '*',
    }
});

io.on("connection", function (socket) {
    console.log(`${socket.id} connected`);
});

http.listen(3000, () => {
    console.log("listening on *:3000");
});