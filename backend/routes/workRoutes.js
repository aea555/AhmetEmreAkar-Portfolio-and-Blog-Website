const express = require("express");
const router = express.Router();
const {
  getWork,
  setWork,
  updateWork,
  deleteWork,
} = require("../controllers/workController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(getWork).post(protect, setWork).put(protect, updateWork).delete(protect, deleteWork);

module.exports = router;
