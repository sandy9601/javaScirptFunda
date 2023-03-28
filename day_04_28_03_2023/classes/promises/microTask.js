let promise =new Promise((res,rej)=>{
    res("resolved")
}).then((res)=>console.log(res))
.catch((rej)=>console.log(rej))

console.log("after promise but printing before promise")
