
const userModel=require("../models/userModel")

const createUser =async (req,res)=>{
const data=req.body
const userCreate=await userModel.create(data)
res.send({message:true,data:userCreate})
}


module.exports={createUser}