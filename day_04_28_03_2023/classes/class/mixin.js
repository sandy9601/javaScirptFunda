class User{
    constructor(name){
        this.name=name
    }
}

let sayHi={
    sayHi(){
        console.log(`hello ${this.name}`)    }
}

Object.assign(User.prototype,sayHi)
//console.log(User.prototype)
new User("sandy").sayHi()

