import jwt from "jsonwebtoken";
import express from "express"; // app represents the application
const app = express();
const port = 3000;
const secretKey = "MySecretKey";

// register an endpoint for GET verb with path as /
app.get("/signin", (req, res) => {
  jwt.sign(
    { user: "sumeet" },
    secretKey,
    { expiresIn: "2 Days", algorithm: "HS256" },
    function (err, token) {
      console.log(token);
      return res.json({ token });
    },
  );
});

app.post("/verify", (req, res) => {
  try {
    if (req.headers.authorization) {
      let authValue = req.headers.authorization;
      let token = authValue.split(" ")[1];
      jwt.verify(token, secretKey, (err, decodedToken) => {
        if (!err) {
          console.log(decodedToken);
          return res.json({ success: "Success !" });
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
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
