const User = require("../model/user");
const bcrypt = require("bcrypt");

const create = async (req, res) => {
  try {
    let data = req.body;
    data.password = bcrypt.hashSync(data.password, bcrypt.genSaltSync());
    console.log(data);
    let user = await User.create(data);
    delete user.password;
    return res.status(200).json({
      msg: "Success!",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      msg: `User creation failed ${err}`,
    });
  }
};
const login = async (req, res) => {
  console.log("login");
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  console.log(user);
  if (user == null) {
    return res.status(400).json({
      msg: `User does not exists`,
    });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    console.log("password don't match");
    return res.status(400).json({
      msg: `User password does not match`,
    });
  }
  res.status(200).json({
    user,
    msg: "Success!",
  });
};
const get = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    return res.status(200).json({
      msg: user,
    });
  } catch (err) {
    return res.status(400).json({
      msg: `User not found failed ${err}`,
    });
  }
};

module.exports = {
  login,
  create,
  get,
};
