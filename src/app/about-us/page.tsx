import React from "react";
import AboutMetrics from "@/components/homecomps/aboutcomps/AboutMetrics";
import CICS from "@/components/homecomps/aboutcomps/CICS";

function page() {
  return (
    <div>
      {/* <AboutHero /> */}
      <CICS />
      <AboutMetrics />
    </div>
  );
}

export default page;
