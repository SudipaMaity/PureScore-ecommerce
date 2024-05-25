import express from "express";
// import formidable from "express-formidable";
import multer from "multer";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  fetchProductController,
  // fetchProductImageController,
  fetchSingleProductController,
  updateProductController,
  deleteProductController,
  searchProductController,
  productListController,
  productCategoryController,
} from "../controllers/productController.js";

export const router = express.Router();

const upload = multer({ dest: "uploads/" });

// create products
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  upload.single("image"),
  createProductController
);
// router.post(
//   "/create-product",
//   requireSignIn,
//   isAdmin,
//   formidable(),
//   createProductController
// );

// update
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  upload.single("image"),
  updateProductController
);
// router.put(
//   "/update-product/:pid",
//   requireSignIn,
//   isAdmin,
//   formidable(),
//   updateProductController
// );

// fetch products
router.get("/fetch-product", fetchProductController);

// fetch single product
router.get("/fetch-single-product/:pid", fetchSingleProductController);

// fetch image
// router.get("/fetch-Product-Image/:pid", fetchProductImageController);

// delete
router.delete(
  "/delete-product/:pid",
  requireSignIn,
  isAdmin,
  deleteProductController
);

// pagination
router.get("/product-list/:page", productListController);

// search
router.get("/search/:keyword", searchProductController);

// fetch product using category
router.get("/product-category/:id", productCategoryController);

export default router;
