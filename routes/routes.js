import express from "express";

// Methods
import { userSignup } from "../controller/user-controller.js";

const router = express.Router();

// SignUp Route
router.post("/signup", () => userSignup);

export default router;
