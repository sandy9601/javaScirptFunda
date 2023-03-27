function createUser(name, age, job, state, faveHero) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.state = state;
  this.faveHero = faveHero;
}

function getMydetails() {
  console.log(
    `   my name is ${this.name},
        iam ${this.age},
        my job is ${this.job},
        iam from ${this.state},
        my fav hero ${this.faveHero}
        `
  );
}


let sandeep = new createUser(
  "sandy",
  26,
  "software",
  "telangana",
  "maheshbabu"
);
// let sana = new createUser("sana", 30, "software", "assam", "prabhas");
// let venkey = new createUser(
//   "venkatesh",
//   19,
//   "trainDriver",
//   "odissa",
//   "venkatesh"
// );
// let mahesh = new createUser(
//   "mahesh",
//   20,
//   "houseKeeping",
//   "bhihar",
//   "salmankhan"
// );

// console.log(sandeep)
// console.log(sana)
// console.log(venkey)
// console.log(mahesh)

getMydetails.apply(sandeep,["sana"]);
