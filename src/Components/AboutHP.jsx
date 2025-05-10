import React from "react";
import p2 from "../assets/3dPrinter3.jpg";

const AboutHP = () => {
  return (
    <section className="about-hp-container">
      <div className="about-hp-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
          molestiae. Molestiae velit, deserunt laborum, dolorem est accusamus
          numquam ut voluptas laudantium nobis rerum alias consequuntur?
        </p>
        <button className="about-hp-btn">SHOP</button>
      </div>
      <img className="about-hp-img" src={p2} alt="" />
    </section>
  );
};

export default AboutHP;
