const User = require("../models/userModel");
const brcypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  console.log(req.body);
  try {
    const { name, email, password, profile } = req.body;

    const emailCheck = await User.findOne({ email });

    if (emailCheck) {
      return res.json({ msg: "Email already used", status: false });
    }

    const hashedPassword = await brcypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profile,
    });

    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.login = async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.json({ msg: "Incorrect username or password", status: false });
    const ispasswordValid = await brcypt.compare(password, user.password);
    if (!ispasswordValid)
      return res.json({ msg: "Incorrect username or password", status: false });
    delete user.password;
    return res.json({ status: true, user });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ _id: { $ne: req.params.id } }).select([
      "email",
      "name",
      "profile",
      "_id",
    ]);
    return res.json(users);
  } catch (ex) {
    next(ex);
  }
};
