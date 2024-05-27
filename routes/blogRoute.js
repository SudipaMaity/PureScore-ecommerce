import express from "express";
// import formidable from "express-formidable";
//for image storage
import multer from "multer";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createBlogController,
  deleteBlogController,
  // fetchBlogImageController,
  fetchBlogsController,
  fetchSingleBlogController,
  updateBlogController,
} from "../controllers/blogController.js";

export const router = express.Router();

const upload = multer({ dest: "uploads/" });
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

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
// router.put(
//   "/update-blog/:bid",
//   // "/update-blog/:slug",
//   requireSignIn,
//   isAdmin,
//   formidable(),
//   updateBlogController
// );
router.put(
  "/update-blog/:bid",
  // "/update-blog/:slug",
  requireSignIn,
  isAdmin,
  upload.single("image"),
  updateBlogController
);

// fetch
router.get("/fetch-blogs", fetchBlogsController);

// fetch with image
// router.get("/fetch-blogs", fetchBlogsController);

// fetch single product
router.get("/fetch-single-blog/:bid", fetchSingleBlogController);

// fetch image
// router.get("/fetch-blogs-image/:bid", fetchBlogImageController);

router.delete(
  "/delete-blog/:bid",
  requireSignIn,
  isAdmin,
  deleteBlogController
);

export default router;
