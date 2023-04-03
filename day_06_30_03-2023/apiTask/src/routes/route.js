const express=require("express")
const router=express.Router()
const{createUser,getUser,updateUser,followUser,getFollowers,loginApi}=require("../controllers/userController.js")

const {userValidator} =require("../middleware/userValidator.js")

router.post("/createUser",userValidator,createUser)
router.get("/getUser",getUser)
router.put("/updateUser",updateUser)
router.put("/followUser",followUser)
router.get("/getFollowers",getFollowers)
router.post("/login",loginApi)




module.exports=router