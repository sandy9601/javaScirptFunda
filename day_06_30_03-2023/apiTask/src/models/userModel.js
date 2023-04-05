const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URL;

const client = new MongoClient(url);

const dbName = "albaneroApi";

async function dbConnect() {
  const result = await client.connect();
  const db = result.db(dbName);
  console.log("mongodb connected");
  return db.collection("users");
}

module.exports = { dbConnect };
