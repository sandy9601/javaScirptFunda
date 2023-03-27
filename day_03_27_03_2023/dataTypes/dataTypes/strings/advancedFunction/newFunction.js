

function getName(){
    let name="sandy"
//let sayMyName=new Function(name,`console.log(${name})`)
function sayMyName(){
    console.log(name)
}
return sayMyName()
}

//getName()

let sum= new Function(["a","b"],"return a+b")
console.log(sum(1,2))

// ! here we can able to create a function by using new create with strings
//! new function dont have access to outer variables it has only access to inner variables




