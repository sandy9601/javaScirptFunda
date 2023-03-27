let user={
    fname:"sandy",
    lname:"darshanam",
    get fullName(){
        return this.fname+" "+this.lname
    },
    set fullName(value){
[this.fname,this.lname]=value.split(" ")
    }
}
console.log(user.fullName)
user.fullName="sandy sana"
console.log(user.fullName)