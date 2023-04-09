const fs = require("fs");
const bcrypt = require("bcrypt");
const { dbConnect } = require("../models/userModel");
const log4js =require("log4js")

//const applicationLogger = require("../../index.js");
const createdUserLoggs=log4js.configure({
  appenders:{
  applicationLog:{
    type:"file",filename:`application.log`
  }},
  categories:{default:{appenders:["applicationLog"],level:"debug"}}
})
const applicationLogger =createdUserLoggs.getLogger("applicationLog")


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
    applicationLogger.log(`user ${fullName} created `);
    return res.status(201).send({ message: true, data: userCreate });
  } catch (err) {
    applicationLogger.error(err.message);
    return res.status(500).send({ message: false, error: err.message });
  }
};

// * fetching the users data

const getUser = async (req, res) => {
  try {
    const albaneroUsers = await dbConnect();
    const page = req.query.page || 0;
    const countPerPage = 2;
    // const userData = await albaneroUsers
    //   .find()
    //   .skip(page * countPerPage)
    //   .limit(countPerPage)
    //   .toArray();

   const agregatedUserData = await albaneroUsers.aggregate([
        { $group : { name : "$$ROOT"} }
      ]).skip(page * countPerPage)
      .limit(countPerPage)
       .toArray()

  
    
    applicationLogger.log(`All usersData fecthed`);
    return agregatedUserData.length > 0
      ? res.status(200).send({ message: true, data: agregatedUserData })
      : res.status(404).send({ message: false, data: "no User Found" });
  } catch (err) {
    applicationLogger.error(err.message);
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
    const updatingUser = await users.updateOne(email, { $set: data });
    applicationLogger.log(
      `userDetails updated ${Object.keys(data)},${Object.values(data)}`
    );
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

    if (currentUser.length == 0) {
      return res
        .status(404)
        .send({
          status: false,
          message: `no user found with ${req.query.currentUseremail}`,
        });
    }

    const followingUser = await users
      .find({ email: req.query.followingUseremail })
      .toArray();


    if (followingUser.length == 0) {
      return res
        .status(404)
        .send({
          status: false,
          message: `no user found with ${req.query.followingUseremail}`,
        });
    }

    const updatingCurrentUser = await users.updateOne(
      { email: req.query.currentUseremail },
      {
        $push: {
          following: {
            userId: followingUser[0]._id,
            userName: followingUser[0].userName,
            userEmail: followingUser[0].email,
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
    applicationLogger.log(
      `${currentUser[0].fullName} followed ${followingUser[0].fullName}`
    );
    return res.send({ status: true, data: updatingCurrentUser });
  } catch (err) {
    applicationLogger.error(err.message);
    return res.status(500).send({ status: false, error: err.message });
  }
};


const getFollowers = async (req, res) => {
  try {
    const page = req.query.page || 0;
    const countPerPage = 2;
    const dynamicPageCount = page * 2 + countPerPage;
    const albaneroUsers = await dbConnect();
const agregatedfollowersData = await albaneroUsers.aggregate([{$match : {email:req.query.email}},{ $group : {_id : "$followers"} }]).toArray()

    return agregatedfollowersData[0]._id.length > 0
      ? res.send({
          message: true,
          data: agregatedfollowersData[0]._id.slice(page * 2, dynamicPageCount),
        })
      : res.send({ message: false, data: "no followers" });
  } catch (err) {
    applicationLogger.error(err.message);
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
    if (!bcrypt.compareSync(password, loginCheck[0].password)) {
      applicationLogger.error("entered wrong password");
      return res.status(400).send({ status: false, message: "password wrong" });
    }
    applicationLogger.log(
      `${loginCheck[0].userName} logged in userId:${loginCheck[0]._id}`
    );
    return res.status(200).send({ status: true, message: "login successfull" });
  } catch (err) {
    applicationLogger.error(err.message);
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
