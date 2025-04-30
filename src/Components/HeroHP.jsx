import React from "react";
import p1 from "../assets/3dPrinter400.jpg";

const HeroHP = () => {
  return (
    <section className="hero-container">
      <img className="about-img" src={p1} alt="" />
      <div className="about-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
          molestiae. Molestiae velit, deserunt laborum, dolorem est accusamus
          numquam ut voluptas laudantium nobis rerum alias consequuntur?
        </p>
        <button className="about-btn">SHOP</button>
      </div>
    </section>
  );
};

export default HeroHP;
