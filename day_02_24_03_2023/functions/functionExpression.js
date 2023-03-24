// ! in javascript function expression is a syntax used to store a function in a variable

// ! function declaration is a syntax used to store a function

function addition(a,b){
    return a+b   // => function declaration
}

let add=function(a,b){
    return a+b // => function expression
}

console.log(addition(2,3))
console.log(add(2,3))   // ! both will give same answer

// ? the major difference is we cannot access the function expression before its initialization
// ! where as function declarations we can access the function
// * and second one is the syntax of both functions different
