const asyncHandler = require("express-async-handler");
const Blog = require("../models/BlogModel");
const User = require("../models/UserModel");

//@desc get blog
//@route GET api/blogs
//@access Public
const getBlog = asyncHandler(async (req, res) => {
  let blogs;
  // search by id
  if (req.query.id !== undefined) {
    blogs = await Blog.findById(req.query.id);
    if (!blogs) {
      res.status(400);
      throw new Error("cant get blog");
    }
    res.status(200).json({ blogs });
  }
  // search by title
  else if (req.query.title !== undefined) {
    blogs = await Blog.find();
    if (!blogs) {
      res.status(400);
      throw new Error("cant get blog");
    }
    const matches = blogs.map((blog) => {
      if (blog.title.toLowerCase().includes(req.query.title.toLowerCase())) {
        return blog;
      }
    });
    res.status(200).json({ matches });
  }
  // get all blogs
  else {
    blogs = await Blog.find();
    if (!blogs) {
      res.status(400);
      throw new Error("cant get all blogs");
    }
    res.status(200).json({ blogs });
  }
});

//@desc post blog
//@route POST api/blogs
//@access Private
const setBlog = asyncHandler(async (req, res) => {
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

  const blog = await Blog.create({
    title: req.body.title,
    content: req.body.content,
    thumbnail: req.body.thumbnail,
    author: user.id,
  });
  res.status(200).json({ blog });
});

//@desc post blogs
//@route POST api/blogs
//@access Private
const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.body.id);
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
  if (blog.author._id.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorized to update");
  }

  if (!blog) {
    res.status(400);
    throw new Error("blog not found");
  }
  const updatedBlog = await Blog.findByIdAndUpdate(req.body.id, {
    title: req.body.title,
    content: req.body.content,
    thumbnail: req.body.thumbnail,
  });
  res.status(200).json({ updatedBlog });
});

// @desc    delete blog
// @route   DELETE api/blogs
// @access  Private
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.body.id);
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
  if (blog.author._id.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorized to delete");
  }

  if (!blog) {
    res.status(400);
    throw new Error("blog not found");
  }
  await Blog.findByIdAndDelete(req.body.id);
  res.status(200).json({ message: `delete blog ${req.body.id}` });
});

module.exports = { getBlog, setBlog, updateBlog, deleteBlog };
