class User{
    name="sandy"
}

let sandy=new User()
console.log(Object.getOwnPropertyNames(sandy)) // * here we get the properties defiened in original class
console.log(Object.getOwnPropertyNames(User)) // *==> here we get only properties assosiated with classes

//console.log(sandy)