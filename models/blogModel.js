import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      require: true,
    },
    blog: {
      type: String,
      require: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("blog", blogSchema);
