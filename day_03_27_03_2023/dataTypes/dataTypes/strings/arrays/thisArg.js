let army = {
  minAge: 20,
  maxAge: 25,
  canJoin(user) {
    return user.age > this.minAge && user.age < this.maxAge;
  },
};

let user = [
  {
    age: 16,
  },
  {
    age: 24,
  },
  { age: 25 },
  { age: 28 },
];

console.log(user.filter(army.canJoin));
