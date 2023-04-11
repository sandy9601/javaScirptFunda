const chai=require("chai")
const {expect,assert} = require("chai")
const server=require("./index.js")
const chaiHttp =require("chai-http")


chai.use(chaiHttp)


describe("ApiTesting" , function(){
    it("createUser",async function(){
        let res=await chai.request(server)
        .post("/createUser")
        .send({
            "fullName":"trivikra srinivas",
            "userName":"trivikramSrinivas",
            "mobileNumber":9603989615,
            "email":"trivikramSrinivas@gmail.com",
            "password":"trivikramSrinivas123"
            })
            .set("Content-Type","application/json")
            .set("Accept","application/json")
            expect(res).to.have.status(201)

    })
    
it("getUsers", async function(){
    const res= await chai.request(server)
    .get("/getUser")
    
    expect(res).to.have.status(200)
})


it("followUser",async function(){
    const res=await chai.request(server)
    .put("/followUser")
    .send({
        "currentUseremail":"maheshBabu@gmail.com",
        "followingUseremail":"trivikramSrinivas@gmail.com"
        })
        .set("Content-Type","application/json")
        .set("Accept","application/json")
        expect(res).to.have.status(200)

})

it("getFollowers",async function(){
    const res= await chai.request(server)
    .get("/getFollowers")
    .send({ "email":"trivikramSrinivas@gmail.com" })
    .set("Content_type","application/json")
    .set("Accept","application/json")
    chai.should()
    //console.log(res.body)
    res.should.have.property("body")
    //expect(res).to.have.status(200)
})

it("updateUser",async function(){
const res = await chai.request(server)
.patch("/updateUser")
.send({
    "email":"trivikramSrinivas@gmail.com",
    "userName":"matalaMantrikudu"
})
.set("Content-Type","application/json")
.set("Accept","application/json")
chai.should()
res.should.have.property("body")

})


it("deleteUser",async function(){
    const res = await chai.request(server)
    .delete("/deletUser")
    .send({"email":"trivikramSrinivas@gmail.com"})
    .set("Content-type","application/json")
    .set("Accept","application/json")

    expect(res).to.have.status(200)

})

it("getSingleUser",async function(){
    const res = await chai.request(server)
    .get("/getSingleUser")
    .send({"email":"vivekAthrddddddeya@gmail.com"})
    .set("Content-Type","application/json")
    .set("Accept","application/json")

    //expect(res).to.have.status(404)
   //expect(res).to.have.status(200)

})


})





console.log(new Date())
