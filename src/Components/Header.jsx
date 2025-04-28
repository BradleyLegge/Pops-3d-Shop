import React from "react";

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
      <div>
        <h2>SHOPPING CART</h2>
        <h2>LOGIN</h2>
      </div>
    </section>
  );
};

export default Header;
