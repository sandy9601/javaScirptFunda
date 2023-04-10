const dotenv=require("dotenv").config()

  //console.log(Object.getOwnPropertyNames(applicationLogger))

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const route = require("./src/routes/route.js");




app.use(bodyparser.json());
app.use("/", route);

let server=app.listen(process.env.port, () => console.log(`api running on ${process.env.port} and pid ${process.pid}`));

process.on("SIGINT",()=>{
console.log("sigint recieved")
server.close(()=>{
    console.log("server is closed")
    process.exit(0)
})

})

process.on("SIGTERM",()=>{
    console.log("SIGTERM recieved")
    process.exit(0)
    })


   module.exports=server