import React from "react";
import CaseHero from "@/components/homecomps/casecomps/CaseHero";
import CaseBuild from "@/components/homecomps/casecomps/CaseBuild";
import Testimonials from "@/components/homecomps/homepage/Testimonials";
import CaseLogos from "@/components/homecomps/casecomps/CaseLogos";
import CaseArray from "@/components/homecomps/casecomps/CaseArray";


function page() {
  return (
    <div>
      <CaseHero />
      <CaseArray />
      <CaseLogos />
      <Testimonials />
      <CaseBuild />
    </div>
  );
}

export default page;
