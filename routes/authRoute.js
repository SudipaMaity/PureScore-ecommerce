import express from "express";
import {
  registerController,
  loginController,
  forgotPasswordController,
  userAuthController,
  adminDashboard,
  updateProfileController,
} from "../controllers/authController.js"; //import call back function
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
// import { isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// REGISTER || POST
router.post("/register", registerController);

// login || post
router.post("/login", loginController);

// forgot password
router.post("/forgot-password", forgotPasswordController);

// test
// router.get("/test", requireSignIn, isAdmin, testController);

//user protected route
router.get("/user-auth", requireSignIn, userAuthController);

// admin protected route
router.get("/admin-dashboard", requireSignIn, isAdmin, adminDashboard);

// update profile
router.put("/update-profile", requireSignIn, updateProfileController);

export default router;
