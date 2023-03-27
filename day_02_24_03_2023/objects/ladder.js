let ladder={
step:0,
    up(){
this.step++
return this
    },
    down(){
        this.step--
        return this
    },
    showSteps(){
        console.log(this.step)
        return this
    }
}
// ladder.up()
// ladder.down()
// ladder.showSteps()
ladder
.up()
.up()
.down()
.showSteps()
.down()
.showSteps()
