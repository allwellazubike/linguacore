import React, { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import Mission from "../components/about/Mission";
import Technology from "../components/about/Technology";
import Team from "../components/about/Team";
import Infrastructure from "../components/about/Infrastructure";
import ProductStatus from "../components/about/ProductStatus";

const About = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <AboutHero />
      <Mission />
      <Technology />
      <Team />
      <Infrastructure />
      <ProductStatus />
    </main>
  );
};

export default About;
