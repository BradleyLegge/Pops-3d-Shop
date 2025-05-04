import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer">
        <h1>LOGO</h1>
        <ul className="social-links">
          <li className="social-link-item">
            <a href="">
              <FaFacebook className="facebook-icon" />
            </a>
          </li>
          <li className="social-link-item">
            <a href="#">
              <FaTwitter className="twitter-icon" />
            </a>
          </li>
        </ul>
      </div>
      <ul className="nav-links">
        <li className="nav-link-item">
          <a href="#">HOME</a>
        </li>
        <li className="nav-link-item">
          <a href="#">ABOUT</a>
        </li>
        <li className="nav-link-item">
          <a href="#">CONTACT US</a>
        </li>
        <li className="nav-link-item">
          <a href="#">SHOP</a>
        </li>
      </ul>
      <ul className="legal-links">
        <li className="legal-link-item">
          <a href="#">TERMS OF SERVICE</a>
        </li>
        <li className="legal-link-item">
          <a href="#">RETURN POLICY</a>
        </li>
        <li className="legal-link-item">
          <a href="#">SHIPPING POLICY</a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
