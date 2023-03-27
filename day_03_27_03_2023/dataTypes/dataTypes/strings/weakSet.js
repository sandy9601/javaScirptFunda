let obj={
    name:"sandy"
}
let obj2={
    name:"sandy"
}
let weakSet=new WeakSet()
weakSet.add(obj)
weakSet.add(obj2)


//obj=0

 //console.log(weakSet)
 console.log(weakSet.has(obj))

// let dog={
//     name:"laxmi"
// }

// let pet=[]
// pet[0]=dog
// dog=null
// pet[0].age=26
//console.log(dog==pet[0])
