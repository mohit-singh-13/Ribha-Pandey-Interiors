import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/database";
import { router } from "./routes/router";
import cors from "cors";

const corsOptions = {
  origin: "https://ribha-pandey-interiors.vercel.app", // Your frontend URL
  methods: ["GET", "POST"],
  credentials: true, // Allow credentials (cookies) to be sent
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();
dotenv.config();

const PORT = process.env.PORT;

dbConnect();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log("Server up and running");
});
