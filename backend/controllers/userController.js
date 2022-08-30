const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @desc Get Public User Info
// @route GET api/users/?id
// @access Public
const getPublicUserInfo = asyncHandler(async (req, res) => {
  if (req.query.id !== undefined || null) {
    const user = await User.findById(req.query.id);
    let name;
    if (!user) {
      res.status(400);
      throw new Error("cant get user");
    } else {
      name = user.name;
    }
    res.status(200).json({ name });
  } else {
    res.status(200);
    throw new Error("no id provided");
  }
});

//@desc Register new user
//@route POST api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please add all fields");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    role: "user",
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc Authenticate a user
//@route POST api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email: email });

  if (!user) {
    res.status(400);
    throw new Error("user does not exist");
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

//@desc Get user data
//@route GET api/users/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: req.user });
});

module.exports = { getPublicUserInfo, registerUser, loginUser, getMe };
