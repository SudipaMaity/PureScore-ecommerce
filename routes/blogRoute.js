import express from "express";
import formidable from "express-formidable"; //for image storage
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createBlogController,
  deleteBlogController,
  fetchBlogImageController,
  fetchBlogsController,
  fetchSingleBlogController,
  updateBlogController,
} from "../controllers/blogController.js";

export const router = express.Router();

// routes

// create blog
router.post(
  "/create-blog",
  requireSignIn,
  isAdmin,
  formidable(),
  createBlogController
);

// update
router.put(
  "/update-blog/:bid",
  // "/update-blog/:slug",
  requireSignIn,
  isAdmin,
  formidable(),
  updateBlogController
);

// fetch
router.get("/fetch-blogs", fetchBlogsController);

// with image
// router.get("/fetch-blogs", fetchBlogsController);

router.get("/fetch-single-blog/:bid", fetchSingleBlogController);

router.get("/fetch-blogs-image", fetchBlogImageController);

router.delete(
  "/delete-blog/:bid",
  requireSignIn,
  isAdmin,
  deleteBlogController
);

export default router;
