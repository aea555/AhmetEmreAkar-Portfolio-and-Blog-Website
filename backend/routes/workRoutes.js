const express = require("express");
const router = express.Router();
const {
  getWork,
  setWork,
  updateWork,
  deleteWork,
} = require("../controllers/workController");

router.route("/").get(getWork).post(setWork).put(updateWork).delete(deleteWork);

module.exports = router;
