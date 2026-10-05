import "./contact.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://siya-portfolio-x8sp.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to send message");
    }

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send message. Please try again.");
  }
};

  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <p className="contact-text">
          Have a question or want to connect with me? Feel free to send me a
          message.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;