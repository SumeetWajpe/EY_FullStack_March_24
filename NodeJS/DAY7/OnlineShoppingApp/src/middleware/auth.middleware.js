const jwt = require("jsonwebtoken")
function isAuthenticated(req, res, next) {
  try {
    if (req.headers.authorization) {
      let authValue = req.headers.authorization;
      let token = authValue.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
        if (!err) {
          console.log(decodedToken);
          next();
        } else if (err) {
          return res.status(401).send("Invalid Token");
        }
      });
    } else {
      return res.status(500).send("Token Missing !");
    }
  } catch (err) {
    // err
    console.log("Error :" + err);
  }
}

module.exports.isAuthenticated = isAuthenticated;
