import React from "react";
import cow from "../assets/cow1.jpg";

const About = () => {
  return (
    <section className="about-container">
      <img class="cow-1-img" src={cow} alt="" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        quod explicabo veniam aspernatur. Eligendi quisquam id nemo quibusdam
        quasi. Ullam adipisci dolorem alias iusto asperiores temporibus commodi
        esse eaque accusantium?
      </p>
    </section>
  );
};

export default About;
