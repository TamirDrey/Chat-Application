import express, { Router } from "express";
import asyncHandler from "express-async-handler";
import { registerUser } from "../controllers/userController";

const userRouter: Router = express.Router();

userRouter.post("/register", asyncHandler(registerUser));

export default userRouter;
