function product(name,type,price){
    this.name=name
    this.type=type
    this.price=price
}
//product.apply(this,["samiya","food",28])

function Food(name,type,price){
    product.apply(this,[name,type,price])
    //product.call(this,name,type,price)
}
let foodProduct=new Food("semiya","food",28)
console.log(foodProduct)