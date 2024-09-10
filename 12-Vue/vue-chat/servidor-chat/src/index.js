const express = require('express');
const { createServer } = require('node:http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["POST", "GET"]
  }
});

app.get('/', function (req, res) {
  res.json({
    test: "test2"
  });
})

io.on('connection', (socket) => {
  const user = socket.handshake.query.user;

  console.log(user, 'se ha conectado');

  socket.on("chat message", (value) => {
    console.log("Message:", value);

      io.emit("chat message", {
        id: crypto.randomUUID(),
        user: user,
        message: value
      });
  })

  socket.on('disconnect', () => {
    console.log(user, 'se ha desconectado');
  });
});

server.listen(3000, () => {
  console.log("Server on port 3000");
})