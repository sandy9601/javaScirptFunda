const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const axios = require('axios')
const chaiHttp =require("chai-http")
chai.use(chaiHttp)

//     const foo = {
//         bar: () => "baz",
//     };
  
//     const fake = sinon.replace(foo, "bar", sinon.fake(foo.bar)); 
// console.log(fake())
// console.log(foo.bar())

// const foo = {
//     bar: () => "baz",
// };

// replace method with a fake one
//const fake = sinon.replace(foo, "bar", sinon.fake.returns("fake value"));

// console.log(foo.bar())

//foo.bar=()=>"fake value"

// console.log(foo.bar())
// const fake=sinon.fake.returns("sandy")

// sinon.replace(console,"log",fake)
const myObj = {};
myObj.prop = function propFn() {
    return "foo";
};



sinon.stub(myObj, "prop").callsFake(function fakeFn() {
    return "bar";
});



console.log(myObj.prop())