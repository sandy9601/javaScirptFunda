

const email=Symbol("sandyEmail") // whenever we want hide some keys in object propertieswe can use Symbol data type

const obj={
    fname:"sandeep",
    lname:"sana"
}
obj[email]="sandy@gmail.com"

console.log(Object.keys(obj))

console.log(Symbol.for("s"))