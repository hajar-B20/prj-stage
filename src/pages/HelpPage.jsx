import React, { useState } from "react";
import "@styles/HelpPage.css";
import { FaEnvelope, FaLeaf, FaRegSmileBeam } from "react-icons/fa";

export default function HelpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🌸 Thank you for your feedback! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="help-container">
      {/* 🌸 About Us */}
      <section className="about-section">
        <h1 className="help-title">About Fleurora</h1>
        <p className="help-subtitle">
          At <strong>Fleurora</strong>, we believe flowers are more than gifts —
          they’re emotions wrapped in petals. From birthdays to “just because,”
          we help you deliver love, joy, and beauty, one bouquet at a time.
        </p>
        <div className="about-cards">
          <div className="about-card">
            <FaLeaf className="icon" />
            <h3>Our Mission</h3>
            <p>
              To make every occasion bloom brighter with fresh, hand-picked
              flowers and heartfelt designs.
            </p>
          </div>
          <div className="about-card">
            <FaRegSmileBeam className="icon1" />
            <h3>Our Promise</h3>
            <p>
              100% customer happiness — because every bouquet should bring a
              smile, not stress.
            </p>
          </div>
        </div>
      </section>

      {/* 🌸 Contact Info */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Got questions? Reach out to us anytime at: <br />
          <FaEnvelope className="icon-inline" />{" "}
          <a href="mailto:contact@fleurora.com">contact@fleurora.com</a>
        </p>
      </section>

      {/* 🌸 Complaints & Suggestions */}
      <section className="form-section">
        <h2>Complaints & Suggestions</h2>
        <p>
          Your voice helps us grow! Please share your feedback, ideas, or
          concerns below.
        </p>
        <form onSubmit={handleSubmit} className="feedback-form">
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
            placeholder="Write your message here..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit-btn">
            🌸 Send Feedback
          </button>
        </form>
      </section>
    </div>
  );
}
