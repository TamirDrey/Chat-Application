import User from "../entities/user";
import validator from "validator";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import Extensions from "../extensions";
import CreateUserDTO from "../dtos/user/createUserDTO";
import { generateToken } from "../utils/jwt-functions";

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

  // generate a token for the user
  const token = generateToken(newUserDTO._id, name, email);

  res.status(201).send({ user: Extensions.AsUserDto(newUser), token: token });
};

//@route POST /api/users/login
//@access public
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  // check if the email/password is valid
  const existingUser = await User.findOne({ email });
  if (!existingUser) res.status(400).json("Invalid email");

  const isValidPassword = await bcrypt.compare(
    password,
    existingUser!.password
  );
  if (!isValidPassword) res.status(400).json("Invalid password");

  const token = generateToken(existingUser!.id, existingUser!.name, email);

  res
    .status(200)
    .json({ user: Extensions.AsUserDto(existingUser!), token: token });
};

// //@route GET /api/users/auth-me
// //@access private
// export const getUser = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const token = req.headers.authorization;
  
//   if (!token) {
//     res.status(401).send({ message: "Not authorized, no token" });
//   }
  
//   if (user) {
//     res.status(200).send({ user: Extensions.AsIUser(user) });
//   }
// };

//@route POST /api/users/find/:id
//@access private
export const findUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.params.id;

  const user = await User.findById(userId);
  if(!user) res.status(404).json("User not found")

  res.status(200).json(Extensions.AsUserDto(user!))
};

//@route POST /api/users
//@access private
export const getUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  const users = await User.find();

  if(!users) res.status(404).json("User not found")

  res.status(200).json(Extensions.AsUserDtoArray(users))
};
