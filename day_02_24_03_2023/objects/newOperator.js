// ! new is a key word used to create a new instance of object


function User(name,age,){
this.name=name
this.age=age
this.isUserPrime=true
}

let sanaUser= new User("sana",26)
console.log(sanaUser)
let sandyUser=new User("sandeep",27)

console.log(sanaUser)
console.log(sandyUser)
// User { name: 'sana', age: 26, isUserPrime: true }
// User { name: 'sandeep', age: 27, isUserPrime: true }

