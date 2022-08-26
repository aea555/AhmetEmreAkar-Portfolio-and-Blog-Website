const asyncHandler = require("express-async-handler");
const Work = require("../models/WorkModel");
const User = require("../models/UserModel");
//@desc get Work
//@route GET api/works
//@access Public
const getWork = asyncHandler(async (req, res) => {
  let works;
  if (req.query.id !== undefined) {
    console.log(req.query.id);
    works = await Work.findById(req.query.id);
    if (!works) {
      res.status(400);
      throw new Error("cant get Work");
    }
    res.status(200).json({ works });
  } else {
    works = await Work.find();
    if (!works) {
      res.status(400);
      throw new Error("cant get all works");
    }
    res.status(200).json({ works });
  }
});

//@desc post Work
//@route POST api/works
//@access Private
const setWork = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  // Check if user exists
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (user.role !== "admin") {
    res.status(400);
    throw new Error("you are not an admin");
  }

  if (!req.body.title || !req.body.content) {
    res.status(400);
    throw new Error("please add all fields");
  }
  const work = await Work.create({
    title: req.body.title,
    content: req.body.content,
    author: user.id,
  });
  res.status(200).json({ work });
});

//@desc post works
//@route POST api/works
//@access Private
const updateWork = asyncHandler(async (req, res) => {
  const work = await Work.findById(req.body.id);
  const user = await User.findById(req.user.id);

  // Check if user exists
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (req.user.role !== "admin") {
    res.status(400);
    throw new Error("you are not an admin");
  }

  // Make sure the logged in user matches the user that made the request
  if (work.author._id.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorized to update");
  }

  if (!work) {
    res.status(400);
    throw new Error("Work not found");
  }
  const updatedWork = await Work.findByIdAndUpdate(req.body.id, {
    title: req.body.title,
    content: req.body.content,
  });
  res.status(200).json({ updatedWork });
});

// @desc    delete Work
// @route   DELETE api/works
// @access  Private
const deleteWork = asyncHandler(async (req, res) => {
  const work = await Work.findById(req.body.id);
  const user = await User.findById(req.user.id);

  // Check if user exists
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }

  if (req.user.role !== "admin") {
    res.status(400);
    throw new Error("you are not an admin");
  }

  // Make sure the logged in user matches the user that made the request
  if (work.author._id.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorized to delete");
  }

  if (!work) {
    res.status(400);
    throw new Error("Work not found");
  }
  await Work.findByIdAndDelete(req.body.id);
  res.status(200).json({ message: `delete Work ${req.body.id}` });
});

module.exports = { getWork, setWork, updateWork, deleteWork };
