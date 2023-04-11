const express=require("express")
const router=express.Router()
const{createUser,getUser,updateUser,followUser,getFollowers,loginApi,deleteUser,getSingleUser}=require("../controllers/userController.js")

const {userValidator} =require("../middleware/userValidator.js")

router.post("/createUser",userValidator,createUser)
router.get("/getUser",getUser)
router.patch("/updateUser",updateUser)
router.put("/followUser",followUser)
router.get("/getFollowers",getFollowers)
router.post("/login",loginApi)
router.delete("/deletUser",deleteUser)
router.get("/getSingleUser",getSingleUser)




module.exports=router