let user={
    name:"Sandeep",
    age:26
}
// //console.log(typeof user)
// //let userS=JSON.stringify(user)
// let userParse=JSON.parse(user)
// console.log(userParse)

let userAfterStringify=JSON.stringify(user)
let userAfterParse=JSON.parse(userAfterStringify)
console.log(userAfterStringify,userAfterParse)
