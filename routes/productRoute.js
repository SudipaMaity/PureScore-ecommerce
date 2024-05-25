import express from "express";
import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  fetchProductController,
  fetchProductImageController,
  fetchSingleProductController,
  updateProductController,
  deleteProductController,
  searchProductController,
  productListController,
  productCategoryController,
  fetchProductWithImageController,
  // fetchSingleProductWithImageController,
} from "../controllers/productController.js";

export const router = express.Router();

// create products
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// update
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// fetch products
router.get("/fetch-product", fetchProductController);

// fetch single product
router.get("/fetch-single-product/:pid", fetchSingleProductController);

// fetch image
router.get("/fetch-Product-Image/:pid", fetchProductImageController);

// fetch all products with image
router.get("/fetch-products-with-image", fetchProductWithImageController);

// router.get(
//   "/fetch-single-product-with-image/:pid",
//   fetchSingleProductWithImageController
// );

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
