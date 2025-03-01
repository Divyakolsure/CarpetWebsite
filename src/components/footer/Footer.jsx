import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Get In Touch</h3>
          <ul>
            <li>
              <address>
                179 Basement, Savitri Nagar, Malviya Nagar,<br />
                New Delhi 110017
              </address>
            </li>
            <li>
              <a href="tel:+918700709668">(+91) 8700709668</a>
            </li>
            <li>
              <a href="mailto:dm.carpetplanet@gmail.com">dm.carpetplanet@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/shipping-policy">Shipping Policy</a></li>
            <li><a href="/return-refund-policy">Return & Refund Policy</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
            <li><a href="/customer-service">Customer Service</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Information</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/how-to-buy">How to Buy</a></li>
            <li><a href="/search">Search</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.regionSelector}>
          <select defaultValue="India (INR ₹)">
            <option value="India (INR ₹)">India (INR ₹)</option>
          </select>
        </div>
        <div className={styles.copyright}>
          Copyright © 2025, Carpet Planet — Designed & Maintained By zommerce.co
        </div>
      </div>
    </footer>
  );
};

export default Footer;