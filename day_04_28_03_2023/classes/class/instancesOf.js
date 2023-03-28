class Animal{
static [Symbol.hasInstance](Rabbit){
if(Rabbit.canEat){
    return true
}
}
getName(){
    console.log("from animal")
}
}

let Rabbit={canEat:true}
console.log(Rabbit)
//Rabbit.getName()

// class Rabbit extends Animal{

// }

// let rabbit=new Rabbit()

//console.log(Rabbit instanceof Animal)