import React from "react";
import AccelFAQ from "@/components/homecomps/accelcomps/AccelFAQ";
import Build from "@/components/homecomps/accelcomps/Build";
import Special from "@/components/homecomps/accelcomps/Special";
import Expect from "@/components/homecomps/accelcomps/Expect";
import Validate from "@/components/homecomps/accelcomps/Validate";
import AccelHero from "@/components/homecomps/accelcomps/AccelHero";
function page() {
  return (
    <div>
      <AccelHero />
      <Validate />
      <Expect />
      <Special />
      <AccelFAQ />
      <Build />
    </div>
  );
}

export default page;
