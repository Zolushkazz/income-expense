import express from "express";
import { signUpUsers } from "../queries/signUpUsers.js";
import { loginMiddleware } from "../middleware/login.js";
import { loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/users/signup", signUpUsers);

userRouter.post("/users/login", loginMiddleware, loginUser);

export default userRouter;
