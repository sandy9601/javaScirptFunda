// ! structuredClone uses to clone nested objects

let obj={
    name:"sandeep",
    ag:26
}

let obj2=obj  // here we have done a shallow copy 
// ! both obj2 and obj are referecning to the same values

let obj3=structuredClone(obj) // ! here we have done deepCopy