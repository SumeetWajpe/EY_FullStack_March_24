const http = require("http");
const socket = require("socket.io");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const readableStream = fs.createReadStream("clientpeer.html");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    readableStream.pipe(res);
  }
});

var io = socket(server);
io.sockets.on("connection", skt => {
  setInterval(() => {
    let dataToBeSent = new Date();
    skt.emit("msg_from_server_peer", dataToBeSent);
  }, 2000);
  skt.on("msg_from_client_peer", dataReceivedFromClient => {
    console.log(dataReceivedFromClient);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running @ port ${port}`);
});
