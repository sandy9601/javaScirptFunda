const nock = require('nock');
const chai=require("chai")
const {expect,assert} = require("chai")
const server=require("./index.js")
const chaiHttp =require("chai-http")
chai.use(chaiHttp)

const url='http://localhost:3090'

  nock(url)
  .persist()
  .post('/createUser',{
    "fullName":"namo venkat",
    "userName":"namoVenkat",
    "mobileNumber":9603679609,
    "email":"namoVenkat@gmail.com",
    "password":"namoVenkat123"
    })
  .reply(201,{status:true})


  nock(url)
  .get('/getUser')
  .reply(404, {
    "message": true,
    "data": {
        "acknowledged": true,
        "insertedId": "someId"
    }
});

  // Test the function using the mock endpoint

  describe("testingData",function (){

it("mockCreateUser",async function(){
  const res = await chai.request(url)
  .post("/createUser")
  .send({
    "fullName":"namo venkat",
    "userName":"namoVenkat",
    "mobileNumber":9603679609,
    "email":"namoVenkat@gmail.com",
    "password":"namoVenkat123"
    })
  .set("Content-Type","application/json")
  .set("Accpet","application/json")

  expect(res).to.have.status(201)
})

  it("mockGetUser",async function(){
    const data = await chai.request(url)
    .get("/getUser")
    expect(data).to.have.status(404)   
})






}
  )