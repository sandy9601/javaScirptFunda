const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL;

const client = new MongoClient(url);
//console.log(url)

const dbName = "myAlbanero";

async function dbConnect() {
  const result = await client.connect();
  const db = result.db(dbName);
  console.log("mongodb connected");
  return db.collection("albaneroUsers");
}


module.exports = { dbConnect };
