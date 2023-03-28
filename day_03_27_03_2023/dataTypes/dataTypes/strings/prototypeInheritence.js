let animal={
    eatsGrass:true,
    eat(){
        this.eat=true
    }
}
let rabbit={
    jumps:true
}

rabbit.__proto__=animal
//abbit["eatsGrass"]=false
console.log(animal.eatsGrass,rabbit.eatsGrass)


// console.log(Object.keys(rabbit))
// console.log(rabbit.eatsGrass)
// for(i in rabbit){
//     console.log(i)
// }