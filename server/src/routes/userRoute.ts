import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import { loginUser, registerUser } from "../controllers/userController";

const userRouter: Router = express.Router();

userRouter.post("/register", asyncHandler(registerUser));
userRouter.post("/login", asyncHandler(loginUser));

export default userRouter;
