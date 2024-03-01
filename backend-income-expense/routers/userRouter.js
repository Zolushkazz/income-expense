import express from "express";
import { signUpUsers } from "../queries/signUpUsers.js";
import { loginMiddleware } from "../middleware/login.js";
import { recordsUserController } from "../controllers/userController.js";
import { signUpController } from "../controllers/userController.js";
import { tokenCheck } from "../middleware/tokenCheck.js";
import { tokenController } from "../controllers/tokenController.js";
import { verifyUser } from "../queries/tokensQuery.js";

const userRouter = express.Router();

userRouter.post("/users/signup", signUpController);

userRouter.post("/users/login", loginMiddleware, tokenController);

userRouter.get("/users/token", tokenController);

userRouter.post("/records/post", recordsUserController);

userRouter.get("/verify", verifyUser);

userRouter.get("/");

export default userRouter;
