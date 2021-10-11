const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.end("realtime colors app");
});

const votes = {
  vikings: 0,
  bridgerton: 0,
  the_witcher: 0,
  anne_with_an_e: 0,
};

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("new-vote", votes);

  socket.on("new-vote", (vote) => {
    console.log("New Vote:", vote);
    votes[vote] += 1;
    console.log(votes);
    io.emit("new-vote", votes);
  });

  socket.on("disconnect", () => console.log("a user disconnected"));
});

server.listen(5000, () => {
  console.log("listening on *:5000");
});
