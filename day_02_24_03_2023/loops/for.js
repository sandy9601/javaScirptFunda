// ! for(begin:condition:evaluete)

for (let i = 0; i < 5; i++) {
  //console.log("hi")
}
// ! here inline variable declaration has happened
// * that means the value of i is accessible in that loop only

for (let j = 0; j < 5; ++j) {
  // console.log("hello from j")
} // * Task Use the for loop to output even numbers from 2 to 10.

// for(let i=1;i<=10;++i){
//     if(i%2!==0) continue
//         console.log(i)

// }
// let i=1
// while(i<=10){
//     if(i%2==0){
//     console.log(i)
//         }
//        i++
// }

//! repeat the loop untill it matches to correct value

// for(let i=0;i<10;i++){
//     if(i==5){
//     console.log(i)
//     break
//     }
// }

// * print prime numbers from  1 to n

function checkPrime(n){
    for(let i=2;i<n;i++){
        if(n % i ==0){
            return false
        }
    }
        return n>1?true:false
    
}
for(let i=2;i<100;i++){
    if(checkPrime(i)){
    console.log(i)
    }
}

//console.log(checkPrime(5))
