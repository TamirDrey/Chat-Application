import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import {
  findUser,
  getUsers,
  loginUser,
  registerUser,
} from "../controllers/userController";
import { isAuth } from "../utils/jwt-functions";

const userRouter: Router = express.Router();

userRouter.post("/register", asyncHandler(registerUser));
userRouter.post("/login", asyncHandler(loginUser));
userRouter.get("/find/:id", isAuth, asyncHandler(findUser));
userRouter.get("/", isAuth, asyncHandler(getUsers));

export default userRouter;
