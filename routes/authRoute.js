import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
  testController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();

//routing
// REgister || Method post

router.post("/register", registerController);

//LOGING || POST
router.post("/login", loginController);

//Forgot Password
router.post("/forgot-password", forgotPasswordController);

//test
router.get("/test", requireSignIn, isAdmin, testController);

// Protected user Route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Admin Protected Route Auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
