import React from "react";
import Header from "../Components/Header";
import HeroHP from "../Components/HeroHP";
import AboutHP from "../Components/AboutHP";
import Footer from "../Components/Footer";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Header />
      <HeroHP />
      <AboutHP />
      <Footer />
    </div>
  );
};

export default Homepage;
