function showName(name) {
    return name;
  }
  
  let name = "sandy";
  //setTimeout(()=>console.log(name), 1000);
  
  
  function printNUmbers(a,b){
  let current=a
     let timerId= setInterval(()=>
      {
      console.log(current++)
           //current++
           console.log(timerId)
           if(current==b){
           //console.log(timerId)
           clearInterval(timerId)
           }
      },1000)
  }
  printNUmbers(0,3)