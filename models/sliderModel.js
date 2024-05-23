import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String,
    // required: true,
  },
  title: {
    type: String,
  },
  url: {
    type: String,
  },
});

export default mongoose.model("slider", sliderSchema);
