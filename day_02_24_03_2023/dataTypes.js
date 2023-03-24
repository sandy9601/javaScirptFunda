// ! there are  8 types of data types available for javascripts 

// Number  // all number (2^53-1)
// BigInt // only (after 2^53+1)
// String // three ways to store a string " " => double qoute '' =>singele quote , ``backticks
// null // is a predifined value that has nothing in it
// Boolean // it contains a yes or no value
// undefined // is a predifined value that has not defined anything
// Symbol 

// Object // ! all the above are premetive data types that contains only one value but in object we can store more than one

// ! Task
let name = "Ilya";

console.log( `hello ${1}` ); // ? hello 1

console.log( `hello ${"name"}` ); // ? hello name

console.log( `hello ${name}` ); // ? hello ilya

const sym=Symbol("name")
console.log(sym)