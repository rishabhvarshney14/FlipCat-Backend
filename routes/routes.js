import express from "express";

// Methods
import { userSignup, userLogIn } from "../controller/user-controller.js";

const router = express.Router();

// SignUp Route
router.post("/signup", userSignup);

// Login Route
router.post("/login", userLogIn);

export default router;
