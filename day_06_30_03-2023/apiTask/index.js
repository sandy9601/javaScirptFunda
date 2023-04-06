const dotenv=require("dotenv").config()
const log4js =require("log4js")
const createdUserLoggs=log4js.configure({
    appenders:{
    applicationLog:{
      type:"file",filename:`application.log`
    }},
    categories:{default:{appenders:["applicationLog"],level:"debug"}}
  })
  const applicationLogger =createdUserLoggs.getLogger("applicationLog")

  console.log(Object.getOwnPropertyNames(applicationLogger))

const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const route = require("./src/routes/route.js");




app.use(bodyparser.json());
app.use("/", route);
const server=app.listen(8081 || process.env.port, () => console.log(`api running on 8081 and pid ${process.pid}`));

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

    module.exports={server,applicationLogger}