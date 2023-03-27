String.prototype.show=function(){
    console.log(this)
}
//"sandy".show()

let obj={
    0:"sandeep",
    1:"sandy"
}

obj.join=Array.prototype.join
console.log(obj.join(","))
