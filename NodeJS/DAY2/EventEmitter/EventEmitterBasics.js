const EventEmitter = require("events");

// publisher
function GetCount(maxCount) {
  let e = new EventEmitter();
  process.nextTick(() => {
    e.emit("data", 1);
  });
  // biz logic
  return e;
}

// subscriber
let evtEmitter = GetCount(10);
evtEmitter.on("data", function (count) {
  console.log("Data Emitted with " + count);
});
