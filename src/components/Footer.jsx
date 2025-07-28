import React from "react";
import "@styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const renderColumn = (title, items) => (
    <div className="footer-column">
      <h4>{title}</h4>
      <ul className="footer-list">
        {items.map((item, i) =>
          typeof item === "string" ? (
            <li key={i}>{item}</li>
          ) : (
            <strong key={i}>{item.label}</strong>
          )
        )}
      </ul>
    </div>
  );

  return (
    <footer className="footer">
      <div className="footer-top-row">
        <div className="footer-logo">🌸 Fleurora</div>
      </div>

      <div className="footer-main">
        {/* Left: columns group */}
        <div className="footer-columns-left">
          {renderColumn("Help", [
            { label: "Help" },
            "Customer Service",
            "Sitemap",
          ])}
          {renderColumn("Account", [
            { label: "Account" },
            "Manage Your Account",
            "Track Your Order",
            "Order History",
            "Reminder Service",
            "ProPerks",
          ])}
          {renderColumn("Shop Now", [
            { label: "Flower Delivery" },
            "Send Flowers",
            "Mixed Bouquets",
            "Same Day Delivery",
            "International Delivery",
            { label: "Plant Delivery" },
            "House Plants",
            "Bonsai",
            { label: "Gift Delivery" },
            "Gift Baskets",
            "Chocolates",
          ])}
          {renderColumn("Occasions", [
            { label: "Shop by Occasion" },
            "Birthday",
            "Sympathy",
            "Anniversary",
            "Congratulations",
            { label: "Holidays" },
            "Mother’s Day",
            "Valentine’s Day",
            "Christmas",
          ])}
        </div>

        {/* Right: newsletter and contact */}
        <div className="footer-right">
          <h4>Freshen Up Your Inbox</h4>
          <div className="newsletter-signup">
            <input type="email" placeholder="Enter your email" />
            <button className="signup">Sign Up</button>
          </div>
          <h4>Contact</h4>
          <p>Available 24/7<br />1.800.580.2913</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faTiktok} />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Website Accessibility | Terms & Conditions | Privacy Policy | CCPA <br />
          &copy; 2025 Fleurora, Inc.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
