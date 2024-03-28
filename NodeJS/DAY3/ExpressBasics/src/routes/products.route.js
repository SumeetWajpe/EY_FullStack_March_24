const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let products = [
    { id: 1, title: "Laptop", price: 100000 },
    { id: 2, title: "LED TV", price: 50000 },
  ];
  res.json(products);
});
router.get("/products/:id", (req, res) => {
  let products = [
    { id: 1, title: "Laptop", price: 100000 },
    { id: 2, title: "LED TV", price: 50000 },
  ];
  let id = +req.params.id; // read the parameter
  let theProduct = products.find(p => p.id == id);

  res.json(theProduct);
});

module.exports = router;
