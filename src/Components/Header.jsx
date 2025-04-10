import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  return (
    <div className="header-hero">
      <h1>LOGO</h1>
      <Navbar />
      <div className="user-section">
        <Login />
        <ShoppingCart />
      </div>
    </div>
  );
};

export default Header;
