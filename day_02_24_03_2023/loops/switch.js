// ! here when we want switch to one of cases so we use switch statement

// switch(2){
//     case 1 :console.log("from 1") 
//     break
//     case "2" :console.log("from 2")
//     case 3 :console.log("from 3")
//     case 4 :console.log("from 4")
//     case 5 :console.log("from 5")
//     default :console.log("from default")
// }
// ! we can group multiple cases as one 
// ! there is no break it will continue all the cases from the case it satisfies


// * switch to if
let browser="Chrome"
switch (browser) {
    case 'Edge':
      console.log( "You've got the Edge!" );
      break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      console.log( 'Okay we support these browsers too' );
      break;
  
    default:
      console.log( 'We hope that this page looks ok!' );
  }

  if(browser=='Edge'){
    console.log("you've got the Edge")
  }else if(browser==("Chrome"||"Firefox"||"Safari"||"Opera")){
    console.log("Okay we support these browsers too")
  }else{
    console.log("We hope that this page looks ok!")
  }
