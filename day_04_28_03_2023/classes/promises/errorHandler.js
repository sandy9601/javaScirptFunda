let promise=new Promise((resolve,reject)=>{
    //new Error
     reject("whoops")
})

promise.then((reject)=>console.log(reject)).catch((reject)=>console.log(reject))

//promise.then((reject)=> console.log(reject),(resolve)=>console.log(resolve))