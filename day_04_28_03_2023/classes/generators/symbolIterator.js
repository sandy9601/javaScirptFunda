let obj = {
  from: 0,
  to: 5,
  //   [Symbol.iterator]() {
  //     this.current = this.from;
  //     return this;
  //   },
  //   next() {
  //     if (this.current <= this.to) {
  //       return { done: false, value: this.current++ };
  //     } else {
  //       return { done: true };
  //     }
  //   },
};

// for(let value of obj){
//     console.log(value)
// }

let res = Object.getOwnPropertyNames(Symbol);
//console.log(res);

let range = {
  from: 0,
  to: 05,
  [Symbol.asyncIterator]() {
    return {
      current: this.from,
      last: this.to,
      async next() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (this.curerent <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};
(async () => {
  for await (let value of range) {
    console.log(value);
  }
})();
