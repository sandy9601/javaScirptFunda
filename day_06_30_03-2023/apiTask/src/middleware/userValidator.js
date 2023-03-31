

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
if(!email) return res.status(400).send({status:false,message:"email is missing or invali"})
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).send({
      status: false,
      message: `${email} is not a valid formate  for email`,
    });
  }

  const checkEmail = await userModel.findOne({ email: email });
  if (checkEmail) {
    return res.status(400).send({
      status: false,
      message: `${email} is already used please use another email`,
    });
  }

  console.log(isValid(fullName))
  

  if(!isValid(fullName || !fullName)) return res.status(400).send({status:false,message:"fullName is in invalid formate"})
  const userNameCheck=await userModel.findOne({userName:userName})
  if(userName){
    return res.statua(400).send({status:false,message:"userName already exist change it"})
  }


return res.status(400).send({message:"wait"})

next()

}

module.exports={userValidator}