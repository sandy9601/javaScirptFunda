let promiseOne = new Promise((res, rej) => {
  rej("resolved promiseOne");
});
let promiseTwo = new Promise((res, rej) => {
  rej("rejected promiseTwo");
});
let promiseThree = new Promise((res, rej) => {
  rej("resolved promiseThree");
});

// let promiesAll = Promise.all([promiseOne, promiseTwo, promiseThree, "hi"])
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));
//let promiesAllSEttled = 
// Promise.allSettled([
//   promiseOne,
//   promiseTwo,
//   promiseThree,
//   "hi",
// ])
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));

//   Promise.allSettled([
//     promiseOne,
//     promiseTwo,
//     promiseThree,
//     "hi",
//   ])
//     .then((res) => console.log(res))
//     .catch((rej) => console.log(rej));
  
    // Promise.race([
    //     promiseOne,
    //     promiseTwo,
    //     promiseThree,
    //     "hi",
    //   ])
    //     .then((res) => console.log(res))
    //     .catch((rej) => console.log(rej));
        Promise.any([
            promiseOne,
            promiseTwo,
            promiseThree,
            //"hi",
          ])
            .then((res) => console.log(res))
            .catch((rej) => console.log(rej));
    
       
      