const EventEmmitter=require("events")


const event =new EventEmmitter()

//console.log(event);


event.on("sayName",()=>console.log("hi sandy"))
event.on("sayName",()=>console.log("from second on"))
event.on("sayName",()=>console.log("from third on"))
event.on("sayName",()=>console.log("from fourth on"))

event.emit("sayName")





//console.log(Object.getOwnPropertyNames(event))