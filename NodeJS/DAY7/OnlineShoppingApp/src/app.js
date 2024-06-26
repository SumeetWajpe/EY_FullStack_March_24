const express = require("express");
const cors = require("cors");

const app = express(); // app represents the application
const port = 3100;

const productsRouter = require("./routes/products.route");
const authRouter = require("./routes/auth.route");
require("dotenv").config();
// middlewares
app.use(express.static("src/static")); // add express.static as a middleware
app.use(express.json());
app.use(cors()); // enables CORS for all endpoints in the app (use with caution)

// view engine
app.set("views", "src/views");
app.set("view engine", "pug");
// routes
app.use("/products", productsRouter); // register the products router with the application
app.use("/signin", authRouter);
// register an endpoint for GET verb with path as /
app.get("/", (req, res) => {
  //   res.send("<h1>Hello World!</h1>");
  res.sendFile("Index.html", { root: __dirname });
});

// app.get("/style.css", (req, res) => {
//   //   res.send("<h1>Hello World!</h1>");
//   res.sendFile("style.css", { root: __dirname });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
