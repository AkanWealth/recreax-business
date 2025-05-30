import React from "react";
import AccelFAQ from "@/components/homecomps/accelcomps/AccelFAQ";
import Build from "@/components/homecomps/accelcomps/Build";
import Special from "@/components/homecomps/accelcomps/Special";

function page() {
  return (
    <div>
      Accelerator page
      <Special />
      <AccelFAQ />
      <Build />
    </div>
  );
}

export default page;
