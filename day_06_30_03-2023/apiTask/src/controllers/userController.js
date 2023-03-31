const userModel = require("../models/userModel");

//* creating user

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const userCreate = await userModel.create(data);
    return res.status(201).send({ message: true, data: userCreate });
  } catch (err) {
    return res.status(500).send({ message: false, error: err.message });
  }
};

// * fetching the users data

const getUser = async (req, res) => {
  try {
    const userData = await userModel.find(req.query);
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
    const userId = req.params.userId;
    const data = req.body;
    const updatedData = await userModel.findOneAndUpdate(
      { _id: userId },
      { $set: data },
      { new: true }
    );
    return res.send({ message: true, data: updatedData });
  } catch (err) {
    return res.status(500).send({ message: false, error: err.message });
  }
};

// * following users

const followUser = async (req, res) => {
  try {
    const currentUser = await userModel.find({ _id: req.params.userId });
     const user=req.query.userName
    const followingUser = await userModel.findOne(req.query);

    if (currentUser[0].userName === followingUser.userName) {
      return res
        .status(400)
        .send({ message: false, data: "you cannot follow you" });
    }

    if (currentUser[0].following.length > 0) {
      for (let following of currentUser[0].following) {
        if (following.userName == followingUser.userName) {
          return res
            .status(400)
            .send({
              message: false,
              data: `you are already follwing ${user}`,
            });
        }
      }
    }

    const updatingCurrentUser = await userModel.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $push: {
          following: {
            userId: followingUser._id,
            userName: followingUser.userName,
          },
        },
      },
      { new: true }
    );
    const updatingFollowingUser = await userModel.findOneAndUpdate(
      req.query,
      {
        $push: {
          followers: {
            userId: currentUser[0]._id,
            userName: currentUser[0].userName,
          },
        },
      },
      { new: true }
    );

    return res.status(200).send({ message: true, data: updatingCurrentUser });
  } catch (err) {
    return res.status(500).send({ message: false, error: err.message });
  }
};



// * get followers

const getFollowers=async (req,res)=>{
    const userFollowers=await userModel.findById({_id:req.params.userId})
    // console.log(req.query,userFollowers)
    // const followers=userFollowers.followers
    // const following=userFollowers.following
    // if(req.query.hasOwnProperty(followers))
    // else if(req.query.hasOwnProperty(following))
    return userFollowers.followers.length>0 ? res.send({message:true,data:userFollowers.followers}) :  res.send({message:false,data:"no followers"})
}

module.exports = { createUser, getUser, updateUser, followUser , getFollowers };
