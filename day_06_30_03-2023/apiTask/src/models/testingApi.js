const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://SandeepDarshanam:9866203258Aa@cluster0.pr0hn.mongodb.net";

const client = new MongoClient(url);
const dbName = "testingAlbanero";

async function getConnection() {
  const result = await client.connect();
  const db = result.db(dbName);
  return db.collection("testStudents");
}

async function insertMany() {
  const testingStudents = await getConnection();
  const insertedData = await testingStudents.insertMany([
    {
      _id: 0,
      name: "Pepperoni",
      size: "small",
      price: 19,
      quantity: 10,
      date: "2021-03-13T08:14:30Z",
    },
    {
      _id: 1,
      name: "Pepperoni",
      size: "medium",
      price: 20,
      quantity: 20,
      date: "2021-03-13T09:13:24Z",
    },
    {
      _id: 2,
      name: "Pepperoni",
      size: "large",
      price: 21,
      quantity: 30,
      date: "2021-03-17T09:22:12Z",
    },
    {
      _id: 3,
      name: "Cheese",
      size: "small",
      price: 12,
      quantity: 15,
      date: "2021-03-13T11:21:39.736Z",
    },
    {
      _id: 4,
      name: "Cheese",
      size: "medium",
      price: 13,
      quantity: 50,
      date: "2022-01-12T21:23:13.331Z",
    },
    {
      _id: 5,
      name: "Cheese",
      size: "large",
      price: 14,
      quantity: 10,
      date: "2022-01-12T05:08:13Z",
    },
    {
      _id: 6,
      name: "Vegan",
      size: "small",
      price: 17,
      quantity: 10,
      date: "2021-01-13T05:08:13Z",
    },
    {
      _id: 7,
      name: "Vegan",
      size: "medium",
      price: 18,
      quantity: 10,
      date: "2021-01-13T05:10:13Z",
    },
  ]);
}

const findData = async () => {
  const testingStudents = await getConnection();
  const data = await testingStudents.find().toArray();
  console.log(data);
};

const upsert = async () => {
  const testingStudents = await getConnection();
  const updateData = await testingStudents.updateOne(
    { name: "sana" },
    {
      $set: {
        _id: 8,
        size: "large",
        price: 20,
        quantity: 40,
        date: "2021-01-13T05:10:13Z",
      },
    },
    {
      upsert: true,
    }
  );
};

// Calculate Total Order Quantity
// The following aggregation pipeline example contains
// two stages and returns the total order quantity of medium size pizzas grouped by pizza name:
// upsert();
// findData();

const aggregate = async () => {
  const pizzas = await getConnection();
  const totalQuantity = await pizzas
    .aggregate([
      {
        $group: {
          _id: "$price",
          allDocs: { $push: "$$ROOT" },
        },
      },
    ])
    .toArray();
};

const aggregateSum = async () => {
  const pizzas = await getConnection();
  const pipeline = await pizzas
    .aggregate([
      { $match: { size: "medium" } },
      { $group: { _id: "$name", totalSum: { $sum: "$quantity" } } },
    ])
    .toArray();
  console.log(pipeline);
};

aggregateSum();
