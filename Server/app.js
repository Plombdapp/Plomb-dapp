const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "stoneshq20@gmail.com",
    pass: "dvysrkgxubvykvbp",
  },
});

// Email template
const emailTemplate = `
  <h1>Thank you for subscribing to Plomb Voting</h1>
  <p>You have successfully subscribed to Plomb Voting. If there are any updates or news, you will be informed via email.</p>
  <p>Best regards,<br>Your Plomb Voting Team</p>
`;

app.post("/send-subscription-email", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const mailOptions = {
    from: "stoneshq20@gmail.com", // Replace with your email
    to: email,
    subject: "Plomb Voting Subscription Confirmation",
    html: emailTemplate,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Failed to send email", error });
    }
    res.status(200).json({ message: "Email sent successfully", info });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
