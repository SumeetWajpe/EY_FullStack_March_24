const fs = require("fs"); // built-in
// Non-blocking way
// fs.readFile("Input.txt", function (err, dataFromTheFile) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(dataFromTheFile.toString());
//   }
// });
//Blocking
const dataFromFile = fs.readFileSync("Input.txt");
console.log(dataFromFile.toString());
console.log("Ended !");
