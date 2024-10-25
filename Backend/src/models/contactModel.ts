import mongoose from "mongoose";
import { mailSender } from "../utils/mailSender";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

contactSchema.pre("save", async function (next) {
  await mailSender(this.name, this.phone, this.email, this.message);
  next();
});

export default mongoose.model("Contact", contactSchema);
