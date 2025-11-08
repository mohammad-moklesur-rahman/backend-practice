import { ObjectId } from "mongodb";
import {
  productsCollection,
  publicCollection,
} from "../models/productsModel.js";

// * Get Single Product
export const singleProduct = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await productsCollection().find(query).toArray();
  res.send(result);
};

// * Get All products
export const getProduct = async (req, res) => {
  const result = await productsCollection().find().toArray();
  res.send(result);
};

// * get Public Products
export const getPublicProducts = async (req, res) => {
  const result = await publicCollection().find().toArray();
  res.send(result);
};

// * Create producte
export const createProduct = async (req, res) => {
  const doc = req.body;
  const result = await productsCollection().insertOne(doc);
  res.send(result);
};

// * Delete Product
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await productsCollection().deleteOne(query);
  res.send(result);
};
