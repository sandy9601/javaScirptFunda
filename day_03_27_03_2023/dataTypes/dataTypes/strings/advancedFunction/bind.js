// let user={
//     name:"sandy",
//     nickName:"sana"
// }

// function getName(){
//     console.log(this.name)
//     console.log(this.nickName)
// }

//let getUser=getName.bind(user,["sana"])
//let getUser=getName.bind(user,["sana"])
//let getUser=
//getName.call(user,"sana")
//console.log(getUser)
//getUser()


function car(type,fuelType){
    this.type=type
    this.fuelType=fuelType
}

function SetBrand(brand){
    car.call(this,"convertable","fuel")
    this.brand=brand
    //console.log(this)
}

let benzCarDetails=new SetBrand("benz")
console.log(benzCarDetails)