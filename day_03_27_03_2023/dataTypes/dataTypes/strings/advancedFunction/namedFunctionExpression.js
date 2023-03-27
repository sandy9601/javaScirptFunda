// let sayName=function name(name){
//     console.log(`my name is ${name}`)
// }

let sayName=function func(name){
 name?console.log(`i'm ${name}`):func("Guest")
    return ""
}

let nameShow=function func (name){
    name?console.log(`i'm ${name}`):func("Guest")
       return ""
   }
   let nameOfSandy=nameShow
   nameShow=null
// nameShow()
// nameShow("sandy")e
nameOfSandy()

// sayName("sandy")
// sayName()
