import React from "react";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer">
        <h1>LOGO</h1>
        <ul className="social-links">
          <li className="social-link-item">FACEBOOK</li>
          <li className="social-link-item">TWITTER</li>
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
