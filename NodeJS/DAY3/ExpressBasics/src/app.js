const express = require("express");
const app = express(); // app represents the application
const port = 3000;

app.use(express.static("src/static")); // add express.static as a middleware

// register an endpoint for GET verb with path as /
app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  res.sendFile("Index.html", { root: __dirname });
});

app.get("/products", (req, res) => {
  let products = [
    { id: 1, title: "Laptop", price: 100000 },
    { id: 2, title: "LED TV", price: 50000 },
  ];
  res.json(products);
});

// app.get("/style.css", (req, res) => {
//   //   res.send("<h1>Hello World!</h1>");
//   res.sendFile("style.css", { root: __dirname });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
