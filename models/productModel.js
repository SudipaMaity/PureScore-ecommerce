import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    // image: {
    //   data: Buffer,
    //   contentType: String,
    // },
    image: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      required: true,
    },
    // mrp: {
    //   type: Number,
    //   required: true,
    // },
    quantity: {
      type: Number,
      required: true,
    },
    short_desc: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    // status: {
    //   type: Number,
    //   default: 1,
    // },
    shipping: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("product", productSchema);
