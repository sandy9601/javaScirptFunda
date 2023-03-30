const EventEmmitter=require("events")

const event=new EventEmmitter()


event.once("sayName",()=>console.log("from once"))

event.prependOnceListener("sayName",()=>console.log("from prep"))

event.once("sayName",()=>console.log("from once"))

event.on("sayName",()=>console.log("from second"))

event.emit("sayName")