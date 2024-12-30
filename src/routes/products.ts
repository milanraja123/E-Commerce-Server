import express from "express";
import {
  allReviewsOfProduct,
  deleteProduct,
  deleteReview,
  getAdminProducts,
  getAllCategories,
  getAllProducts,
  getSingleProduct,
  getlatestProducts,
  newProduct,
  newReview,
  updateProduct,
} from "../controllers/product.js";
import { adminOnly } from "../middlewares/auth.js";
import { mutliUpload } from "../middlewares/multer.js";

const router = express.Router();

//To Create New Product
router.post("/new", adminOnly, mutliUpload, newProduct);

//To get all Products with filters
router.get("/all", getAllProducts);

//To get last 10 Products
router.get("/latest", getlatestProducts);

//To get all unique Categories
router.get("/categories", getAllCategories);

//To get all Products
router.get("/admin-products", adminOnly, getAdminProducts);

// To get, update, delete Product
router
  .route("/:id")
  .get(getSingleProduct)
  .put(adminOnly, mutliUpload, updateProduct)
  .delete(adminOnly, deleteProduct);

router.get("/reviews/:id", allReviewsOfProduct);
router.post("/review/new/:id", newReview);
router.delete("/review/:id", deleteReview);

export default router;
