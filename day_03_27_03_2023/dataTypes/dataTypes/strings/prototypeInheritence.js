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
console.log(animal.eat)
rabbit.eat()

// console.log(Object.keys(rabbit))
// console.log(rabbit.eatsGrass)
for(i in rabbit){
    console.log(i)
}