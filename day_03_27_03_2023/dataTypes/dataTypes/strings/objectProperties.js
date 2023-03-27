let obj={
    name:"sandeep",
    age:26
}

//console.log(Object.keys(obj)[0])
let properyDescription=Object.getOwnPropertyDescriptor(obj,"name")
console.log(properyDescription)