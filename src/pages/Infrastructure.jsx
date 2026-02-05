import React, { useEffect } from "react";
import InfraHero from "../components/infrastructure/InfraHero";
import ArchitectureOverview from "../components/infrastructure/ArchitectureOverview";
import TechStack from "../components/infrastructure/TechStack";
import AIInfrastructure from "../components/infrastructure/AIInfrastructure";
import DataStorage from "../components/infrastructure/DataStorage";
import MediaServices from "../components/infrastructure/MediaServices";
import SecurityScalability from "../components/infrastructure/SecurityScalability";
import Roadmap from "../components/infrastructure/Roadmap";
import InfraCTA from "../components/infrastructure/InfraCTA";

const Infrastructure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white">
      <InfraHero />
      <ArchitectureOverview />
      <TechStack />
      <AIInfrastructure />
      <DataStorage />
      <MediaServices />
      <SecurityScalability />
      <Roadmap />
      <InfraCTA />
    </main>
  );
};

export default Infrastructure;
