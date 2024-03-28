const express = require("express");
const app = express(); // app represents the application
const port = 3000;

// register an endpoint for GET verb with path as /
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});