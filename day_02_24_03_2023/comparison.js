// ! we can use some operators like > < != and <= ,>= fro comparision

// * we get the boolean as result for comparison

console.log(4==5)

console.log("z">"alzzz") // here lexographical comparison is happening first character of first string is compared to first character in secodn string

console.log("a".charCodeAt(0))
console.log("A".charCodeAt(0))
console.log("a">"A")

// === will check the values withour type conversion


// ! funny with null

console.log(null>=0) // => here we get null is greater than equl to zero but we cannot get one of its value is true 
console.log(null===0) //=>false
console.log(null>0) //=> false

console.log(undefined==NaN)

console.log("22">"32")

// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary” order.
// When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
// The values null and undefined equal == each other and do not equal any other value.
// Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.

