const { dbConnect } = require("../models/userModel");

class User {
  constructor(fullName, userName, mobileNumber, email, password) {
    this.fullName = fullName;
    this.userName = userName;
    this.mobileNumber = mobileNumber;
    this.email = email;
    this.password = password;
    this.followers = [];
    this.following = [];
  }
  isValid(value) {
    if (typeof value !== "string" || value === null) return false;
    if (typeof value === "string" && value.trim().length === 0) return false;
    return true;
  }
}

const userValidator = async (req, res, next) => {
  let data = req.body;
  const { fullName, userName, mobileNumber, email, password } = data;
  const user = new User(fullName, userName, mobileNumber, email, password);
  const users = await dbConnect();

  if (!user.isValid(fullName)) {
    return res
      .status(400)
      .send({ status: false, message: "fullName needs good formate" });
  }

  if (!user.isValid(userName)) {
    return res
      .status(400)
      .send({ status: false, message: "userName needs good formate" });
  }

  const userNameCheck = await users.find({ userName: userName }).toArray();
  if (userNameCheck.length > 0) {
    return res
      .status(400)
      .send({ status: false, message: "userName already existed " });
  }

  if (
    !/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(mobileNumber)
  ) {
    return res.status(400).send({
      status: false,
      message: `mobileNumber ${mobileNumber} is invalid please enter a valid phone number`,
    });
  }
  const mobileNumberCheck = await users
    .find({ mobileNumber: mobileNumber })
    .toArray();
  if (mobileNumberCheck.length > 0) {
    return res
      .status(400)
      .send({
        status: false,
        message: "mobileNumber already existed user another number",
      });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).send({
      status: false,
      message: `${email} is not a valid formate  for email`,
    });
  }

  const checkEmail = await users.find({ email: email }).toArray();
  if (checkEmail.length > 0) {
    return res.status(400).send({
      status: false,
      message: `${email} is already used please use another email`,
    });
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password)) {
    return res
      .status(400)
      .send({
        status: false,
        message:
          "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number",
      });
  }
  next();
};

module.exports = { userValidator };
