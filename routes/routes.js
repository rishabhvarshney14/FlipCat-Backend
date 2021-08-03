import express from "express";

// Methods
import { userSignup, userLogIn } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";

const router = express.Router();

// SignUp Route
router.post("/signup", userSignup);

// Login Route
router.post("/login", userLogIn);

// Products Route
router.get("/products", getProducts);

// Product by Id Route
router.get("/products/:id", getProductById);

export default router;
