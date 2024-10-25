import express from "express";
import { contact } from "../controllers/contactController";

export const router = express.Router();

router.post("/contact", contact);