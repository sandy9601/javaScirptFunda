// ! evryting in javascript is object

// * object are key value pairs to store data 

let user={
    name:"sandeep",
    age:26,
    "state dist":`telangana,hyderabad`
}

console.log(user["state dist"])

// ! we cannot access by .notaion if we want access a key as varaible

let key="name"
console.log(user.key) // * this will gives us an error


console.log(user[key]) // this will gives correct output i es sandeep