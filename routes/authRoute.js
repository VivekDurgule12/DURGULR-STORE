import express from "express";
import {
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

//test
router.get("/test", requireSignIn, isAdmin, testController);

// Protected Route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
