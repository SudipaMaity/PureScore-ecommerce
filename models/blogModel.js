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
    // image: {
    //   data: Buffer,
    //   contentType: String,
    // },
    image: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("blog", blogSchema);
