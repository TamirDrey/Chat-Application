import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IUser extends Document {
  _id: string;
  email: string;
  name: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    _id:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 2,
      maxlength: 200,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    password: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 1024,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;
