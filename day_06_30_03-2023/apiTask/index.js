const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const route = require("./src/routes/route.js");




app.use(bodyparser.json());
app.use("/", route);

app.listen(8081 || process.env.port, () => console.log("api running on 8081"));

