import React, { useEffect } from "react";
import FeaturesHero from "../components/features/FeaturesHero";
import CoreCapabilities from "../components/features/CoreCapabilities";
import ProcessingInfrastructure from "../components/features/ProcessingInfrastructure";
import SystemCharacteristics from "../components/features/SystemCharacteristics";
import UseCases from "../components/features/UseCases";
import IntegrationSecurity from "../components/features/IntegrationSecurity";
import CaseStudy from "../components/features/CaseStudy";
import FeaturesFAQ from "../components/features/FeaturesFAQ";

const Features = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <FeaturesHero />
      <CoreCapabilities />
      <ProcessingInfrastructure />
      <SystemCharacteristics />
      <UseCases />
      <IntegrationSecurity />
      <CaseStudy />
      <FeaturesFAQ />
    </main>
  );
};

export default Features;
