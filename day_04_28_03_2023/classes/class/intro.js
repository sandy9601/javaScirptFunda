// !

class User {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}
User()// * here we get error because calss constructor cannot invoked without new keyword
//let sandy = new User("sandy");
//console.log(User)
//sandy.sayName();
// console.log(typeof sandy) // => object
// console.log(typeof User) // => funciton

//console.log(Object.getOwnPropertyNames(Array.prototype).length)
//console.log(Object.getOwnPropertyNames(sandy));
//console.log(Object.getOwnPropertyNames(User.prototype.sayName)); // => length , name ,prototype

