import React from "react";
import AccelFAQ from "@/components/homecomps/accelcomps/AccelFAQ";
import Build from "@/components/homecomps/accelcomps/Build";
import Special from "@/components/homecomps/accelcomps/Special";
import Expect from "@/components/homecomps/accelcomps/Expect";
function page() {
  return (
    <div>
      Accelerator page
      <Expect />
      <Special />
      <AccelFAQ />
      <Build />
    </div>
  );
}

export default page;
