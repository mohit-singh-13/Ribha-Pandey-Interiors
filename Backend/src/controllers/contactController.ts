import { Request, Response } from "express";
import contactModel from "../models/contactModel";

export const contact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, phone, email, message } = req.body;
    
    if (!name || !phone || !email || !message) {
      res.json({ success: false, message: "Each field is mandatory to fill" });
      return;
    }

    const response = await contactModel.create({
      name,
      phone,
      email,
      message,
    });

    if (!response) {
      res.json({ success: false, message: "Message not sent successfully" });
      return;
    }

    res.json({ success: true, message: "Message sent successfully" });
    return;
  } catch (err) {
    res.json({
      success: false,
      message: "Internal Server Error",
    });
    return;
  }
};
