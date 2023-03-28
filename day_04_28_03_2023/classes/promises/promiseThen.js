let promise=new Promise((resolve,reject)=>{
    resolve(2)
})
promise
.finally(()=>console.log("from finally"))
.then((resolve)=>console.log(resolve))//,//()=>console.log("from reject"))
.catch(()=>console.log(new Error("from catch")))

