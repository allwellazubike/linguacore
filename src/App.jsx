import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlatformOverview from "./components/PlatformOverview";
import Features from "./components/Features";
import Intelligence from "./components/Intelligence";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#030712] min-h-screen font-sans text-gray-100 selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <PlatformOverview />
        <Features />
        <Intelligence />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
