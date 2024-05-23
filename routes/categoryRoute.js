import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createCategoryController,
  deleteCategoryController,
  fetchCategoryController,
  fetchSingleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";

export const router = express.Router();

// routes

// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//fetch categories
router.get("/fetch-category", fetchCategoryController);

// fetch single category
router.get("/single-category/:id", fetchSingleCategoryController);

// delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
