import React from "react";
import Hero from "../components/Hero";
import PlatformOverview from "../components/PlatformOverview";
import Features from "../components/Features";
import Intelligence from "../components/Intelligence";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <main>
      <Hero />
      <PlatformOverview />
      <Features />
      <Intelligence />
      <FAQ />
    </main>
  );
};

export default Home;
