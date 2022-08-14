import mongoose, { Schema, Model } from "mongoose";

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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);
