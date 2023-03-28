// function* generator(){
// yield 1
// yield 2
// yield 3
// yield 4
// return 5
// }

// let genFunc=generator()

// for(let value of genFunc){
//     console.log(value);
// }

// *console.log(Object.getOwnPropertyNames(genFunc()))   // => Object [Generator] {}

//console.log(Object.getOwnPropertyNames(genFunc.next()))
function* pseudoRandom(seed) {
    let value = seed;
  
    while(true) {
      value = Math.floor(Math.random()*1e6)
      yield value;
    }
  
  };
  
  let generator = pseudoRandom(1);
  console.log(generator.next().value)
  console.log(generator.next().value)

// for(let value of generator){
//     console.log(value);
// }