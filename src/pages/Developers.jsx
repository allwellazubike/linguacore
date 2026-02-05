import React from "react";
import DevHero from "../components/developers/DevHero";
import DevQuickStart from "../components/developers/DevQuickStart";
import DevAPIOverview from "../components/developers/DevAPIOverview";
import DevAuthentication from "../components/developers/DevAuthentication";
import DevSDKs from "../components/developers/DevSDKs";
import DevTools from "../components/developers/DevTools";
import DevResources from "../components/developers/DevResources";
import DevCTA from "../components/developers/DevCTA";

const Developers = () => {
  return (
    <main>
      <DevHero />
      <DevQuickStart />
      <DevAPIOverview />
      <DevAuthentication />
      <DevSDKs />
      <DevTools />
      <DevResources />
      <DevCTA />
    </main>
  );
};

export default Developers;
