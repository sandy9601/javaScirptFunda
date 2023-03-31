const express=require("express")
const router=express.Router()
const{createUser,getUser,updateUser,followUser,getFollowers}=require("../controllers/userController.js")

const {userValidator} =require("../middleware/userValidator.js")

router.post("/createUser",userValidator,createUser)
router.get("/getUser",getUser)
router.put("/updateUser/:userId",updateUser)
router.put("/followUser/:userId",followUser)
router.get("/getUser/:userId",getFollowers)




module.exports=router