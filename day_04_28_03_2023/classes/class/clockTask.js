class Clock{
    constructor(template){
        this.template=template
    }
    renderClock(){
let date=new Date()
let hours=date.getHours()
let minutes=date.getMinutes()
let seconds=date.getSeconds()
//let output =this.template.replace("h",hours).replace("m",minutes).replace("s",seconds)
console.log(this.template)
    }
    start(){
this.renderClock()
this.timer=setInterval(()=>this.renderClock,1000)
    }
    stop(){
clearInterval(this.timer)
    }
}

let clock=new Clock({template:"h:m:s"})
clock.start()