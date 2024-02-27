import express from "express";
import { signUpUsers } from "../queries/signUpUsers.js";
import { loginMiddleware } from "../middleware/login.js";
import {
  loginUser,
  recordsUserController,
} from "../controllers/userController.js";
import { signUpController } from "../controllers/userController.js";
import { tokenCheck } from "../middleware/tokenCheck.js";

const userRouter = express.Router();

userRouter.post("/users/signup", signUpController);

userRouter.post("/users/login", loginMiddleware, loginUser);

userRouter.get("/users/token", tokenCheck);

userRouter.post("/records/post", recordsUserController);

export default userRouter;
