import express from "express";
import formidable from "express-formidable";
import {
  addSliderController,
  fetchSliderController,
  updateSliderController,
  deleteSliderController,
  fetchSliderImageController,
} from "../controllers/sliderController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

export const router = express.Router();

// add slider
router.post(
  "/add-slider",
  requireSignIn,
  isAdmin,
  formidable(),
  addSliderController
);

// update slider
router.put(
  "/update-slider/:id",
  requireSignIn,
  isAdmin,
  formidable(),
  updateSliderController
);

// fetch all slider
router.get("/fetch-sliders", fetchSliderController);

// fetch slider image
router.get("/fetch-slider-image/:id", fetchSliderImageController);

// delete silder
router.delete(
  "/delete-slider/:id",
  requireSignIn,
  isAdmin,
  deleteSliderController
);

export default router;
