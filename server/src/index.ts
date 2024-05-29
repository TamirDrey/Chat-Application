import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute";

dotenv.config();

const PORT = process.env.PORT || 5000;
const URI = process.env.ATLAS_URI;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(URI!)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log(`Mongo DB connection failed: ${err.message}`);
  });
