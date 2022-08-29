const express = require("express");
const router = express.Router();
const {
  getPublicUserInfo,
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

router.get("/", getPublicUserInfo);
router.post("/", registerUser);
router.post("/admin/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
