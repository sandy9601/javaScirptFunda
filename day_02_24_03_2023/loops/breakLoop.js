// * if we want break the loop before exucuting the whole loop
// let a=0
// while(a<5){
//     console.log(a++)
//     if(a==3)
//     break // * here we are breaking the loop when a value is equal to 3
// }

// * continue is used to skip the pirticular iteration

for(let j=0;j<6;j++){
    if(j==2) continue // ? here we are not consoling the value of j=2 becuase we are skipping
    console.log(j)
}