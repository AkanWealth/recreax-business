import React from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col gap-16 sm:gap-[120px] items-center justify-between h-screen overflow-hidden">
      {/* Hero content section */}
      <div className="relative z-10 flex flex-col gap-8 items-center justify-center w-full px-4 py-16">
        <h1 className="text-center font-tomato text-4xl w-full max-w-[1000px] font-bold">
          From Idea{" "}
          <Image
            src="/images/hero-light.png"
            alt="People"
            width={70}
            height={70}
            className="sm:w-[70px] sm:h-[70px] w-[32px] h-[32px]"
          />{" "}
          to Scalable Product with Real Experts
          <Image
            src="/images/hero-people.png"
            alt="People"
            width={150}
            height={70}
            className="sm:w-[150px] sm:h-[70px] w-[70px] h-[32px]"
          />
        </h1>
        <p className="text-center text-lg">
          We help early-stage founders turn validated ideas into usable products
          faster, with clarity, structure, and strategic support.
        </p>
        <div className="flex flex-col gap-4">
          <Button>Get Started</Button>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
