class User{

constructor(name){
    this.name=name
}
static name="sandy" // ! we can assign static properties also
static getName(){ // * when we want limit the methods to original class we have to use static
    console.log(this.name)
}
}

//let sandy=new User("sandy")
User.getName()
console.log(Object.getOwnPropertyNames(User))