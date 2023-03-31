const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const route = require("./src/routes/route.js");
app.use(bodyparser.json());
app.use("/", route);

mongoose
  .connect(
    "mongodb+srv://SandeepDarshanam:9866203258Aa@cluster0.pr0hn.mongodb.net/albaneroApi",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));
app.listen(8081 || process.env.port, () => console.log("api running on 8081"));
