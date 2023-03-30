const cluster =require("cluster")

if(cluster.isWorker){
    console.log("im worker")
}
    else{
        console.log("im master");
        cluster.fork()
    }
