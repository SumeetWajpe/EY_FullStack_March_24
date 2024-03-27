const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/" && req.method == "GET") {
    fs.readFile("Index.html", (err, dataFromTheFile) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1 style='color:red'>Something Went Wrong !</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(dataFromTheFile);
      }
    });
  } else if (req.url == "/style.css") {
    fs.readFile("style.css", (err, dataFromTheFile) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1 style='color:red'>Something Went Wrong !</h1>");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(dataFromTheFile);
      }
    });
  } else if (req.url == "/products") {
    let products = [
      { id: 1, title: "Laptop", price: 100000 },
      { id: 2, title: "LED TV", price: 50000 },
    ];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end();
  }
});
// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000");
});
