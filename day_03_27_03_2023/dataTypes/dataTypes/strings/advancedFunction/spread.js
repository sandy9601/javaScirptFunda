function sum(...arg) {
  let sum = 0;
  //console.log(arguments);
  for (let i of arg) {
    sum += i;
  }
  return sum;
}

console.log(sum(1, 2, 3));
