import express from "express";
import { getPublicProducts } from "../controllers/productController.js";

const router = express.Router();

router.route('/')
  .get(getPublicProducts)


export default router;
