class User {
  constructor(name) {
    this.name = name;
  }
  sayName = () => {
    console.log(this.name);
  };
}

let sandy = new User("sandy");

//sandy.sayName();

//setTimeout(sandy.sayName, 1000);
