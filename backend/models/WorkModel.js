const mongoose = require("mongoose");
const { Schema } = mongoose;

const WorkSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "you must add work title"],
    },
    content: {
      type: String,
      required: [true, "you must add work content"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Work", WorkSchema);
