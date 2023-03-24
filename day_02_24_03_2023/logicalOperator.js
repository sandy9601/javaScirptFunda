// * there are 4 logical opertors in javascript

// ? 1.OR 2.AND 3.NOT 4.NULLISH COALSING

// ! OR it will evaluate any one of the value is true
// ! if first is true it will omit second or any other values

// ! if all the values are false it will return false

// ! if all false returns last faly value

console.log(null || undefined || 0||false)


// * 2.AND it will return only both true

// ! it will not go next arument if firts one is false


// ! 3.NOT it will return opposite of boolean value if true return false if false return true


1&&null&&0  // =>this is not a good practice 

let age=10
// if(age >=14 && age<=90){
//     console.log("you are ready for party")
// }else{
//     console.log("go to your home")
// }
age>14?console.log("you are ready for party"):console.log("go to home")