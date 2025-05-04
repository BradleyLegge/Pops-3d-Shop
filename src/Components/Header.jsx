import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  return (
    <section className="header-container">
      <h1>LOGO</h1>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <a href="">HOME</a>
          </li>
          <li className="navbar-list-item">
            <a href="">ABOUT</a>
          </li>
          <li className="navbar-list-item">
            <a href="">CONTACT US</a>
          </li>
          <li className="navbar-list-item">
            <a href="">SHOP</a>
          </li>
        </ul>
      </nav>
      <div className="user-info">
        <a href="#" className="cart-link">
          <FaCartShopping className="cart-icon" />
        </a>
        <a href="#" className="user-link">
          <FaUser className="user-icon" />
        </a>
      </div>
    </section>
  );
};

export default Header;
