// ! weakMap has to be object as key and value is 

let obj={
    name:"sandy",
    age:25
}

let weakMap=new WeakMap()
weakMap.set(obj,"sandyData")
// obj={
//     name:"sana"
// }
console.log(weakMap)

console.log(weakMap.has(obj))