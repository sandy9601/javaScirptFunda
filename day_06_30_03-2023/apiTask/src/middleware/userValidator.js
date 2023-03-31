

const userModel = require("../models/userModel");

const isValid = function (value) {
    if (typeof value !== "string" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
  };
  const isValidUserDetails = (UserDetails) => {
    if (/^(?=.*?[a-zA-Z])[. %?a-zA-Z\d ]+$/.test(UserDetails)) return true;
  };
  
  
  let parseJSONSafely= function(str){
    try {
        return JSON.parse(str);
    } catch (e) {
        return null
    }
  }


const userValidator = async(req,res,next)=>{
    
const{mobileNumber,email,fullName,userName,password}=req.body

if(!mobileNumber) return res.status(400).send({status:false,message:"enter mobileNumber key"})
if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(mobileNumber)) {
    return res.status(400).send({
      status: false,
      message: `mobileNumber ${mobileNumber} is invalid please enter a valid phone number`,
    });
  }
const mobileNumberCheck = await userModel.findOne({mobileNumber:mobileNumber})
if(mobileNumberCheck){
    return res.status(400).send({status:false,message:"mobile already exist"})
}

return res.status(400).send({message:"wait"})

next()

}

module.exports={userValidator}