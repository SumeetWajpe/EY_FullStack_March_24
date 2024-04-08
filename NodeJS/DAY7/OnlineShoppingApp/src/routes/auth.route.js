const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secretKey = "SecretKey";
router.post("/", (req, res) => {
  let username = req.body.username;
  let pwd = req.body.password;
  console.log(username, pwd);
  // verify it with the credentials (db)
  jwt.sign(
    { user: username },
    secretKey,
    { expiresIn: "2 Days", algorithm: "HS256" },
    function (err, token) {
      console.log(token);
      return res.json({ token });
    },
  );
});
module.exports = router;
