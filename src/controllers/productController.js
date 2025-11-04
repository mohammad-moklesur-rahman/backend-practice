import { productsCollection } from "../models/productsModel.js";

// * Get All products
export const getProduct = async (req, res) => {
  const result = await productsCollection().find().toArray();
  res.send(result)
};

// * Create producte
export const createProduct = async (req, res) => {
  const doc = req.body;
  const result = await productsCollection().insertOne(doc);
  res.send(result);
};
