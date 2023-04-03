const fs = require("fs");
const bcrypt=require("bcrypt")
const { dbConnect } = require("../models/userModel");

class User{
  constructor(fullName,userName,mobileNumber,email,password){
      this.fullName=fullName
      this.userName=userName
      this.mobileNumber=mobileNumber
      this.email=email
      this.password=password
      this.followers=[]
      this.following=[]
      this.timeStamp=new Date()
  }
}

//* creating user

const createUser = async (req, res) => {
  try {
    let data = req.body;

    let {fullName,userName,mobileNumber,email,password}=data

    const hash = bcrypt.hashSync(password, 10)
    password=hash
    const users = await dbConnect();
    const user  = new User(fullName,userName,mobileNumber,email,password)
    // console.log(user)
    // return res.send({message:"wait"})
    const userCreate = await users.insertOne(user)
    return res.status(201).send({ message: true, data: userCreate });
  } catch (err) {
    return res.status(500).send({ message: false, error: err.message });
  }
};

// * fetching the users data

const getUser = async (req, res) => {
  try {
    const users = await dbConnect();
    const page=req.query.page || 0
    const countPerPage=2

    const userData = await users.find().skip(page*countPerPage).limit(countPerPage).toArray()
    console.log(userData);
    return userData.length > 0
      ? res.status(200).send({ message: true, data: userData })
      : res.status(404).send({ message: false, data: "no User Found" });
  } catch (err) {
    return res.status(500).send({ message: false, error: err.message });
  }
};

// * updatig user

const updateUser = async (req, res) => {
  try {
    const email = req.query;
    const data = req.body;
    const users = await dbConnect();
    const currentUser = await users.find(data).toArray()
  
    if(currentUser.length>0){
      return res.status(400).send({status:false,message:`${Object.keys(data)[0]} already exist use another ${Object.keys(data)[0]}`})
    }
    const updatingUser = await users.updateOne(email, { $set: data });
    return res.send({ message: true, data: updatingUser });
  } catch (err) {
    return res.status(500).send({ message: false, error: err.message });
  }
};

// * following users

const followUser = async (req, res) => {
  try {

    const users = await dbConnect();
    const currentUser = await users.find({ email:req.query.currentUseremail}).toArray()
    const followingUser = await users.find({ email:req.query.followingUseremail }).toArray()

    console.log(currentUser,followingUser)

    const updatingCurrentUser  = await users.updateOne({email:req.query.currentUseremail},{   
      $push: {
        following: {
          userId: followingUser[0]._id,
          userName: followingUser[0].userName,
        },
      },
    },) 
    const updatingFollowingentUser  = await users.updateOne({email:req.query.followingUseremail},{   
      $push: {
        followers : {
          userId: currentUser[0]._id,
          userName: currentUser[0].userName,
        },
      },
    },)

    return res.send({status:true,data:updatingCurrentUser})
  }
catch(err){
  return res.status(500).send({status:false,error:err.message})
}
}


const getFollowers = async (req, res) => {
  const page=req.query.page ||0
  const countPerPage=2
  const dynamicPageCount=page*2+countPerPage
  const users=await dbConnect()
  const userFollowers = (await users.find({ email:req.query.email }).toArray())
  //console.log(userFollowers[0].followers)
  return userFollowers[0].followers.length > 0
    ? res.send({ message: true, data: userFollowers[0].followers.slice(page*2,dynamicPageCount) })
    : res.send({ message: false, data: "no followers" });
};



const loginApi = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users= await dbConnect()
    const loginCheck = await users.find({ email: email }).toArray()
    if (!loginCheck){
      return res.status(404).send({ status: false, message: "no user found" });
    }
    //console.log(bcrypt.compareSync(password, loginCheck[0].password))
      if(!bcrypt.compareSync(password, loginCheck[0].password)){
        return res.status(400).send({ status: false, message: "password wrong" });
      }
  
    fs.appendFile(`${loginCheck[0].userName}.txt`, ` [ ${loginCheck[0]._id} ,{timeStamp:${new Date()}}]`, () =>
      console.log("file created")
    );

    return res.status(200).send({ status: true, message: "login successfull" });
  } catch (err) {
    return res.status(500).send({ status: false, error: err.message });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  followUser,
  getFollowers,
  loginApi,
};
