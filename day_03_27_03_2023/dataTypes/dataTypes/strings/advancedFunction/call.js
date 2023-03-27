function getAnimalDeatails() {
  return console.log(this.name + " " + "sleepiing cycle is " + this.sleepHours);
}

function CreateUser(name, sleepHours) {
  this.name = name;
  this.sleepHours = sleepHours;
}

let dog = new CreateUser("dog", "10 to 15");
let cat = new CreateUser("cat", "7 to 10");
let eagle = new CreateUser("eagle", "8 to 11");
let fly = new CreateUser("fly", "9 to 20");

//console.log(dog);
getAnimalDeatails.call(dog);
getAnimalDeatails.call(cat);
getAnimalDeatails.call(eagle);
getAnimalDeatails.call(fly);
