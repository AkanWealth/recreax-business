import React from "react";
import AboutMetrics from "@/components/homecomps/aboutcomps/AboutMetrics";
import CICS from "@/components/homecomps/aboutcomps/CICS";
// import Origin from "@/components/homecomps/aboutcomps/Origin";
import AboutHero from "@/components/homecomps/aboutcomps/AboutHero";
function page() {
  return (
    <div>
      <AboutHero />
      {/* <Origin /> */}
      <CICS />
      <AboutMetrics />
    </div>
  );
}

export default page;
