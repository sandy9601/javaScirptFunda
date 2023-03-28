class Animal {
  static planet = "earth";
  constructor(name) {
    this.name;
  }
  static getName() {
    console.log(this.planet);
  }
}

class Rabbit extends Animal {
  constructor(name, speed, food) {
    super();
    this.name = name;
    this.speed = speed;
    this.food = food;
  }
}
let whiteRabbit = new Rabbit("whiteRabbit", 40, "grass");
let blackRabbit = new Rabbit("blackRabbit", 35, "carrate");
console.log(whiteRabbit.getName())