import { getDB } from "../config/db.config.js";

export const productsCollection = () => {
  const db = getDB();
  return db.collection("products");
};

export const publicCollection = () => {
  const db = getDB()
  return db.collection('publicProducts')
}
