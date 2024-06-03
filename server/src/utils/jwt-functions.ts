import { NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const generateToken = (id: string, name: string, email: string) => {
  return jwt.sign({ id, name, email }, process.env.JWT_SECRET_KEY as string, {
    expiresIn: "7d",
  });
};

export const isAuth = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && (authHeader as string).startsWith("Bearer ")) {
      token = (authHeader as string).split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, decode) => {
        if (err) res.status(401).send({ message: err.message });
        else {
          next();
        }
      });
    } else {
      res.status(401).send({ message: "Not authorized, no token" });
    }
  }
);
