const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
fname:{
    type:String,
},
lanme:{
    type:String
},
following:{type :[]},
followers:{
    type:[]
}
},{timestamps:true})

module.exports=mongoose.model("User",userSchema)