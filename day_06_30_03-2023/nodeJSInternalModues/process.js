//console.log(Object.getOwnPropertyNames(process.env));

process.argv

process.on("sayName",()=>console.log("my name is sandy"))

process.on("sayName",()=>console.log("my name is sana"))
process.on("sayName",()=>console.log("my name is raju"))

process.emit("sayName")
//process.exit(0)