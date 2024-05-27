import express from "express";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
import {
  createMessageController,
  deleteMessageController,
  fetchMessageController,
  fetchSingleMessageController,
} from "../controllers/contactController.js";

export const router = express.Router();

// create message
router.post("/create-message", createMessageController);

// fetch messages
router.get("/fetch-message", requireSignIn, isAdmin, fetchMessageController);

// fetch single message
router.get(
  "/fetch-single/:id",
  requireSignIn,
  isAdmin,
  fetchSingleMessageController
);

router.delete(
  "/delete-message/:id",
  requireSignIn,
  isAdmin,
  deleteMessageController
);

export default router;
