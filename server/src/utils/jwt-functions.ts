import jwt, { JwtPayload } from "jsonwebtoken";
import { IUser } from "../entities/user";

export const generateToken = ({ _id, name, email }: IUser): string => {
    return jwt.sign({ _id, name, email }, process.env.JWT_PW as string, {
      expiresIn: "7d",
    });
  };
  