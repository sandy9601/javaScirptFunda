const { MongoClient } = require("mongodb")

const url="mongodb+srv://SandeepDarshanam:9866203258Aa@cluster0.pr0hn.mongodb.net"
const client =new MongoClient(url)
//const dbName="albaneroApi"

const dbName="albaneroApi"

async function dbConnect(){
    const result= await client.connect()
    const db=result.db(dbName)
    console.log("mongodb connected")
    return db.collection("users")

}


// const createStudents= async ()=>{
// const students= await dbConnect()

// const dataOfStudents=await students.insertMany( [
//     { "_id" : 1, "tests" : [ 95, 92, 90 ], "modified" :new Date() },
//     { "_id" : 2, "tests" : [ 94, 88, 90 ], "modified" : new Date() },
//     { "_id" : 3, "tests" : [ 70, 75, 82 ], "modified" : new Date() }
//  ] );
  
//  return dataOfStudents
// const updateStudent= await students.updateMany(
//     { },
//     [
//       { $set: { average : { $trunc: [ { $avg: "$tests" }, 0 ] }, modified: "$$NOW" } },
//       { $set: { grade: { $switch: {
//                             branches: [
//                                 { case: { $gte: [ "$average", 90 ] }, then: "A" },
//                                 { case: { $gte: [ "$average", 80 ] }, then: "B" },
//                                 { case: { $gte: [ "$average", 70 ] }, then: "C" },
//                                 { case: { $gte: [ "$average", 60 ] }, then: "D" }
//                             ],
//                             default: "F"
//       } } } }
//     ]
//  )
//  console.log(updateStudent)
// }
// createStudents()




module.exports = {dbConnect}