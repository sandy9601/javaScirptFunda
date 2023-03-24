// ? We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

function sumValuesOfObject(obj) {
  let sum = 0;
  for (let i of Object.values(obj)) {
    sum += i;
  }
  return sum;
}
console.log(sumValuesOfObject(salaries));
