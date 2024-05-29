import User from "../entities/user";
import validator from "validator";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import Extensions from "../extensions";
import CreateUserDTO from "../dtos/user/createUserDTO";

//@route POST /api/users/register
//@access public
export const registerUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  // server side validations
  if (existingUser) res.status(400).json("User already exists...");
  if (!name || !email || !password)
    res.status(400).json("All fields are required...");
  if (!validator.isEmail(email))
    res.status(400).json("Email must be a valid email...");
  if (!validator.isStrongPassword(password))
    res.status(400).json("Passwords must be a strong password... (eXample@12)");

  // create a data transfer object to the DB
  const newUserDTO = new CreateUserDTO(email, name, password);

  // create a new object of user schema with the current DTO and save it in the DB
  const newUser = new User(newUserDTO);
  await newUser.save();

  res.status(201).send(Extensions.AsUserDto(newUser));
};
