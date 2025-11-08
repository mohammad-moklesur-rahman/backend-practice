import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.config.js";
import productRoute from "./routes/productRoute.js";
import publicProductRoute from "./routes/publicProduct.Route.js";

const app = express();
connectDB();

// * Middleware
app.use(cors());
app.use(express.json());

// * Products Route
app.use("/api/products", productRoute);
app.use("/api/public", publicProductRoute);

// * Root route
app.get("/", (req, res) => {
  res.send("Welcome to backend server!");
});

export default app;
