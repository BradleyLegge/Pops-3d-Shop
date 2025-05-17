import React from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import dad from "../assets/dadLogoBest1.png";

const Header = () => {
  return (
    <section className="header-container">
      <img src={dad} alt="" />
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/aboutpage">ABOUT</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/contactpage">CONTACT US</NavLink>
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
