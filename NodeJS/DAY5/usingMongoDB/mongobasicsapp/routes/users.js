var express = require("express");
var router = express.Router();

const User = require("../models/users.model");
/* GET users listing. */
router.get("/", async function (req, res) {
  try {
    //fetch all users
    let users = await User.find({});
    res.json({ users });
  } catch (error) {}
});

router.post("/new", async (req, res) => {
  try {
    let newUser = req.body;
    let userToBeInserted = new User({ ...newUser });
    let result = await userToBeInserted.save();
    res.json({ result });
  } catch (error) {}
});

module.exports = router;
