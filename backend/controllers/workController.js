const asyncHandler = require("express-async-handler");
const Work = require("../models/WorkModel");
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
  if (!req.body.title || !req.body.content) {
    res.status(400);
    throw new Error("please add all fields");
  }
  const work = await Work.create({
    title: req.body.title,
    content: req.body.content,
  });
  res.status(200).json({ work });
});

//@desc post works
//@route POST api/works
//@access Private
const updateWork = asyncHandler(async (req, res) => {
  const work = await Work.findById(req.body.id);
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
  if (!work) {
    res.status(400);
    throw new Error("Work not found");
  }
  await Work.findByIdAndDelete(req.body.id);
  res.status(200).json({ message: `delete Work ${req.body.id}` });
});

module.exports = { getWork, setWork, updateWork, deleteWork };
