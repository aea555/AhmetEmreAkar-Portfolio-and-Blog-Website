const express = require("express");
const router = express.Router();
const {
  getBlog,
  getBlogById,
  setBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.route("/").get(getBlog).post(setBlog);
router.route("/:id").put(updateBlog).delete(deleteBlog);

module.exports = router;
