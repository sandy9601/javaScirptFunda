const fs = require("fs");
const bcrypt = require("bcrypt");
const { dbConnect } = require("../models/userModel");
const log4js = require("log4js");


const erroLoggers = log4js.configure({
  appenders: {
    error: { type: "file", filename: "error.log" },
  },
  categories: {
    default: { appenders: ["error"], level: "debug" },
  },
});

const erroLogger = erroLoggers.getLogger("error")

class User {
  constructor(fullName, userName, mobileNumber, email, password) {
    this.fullName = fullName;
    this.userName = userName;
    this.mobileNumber = mobileNumber;
    this.email = email;
    this.password = password;
    this.followers = [];
    this.following = [];
    this.timeStamp = new Date();
  }
}

//* creating user

const createUser = async (req, res) => {
  try {
    let data = req.body;

    let { fullName, userName, mobileNumber, email, password } = data;
    const hash = bcrypt.hashSync(password, 10);
    password = hash;
    const users = await dbConnect();
    const user = new User(fullName, userName, mobileNumber, email, password);
    const userCreate = await users.insertOne(user);

const createdUserLoggs=log4js.configure({
  appenders:{
  createCheck:{
    type:"file",filename:`${userName}.log`
  }},
  categories:{default:{appenders:["createCheck"],level:"debug"}}
})
const userCreating =createdUserLoggs.getLogger("createCheck")
userCreating.log(`user created ${fullName}`)
    return res.status(201).send({ message: true, data: userCreate });
  } catch (err) {
    erroLogger.error(err.message);
    return res.status(500).send({ message: false, error: err.message });
  }
};

// * fetching the users data

const getUser = async (req, res) => {
  try {
    const users = await dbConnect();
    const page = req.query.page || 0;
    const countPerPage = 2;

    const userData = await users
      .find()
      .skip(page * countPerPage)
      .limit(countPerPage)
      .toArray();
    return userData.length > 0
      ? res.status(200).send({ message: true, data: userData })
      : res.status(404).send({ message: false, data: "no User Found" });
  } catch (err) {
    erroLogger.error(err.message);
    return res.status(500).send({ message: false, error: err.message });
  }
};

// * updatig user

const updateUser = async (req, res) => {
  try {

    const email = req.query;
    const data = req.body;
    const users = await dbConnect();
    const currentUser = await users.find(data).toArray();

    if (currentUser.length > 0) {
      return res.status(400).send({
        status: false,
        message: `${Object.keys(data)[0]} already exist use another ${
          Object.keys(data)[0]
        }`,
      });
    }
    const updatingUser = await users.updateOne(email, { $set: data })
    const loggingUser= await users.find(email).toArray()
    //.log(loggingUser,email)
    const logger4js = log4js.configure({
      appenders: {
        updateCheck: { type: "file",filename:`${loggingUser[0].userName}.log`} ,
      },
      categories: {
        default: { appenders: ["updateCheck"], level: "debug" },
      },
    });
    
    const logger = logger4js.getLogger("updateCheck");
    logger.log(`userDetails updated ${Object.keys(data)},${Object.values(data)}`)


    return res.send({ message: true, data: updatingUser });
  } catch (err) {
    erroLogger.error(err.message);
    return res.status(500).send({ message: false, error: err.message });
  }
};

// * following users

const followUser = async (req, res) => {

  try {

    const users = await dbConnect();

    const currentUser = await users
      .find({ email: req.query.currentUseremail })
      .toArray();

if(currentUser.length==0){
  return res.status(404).send({status:false,message:`no user found with ${ req.query.currentUseremail}`})
}

    const followingUser = await users
      .find({ email: req.query.followingUseremail })
      .toArray();

      if(followingUser.length==0){
        return res.status(404).send({status:false,message:`no user found with ${ req.query.followingUseremail}`})
      }



    const updatingCurrentUser = await users.updateOne(
      { email: req.query.currentUseremail },
      {
        $push: {
          following: {
            userId: followingUser[0]._id,
            userName: followingUser[0].userName,
            userEmail:followingUser[0].email
          },
        },
      }
    );
    const updatingFollowingentUser = await users.updateOne(
      { email: req.query.followingUseremail },
      {
        $push: {
          followers: {
            userId: currentUser[0]._id,
            userName: currentUser[0].userName,
          },
        },
      }
    );

    (function (){ 
      const currentUserLoggs = log4js.configure({
        appenders: {
          followedCheck: { type: "file",filename:`${currentUser[0].userName}.log`} ,
        },
        categories: {
          default: { appenders: ["followedCheck"], level: "debug" },
        },
      });
      const currentUserLogger = currentUserLoggs.getLogger("followedCheck")
      currentUserLogger.log(` you are followed  ${followingUser[0].fullName} ,${followingUser[0].userName},${followingUser[0]._id}`)
      })()
    return res.send({ status: true, data: updatingCurrentUser });
 
  } catch (err) {
    erroLogger.error(err.message);
    return res.status(500).send({ status: false, error: err.message });
  }
};

const getFollowers = async (req, res) => {
  try {
    const page = req.query.page || 0;
    const countPerPage = 2;
    const dynamicPageCount = page * 2 + countPerPage;
    const users = await dbConnect();
    const userFollowers = await users
      .find({ email: req.query.email })
      .toArray();
    return userFollowers[0].followers.length > 0
      ? res.send({
          message: true,
          data: userFollowers[0].followers.slice(page * 2, dynamicPageCount),
        })
      : res.send({ message: false, data: "no followers" });
  } catch (err) {
    erroLogger.error(err.message);
    return res.status(500).send({ status: false, message: err.message });
  }
};




const loginApi = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await dbConnect();
    const loginCheck = await users.find({ email: email }).toArray();

    if (!loginCheck) {
      return res.status(404).send({ status: false, message: "no user found" });
    }

    const logger4js = log4js.configure({
      appenders: {
        loginCheck: { type: "file",filename:`${loginCheck[0].userName}.log`} ,
      },
      categories: {
        default: { appenders: ["loginCheck"], level: "debug" },
      },
    });
    
    const logger = logger4js.getLogger("loginCheck");

    if (!bcrypt.compareSync(password, loginCheck[0].password)) {
     
      logger.error("entered wrong password")

      return res.status(400).send({ status: false, message: "password wrong" });
    }
    logger.log(`you are logged in userId:${loginCheck[0]._id},userName:${loginCheck[0].userName}`)
   

    return res.status(200).send({ status: true, message: "login successfull" });

    //    return res.send("wait")
    // fs.appendFile(
    //   `${loginCheck[0].userName}.txt`,
    //   ` [ ${loginCheck[0]._id} ,{timeStamp:${new Date()}}]`,
    //   () => console.log("file created")
    // );

    //  return res.status(200).send({ status: true, message: "login successfull" });
  } catch (err) {
    erroLogger.error(err.message);
    return res.status(500).send({ status: false, error: err });
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
