const asyncHandler = require("express-async-handler");
const Image = require("../models/ImageModel");
const User = require("../models/UserModel");
// @desc get image
// @route GET api/images
// @access Public
const getImage = asyncHandler(async (req, res) => {
  let image;
  if (req.query.id !== undefined) {
    image = await Image.findById(req.query.id);
    if (!image) {
      res.status(400);
      throw new Error("cant get image");
    }
    res.status(200).json({ image });
  } else {
    res.status(400);
    throw new Error("no id provided");
  }
});

// @desc upload image
// @route POST api/images
// @access Private
const uploadImage = asyncHandler(async (req, res) => {
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

  const image = await Image.create({
    img: req.body.buffer,
  });
  res.status(200).json({ image });
});
