const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    following: { type: []},
    followers: { type: []},
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);