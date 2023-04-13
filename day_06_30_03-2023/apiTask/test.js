const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const axios = require('axios')
const chaiHttp =require("chai-http")


chai.use(chaiHttp)




describe('API Tests', () => {
  // let stub;
  //   stub = sinon.stub("chai","request");
  //   const mockData = {
  //     status:201,
  //     name: 'John Doe',
  //     email: 'john.doe@example.com',
  //   };
  //   stub.withArgs('http://localhost:3090').resolves({ data: mockData });


  it('should return mock data from API', async () => {
    const response = await chai.request('http://localhost:3090')
    .get("/getUser")
//console.log(response)
chai.should()
response.should.have.property("body")
  
  });
});
