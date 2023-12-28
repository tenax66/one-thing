const express = require("express");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.Server(app);
const io = socketio(server);

const PORT = process.env.PORT || 3000;

// routing
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// run
server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

io.on("connection", (socket) => {
  console.log(`new user connected: ${socket.id}`);

  io.on("disconnect", () => {
    console.log(`user disconnected: ${socket.id}`);
  });
});