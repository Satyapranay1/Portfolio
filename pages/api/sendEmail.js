import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    try {
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "satyapranay114@gmail.com",
          pass: "Satyapranay987",
        },
      });

      await transporter.sendMail({
        from: email,
        to: "satyapranay114@gmail.com",
        subject: `${subject} (from ${name})`,
        text: message,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
