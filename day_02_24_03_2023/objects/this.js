// ?A function that is a property of an object is called its method

let user = {
  sayHi: "hello",
  sayHello: () => {
    console.log("hello");
  },
};
let obj = {
  name: "sandeep",
  age: 26,
  sayHi() {
    console.log(this.age);
  },
};

// ! to access the object properties object methods need this key word
// user.sayHi=function(){
//     console.log("hello")
// }

// user.sayHello();
// obj.sayHi();
// console.log(Object.values(obj));

let cars = {
  name: "benz",
  price: 30,
  sayNme() {
    sayPrice= () => {
        console.log(this.price);
      }
    console.log(this.name);
    sayPrice()
  },
};

//cars.sayNme()
//cars.sayPrice()


// ! makeuser

function makUser(){
    return {
        name:"jhon",
        ref:this
    }
}
let userDetails=makUser()

console.log(userDetails.ref)