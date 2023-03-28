// class User {
//   constructor(fname) {
//     // if (name.length < 4) {
//     // console.log("name shuld contain atleast 4 charcters")
//     // return
//     // }
//     this.fname = fname;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       console.log("name shuld contain atleast 4 charcters")
//       return
//     }
//     this._name = value;
//   }
// }

// let sandy=new User("sandy")
// // console.log(Object.getOwnPropertyNames(sandy))
//  console.log(sandy._name)

class User {
  constructor(name, birthday) {
    this.name = name;
    this.birthday = birthday;
  }
}

let sandy = new User("sandy", new Date(1996, 12, 07));
Object.defineProperty(sandy, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });

  //console.log(sandy.age)
console.log(Object.getOwnPropertyNames(sandy));

//console.log(Object.getOwnPropertyNames(User.prototype.constructor));
