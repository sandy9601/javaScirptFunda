// ! automatically some conversions done in javascript
// * but some times we can explicitly convert them to other types

// ? 1.converting to string 
// ! String(value)==> that will gives the typeof value as String
const number=2
console.log(typeof String(number))

// * 2.to Number

const string="hello"

console.log(typeof Number(string))

console.log(typeof("2"/"3"))

console.log(Number(null),Number(undefined))
// ! numeric conversion null becomes 0 and undefined becomes NaN
// * true becomes 1 and false becomes 0