class Animal{
    constructor(name){
        this.name=name
        this.speed=0
    }
    run(speed){
        this.speed=speed
        console.log(`${this.name} runs at a speed of ${this.speed}`)
    }
    stop(){
        console.log("from Animal")
    }
    }
//let animal=new Animal("animal")

class rabbit extends Animal{
    stop(){
        console.log("from Rabbit")
        super.stop() // ! in this we have used help of super to call the parent class
    }

}
let rabs=new rabbit("rabbit",10)

//rabs.run(10)
rabs.stop()
