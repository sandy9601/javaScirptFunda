// Create a function multiplyNumeric(obj) 
// that multiplies all numeric property values of obj by 2.

// For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj){
    for(let i of Object.keys(obj)){
        if(typeof obj[i] === "number"){
            obj[i]*=2
        }
    }
}
console.log(menu)
multiplyNumeric(menu);
console.log(menu)

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };