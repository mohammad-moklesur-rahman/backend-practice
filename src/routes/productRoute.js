import express from "express";
import { createProduct, deleteProduct, getProduct, singleProduct } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/")
  .get(protect, getProduct)
  .post(createProduct);

router.route("/:id")
  .get(protect, singleProduct)
  .delete(protect, deleteProduct)

export default router;
