class Animal{
  
}

class Rabbit extends Animal{

constructor(name,age,food){
    super()
    this.name=name
    this.age=age
    this.food=food
}
getName(){
    console.log(this.name)
}
getAge(){
    console.log(this.age)
}
food(){
    console.log(this.food)
}
} 

let rabbit=new Rabbit("whiteRabbit",6,"grass")  // !without super we get error 

rabbit.getName()