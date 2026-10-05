const express = require("express");
const cors = require("cors");
const db = require("./db");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio Backend is running!");
});

app.get("/api/skills", (req, res) => {
  const sql = "SELECT * FROM skills";

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);

      return res.status(500).json({
        message: "Failed to fetch skills",
      });
    }

    res.json(results);
  });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  // Save contact message in database
  const sql = `
    INSERT INTO contact_messages (name, email, message)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [name, email, message], (dbError, result) => {
    if (dbError) {
      console.log("Database error:", dbError);

      return res.status(500).json({
        message: "Failed to save message",
      });
    }

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `Siya's Portfolio <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: "Siya's Portfolio",
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Email error:", error);

        return res.status(500).json({
          message: "Message saved, but email could not be sent",
        });
      }

      console.log("Email sent:", info.response);

      res.json({
        message: "Message saved and email sent successfully",
      });
    });
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});