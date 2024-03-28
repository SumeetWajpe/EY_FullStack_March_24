const express = require("express");
const router = express.Router();
let products = require("../models/products.model");
// 5 products -> product-> id,title,price,rating,likes,imageUrl
router.get("/", (req, res) => {
  res.json(products);
});
router.get("/:id", (req, res) => {
  let id = +req.params.id; // read the parameter
  let theProduct = products.find(p => p.id == id);
  res.json(theProduct);
});

router.post("/new", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.json({ msg: `${newProduct.title} added successfully !` });
});

module.exports = router;
