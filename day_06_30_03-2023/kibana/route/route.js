const express = require("express")
const router = express.Router()

const{search} = require("../controller/controller.js")

router.get("/search",search)

module.exports=router

