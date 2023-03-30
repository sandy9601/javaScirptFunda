const EventEmmitter = require("events");

const event = new EventEmmitter();
let c = 10,
  d = 10;
function sum(a, b) {
  console.log(a + b);
}

function mul(a, b) {
  console.log(a * b);
}

event.on("multipleEvents", function firstEvent() {
  sum(c, d);
});
event.on("multipleEvents", function secondEvent() {
  mul(c, d);
});
event.on("sandyEvent", function firstEvent() {
    sum(c, d);
  });
//console.log(event);
//event.emit("multipleEvents", c, d); // * we can pass arguments also from friring an event to catching the event
event.addListener("sandyEvent",()=>console.log("sandyEvent called"))