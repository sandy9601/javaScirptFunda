// ! automated test cases check
// * we have mocha and chai sinon

function pow(a,b){
    return (a**b)
}

console.log(pow(10,2))

describe("pow",function(){
    function makeTest(a,b){
        let mul=1
        for(let i=0;i<b;i++){
         mul*=a
        }
        it(`${a} in the power ${b} is ${mul}`, function() {
            assert.equal(pow(a, b), mul);
          });
        }
    }
)