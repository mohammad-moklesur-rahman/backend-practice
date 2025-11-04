import express from "express";
import { createProduct, getProduct } from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProduct).post(createProduct);

export default router;
