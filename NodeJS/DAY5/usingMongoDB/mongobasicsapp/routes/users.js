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

module.exports = router;
