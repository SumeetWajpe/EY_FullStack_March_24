const fs = require("fs"); // built-in
fs.readFile("Input.txt", function (err, dataFromTheFile) {
  if (err) {
    console.log(err);
  } else {
    console.log(dataFromTheFile.toString());
  }
});
console.log("Ended !");
