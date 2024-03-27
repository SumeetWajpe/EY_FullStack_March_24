const fs = require("fs");

const readableStream = fs.createReadStream("Input.txt", "utf-8");
const writableStream = fs.createWriteStream("Output.txt", "utf-8");

let dataToBeWritten = "";
// readableStream.on("data", chunk => {
//   console.log("\r\n >>>>>>>>>>>>>>>>>>> CHUNCK >>>>>>>>>>>>>>>>>>>>> \r\n");
//   dataToBeWritten += chunk;
//   //   console.log(chunk);
// });

// readableStream.on("end", () => {
//   writableStream.write(dataToBeWritten);
//   writableStream.end();
// });

readableStream.pipe(writableStream);
console.log("Ended !");
