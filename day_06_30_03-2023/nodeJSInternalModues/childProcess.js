const {exec,execFile,spawn}=require("child_process")

// exec(`pwd`,(err,data,stderr)=>{
//     if(err){
//         console.log("from err" + err);
//         return
//     }else if(stderr){
//         console.log("from stderr"+ stderr);
//         return
//     }
//     else if(data){
//         console.log(data);
//     }
// })

const child=spawn("ls",["-lh"])

child.stdout("data",(data)=>console.log(data))