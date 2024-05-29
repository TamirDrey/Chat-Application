import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
    _id:string;
    email:string;
    name:string;
    password:string;
}

const userSchema = new Schema<IUser>(
  {
    _id:{
        type: String,
        required: true,
        unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
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
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;

