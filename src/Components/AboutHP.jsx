import React from "react";
import p2 from "../assets/3dPrinter3.jpg";

const AboutHP = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim,
          molestiae. Molestiae velit, deserunt laborum, dolorem est accusamus
          numquam ut voluptas laudantium nobis rerum alias consequuntur?
        </p>
        <button className="about-btn">SHOP</button>
      </div>
      <img className="about-img" src={p2} alt="" />
    </section>
  );
};

export default AboutHP;
