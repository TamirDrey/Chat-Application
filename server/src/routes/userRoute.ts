import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import { findUser, getUsers, loginUser, registerUser } from "../controllers/userController";

const userRouter: Router = express.Router();

userRouter.post("/register", asyncHandler(registerUser));
userRouter.post("/login", asyncHandler(loginUser));
userRouter.get("/find/:id", asyncHandler(findUser));
userRouter.get("/", asyncHandler(getUsers));

export default userRouter;
