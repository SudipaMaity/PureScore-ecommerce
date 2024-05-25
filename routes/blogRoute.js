import express from "express";
import formidable from "express-formidable"; //for image storage
import multer from "multer";
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

const upload = multer({ dest: "uploads/" });

// routes

// create blog
// router.post(
//   "/create-blog",
//   requireSignIn,
//   isAdmin,
//   formidable(),
//   createBlogController
// );
router.post(
  "/create-blog",
  requireSignIn,
  isAdmin,
  upload.single("image"),
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

router.get("/fetch-blogs-image/:bid", fetchBlogImageController);

router.delete(
  "/delete-blog/:bid",
  requireSignIn,
  isAdmin,
  deleteBlogController
);

export default router;
