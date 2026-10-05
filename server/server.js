const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio Backend is running!");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["gaudesiya48@gmail.com"],
        reply_to: email,
        subject: "New Portfolio Enquiry",
        html: `
          <h2>New Portfolio Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Resend error:", data);

      return res.status(500).json({
        message: "Failed to send email",
      });
    }

    console.log("Email sent successfully:", data);

    res.json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.log("Email error:", error);

    res.status(500).json({
      message: "Failed to send email",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});