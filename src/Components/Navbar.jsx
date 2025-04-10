import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-hero">
      <nav className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <a href="#">About Us</a>
          </li>
          <li className="navbar-list-item">
            <a href="#">Contact</a>
          </li>
          <li className="navbar-list-item">
            <a href="#">Shop</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
