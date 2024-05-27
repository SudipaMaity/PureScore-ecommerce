import sliderModel from "../models/sliderModel.js";
// import slugify from "slugify";
import fs from "fs";

// add slider
export const addSliderController = async (req, res) => {
  try {
    const { title, url } = req.fields;
    const { image } = req.files;
    if (!image) {
      return res.send({ error: "image is required" });
    }
    const slider = new sliderModel({
      ...req.fields,
    });
    if (image) {
      slider.image.data = fs.readFileSync(image.path);
      slider.image.contentType = image.type;
    }
    await slider.save();
    res.status(200).send({
      success: true,
      message: "Slider added Successfully",
      slider,
    });
    await slider.save();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      error,
      message: "error while adding slider",
    });
  }
};

// update slider
export const updateSliderController = async (req, res) => {
  try {
    const { title, url } = req.fields;
    const { image } = req.files;
    if (!image) {
      return res.send({ error: "image is required" });
    }
    const slider = await sliderModel.findByIdAndUpdate(
      req.params.id,
      {
        ...req.fields,
      },
      { new: true }
    );
    if (image) {
      slider.image.data = fs.readFileSync(image.path);
      slider.image.contentType = image.type;
    }
    await slider.save();
    res.status(200).send({
      success: true,
      message: "slider update successfully",
      slider,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while updating product",
      error,
    });
  }
};

// fetch
export const fetchSliderController = async (req, res) => {
  try {
    const slides = await sliderModel
      .find({})
      .select("-image")
      .limit(4)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalSlides: slides.length,
      message: "All slides",
      slides,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      error,
      message: "error while fetching slides",
    });
  }
};

// fetch image
export const fetchSliderImageController = async (req, res) => {
  try {
    const slides = await sliderModel
      .findById(req.params.id)
      .select("image")
      .limit(4);
    if (slides.image.data) {
      res.set("contentType", slides.image.contentType);
      return res.status(200).send(slides.image.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      error,
      message: "error while fetching slides",
    });
  }
};

// delete slider
export const deleteSliderController = async (req, res) => {
  try {
    const slider = await sliderModel
      .findByIdAndDelete(req.params.id)
      .select("-image");
    res.status(200).send({
      success: true,
      message: "slider deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "error while deleting slider",
    });
  }
};
