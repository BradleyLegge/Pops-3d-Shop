import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <section className="navbar-hero">
        <p>LOGO</p>
        <nav class="navbar">
            <ul className="navbar-list">
                <li className="navbar-list-item"><a href="#">About Us</a></li>
                <li className="navbar-list-item"><a href="#">Shop</a></li>
                <li className="navbar-list-item"><a href="#">Log In</a></li>
            </ul>
        <a href="#"><FaCartShopping/></a>
        </nav>
    </section>
  )
}

export default Navbar
