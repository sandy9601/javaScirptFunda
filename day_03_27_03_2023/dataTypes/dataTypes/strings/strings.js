let str="sandeep"

let name='sandeep'

let nameOfsandy=`sandeep`

// console.log(str===nameOfsandy)
// console.log(name[0].toUpperCase())

let bigName="hi mhme is Khan"

//console.log(bigName.indexOf("h",6))
// ! strings comparision

let ostrich='Österreich'
let zealand='Zealand'

//console.log(ostrich.charCodeAt(0))
// let number=90
// console.log(String.fromCodePoint(number))

function upperCaseFirstLetter(str){
    return str[0].toUpperCase()+str.slice(1,str.length)
}
//console.log(upperCaseFirstLetter("jhon"))

function spamCheck(str){
    let checkSpamVaigra="vaigra"
    let checkSpamXxx="xxx"
if(str.toLowerCase().includes(checkSpamVaigra) || str.toLowerCase().includes(checkSpamXxx)){
    return true
}
    return false
}

//console.log(spamCheck("XxX check"))

function truncateStr(str,maxLength){
    if(str.length>maxLength){
        str=str.slice(0,maxLength-1)+"..."
    }
    return str
}

//console.log(truncateStr("What I'd like to tell on this topic is",20))
