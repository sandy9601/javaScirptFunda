const chai=require("chai")
const {expect,assert} = require("chai")

const chaiHttp =require("chai-http")

chai.use(chaiHttp)


const server= require("./index.js")

describe("createApiTest" , function(){
    it("post",async function(){
        let res=await chai.request(server)
        .post("/createUser")
        .send({
            "fullName":"amrish puri",
            "userName":"amrishPuri",
            "mobileNumber":9603989613,
            "email":"amrishPuri@gmail.com",
            "password":"amriPshuri123"
            })
            .set("Content-Type","application/json")
            .set("Accept","application/json")
            expect(res).to.have.status(201)

    })
    
it("getApi", async function(){
    const res= await chai.request(server)
    .get("/getUser")

    expect(res).to.have.status(200)
})


})


