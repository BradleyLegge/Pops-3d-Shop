import React from "react";
import p1 from "../assets/3dPrinter400.jpg";

const HeroHP = () => {
  return (
    <section className="hero-container">
      <img className="hero-img" src={p1} alt="" />
      <div className="hero-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
          molestiae. Molestiae velit, deserunt laborum, dolorem est accusamus
          numquam ut voluptas laudantium nobis rerum alias consequuntur?
        </p>
        <button className="hero-btn">SHOP</button>
      </div>
    </section>
  );
};

export default HeroHP;
