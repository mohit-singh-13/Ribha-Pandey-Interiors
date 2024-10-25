import { transporter } from "../config/nodemailer";

export const mailSender = async (
  name: string,
  phone: string,
  email: string,
  message: string
) => {
  try {
    await transporter.sendMail({
      from: "mohitsingh24092003@gmail.com",
      to: "ms833587@gmail.com",
      subject: `New Message from ${name}`,
      text: `
        Sender: ${name}
        Phone Number: ${phone}
        Email: ${email}
        Message: ${message}
      `,
    });
  } catch (err) {
    console.log("Error in sending mail", err);
  }
};
