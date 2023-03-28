let User= class Myclass{
    constructor(){

    }
    sayMyclass(){
        console.log(Myclass)
    }
}

//new User().sayMyclass()


// ! dynamic class

function makeClass(name){
    return class{
        sayName(){
            console.log(name)
        }
    }
}

let user=new makeClass("sana") // ! here  user class created dyynamically

let makedUser=new user()  // * if we want to access class directly we have to use function then method

//makedUser.sayName()  // * or else we can access by using another object by using direct.method

//console.log(typeof user,typeof makedUser) // !  ==> function and object respectivley