// ! major difference between function and arrow functions are syntax

const assert = require("it/lib/extension");

// * exmaple

let add = (a, b) => a + b; // simple way to use function as arrow function

console.log(add(2, 3));
// ? Replace Function Expressions with arrow functions in the code below:
let confirm="yes"
// function ask(question, yes, no) {
//   if (confirm=="yes") yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function () {
//     console.log("You agreed.");
//   },
//   function () {
//     console.log("You canceled the execution.");
//   }
// );

let ask=(ques,yes,no)=>{
    if(confirm=="yes") yes()
    else no()
}
ask("do you want to come",()=>{
    console.log("yes")
},()=>{
    console.log("no")
})

