import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URL = process.env.DATABASE_URL;

const dbConnect = () => {
  mongoose
    .connect(DB_URL, {
      family: 4,
    })
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log("Error while connecting to DB:", err));
};

export default dbConnect;