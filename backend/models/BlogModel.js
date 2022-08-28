const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "you must add blog title"],
    },
    content: {
      type: String,
      required: [true, "you must add blog content"],
    },
    thumbnail: {
      type: String,
      required: [true, "you must add blog thumbnail"],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
