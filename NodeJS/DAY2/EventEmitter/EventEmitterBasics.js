const EventEmitter = require("events");

// publisher
function GetCount(maxCount) {
  let e = new EventEmitter();
  process.nextTick(() => {
    e.emit("start");
    let counter = 0;
    let t = setInterval(() => {
      if (counter < maxCount) {
        e.emit("data", counter++);
      }
      if (counter == maxCount) {
        e.emit("end", counter);
        clearInterval(t);
      }
    }, 500);
  });
  // biz logic
  return e;
}

// subscriber
let evtEmitter = GetCount(10);
evtEmitter.on("start", function () {
  console.log("Started !");
});
evtEmitter.on("data", function (count) {
  console.log("Data Emitted with " + count);
});
evtEmitter.on("end", function () {
  console.log("Ended !");
});
