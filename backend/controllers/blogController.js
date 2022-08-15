const asyncHandler = require("express-async-handler");
const Blog = require("../models/BlogModel");

//@desc get blog
//@route GET api/blogs
//@access Public
const getBlog = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.status(200).json({ blogs });
});

//@desc post blog
//@route POST api/blogs
//@access Private
const setBlog = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.content) {
    res.status(400);
    throw new Error("please add all fields");
  }
  const blog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
  });
  res.status(200).json({ blog });
});

//@desc post blogs
//@route POST api/blogs
//@access Private
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(400);
    throw new Error("blog not found");
  }
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    content: req.body.content,
  });
  res.status(200).json({ updatedBlog });
});

// @desc    delete blog
// @route   DELETE api/blogs
// @access  Private
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    res.status(400);
    throw new Error("blog not found");
  }
  await Goal.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: `delete goal ${req.params.id}` });
});

module.exports = { getBlog, setBlog, updateBlog, deleteBlog };
