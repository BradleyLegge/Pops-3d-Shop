import React from "react";
import Header from "../Components/Header";
import HeroHP from "../Components/HeroHP";
import AboutHP from "../Components/AboutHP";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <HeroHP />
      <AboutHP />
    </div>
  );
};

export default Homepage;
