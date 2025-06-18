"use client";

import React, { useState } from "react";
import Image from "next/image";

function Metrics() {
  const [isHovered, setIsHovered] = useState(false);

  // Sample logos array - replace with your actual logo paths
  const logos = [
    "/images/Alte.svg",
    "/images/Audio.svg",
    "/images/Founder.svg",
    "/images/GHIH.svg",
    "/images/ICAN.svg",
    "/images/myareli.svg",
    "/images/QRL.svg",
    "/images/Waddle.svg",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-[#f1fafc] py-8 sm:py-[100px] px-5 sm:px-[120px]">
      <div className="flex w-full flex-col gap-8 sm:gap-16 items-center justify-center">
        <p className="text-lg text-center font-plus-jakarta-sans font-semibold text-[#2a2829]">
          A closer look at ReCreaX our journey and achievements
        </p>
        <div className="flex w-full flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="w-full bg-white rounded-2xl flex flex-row gap-2 p-3 sm:p-4 md:p-6 lg:py-6 lg:px-8 items-start justify-between">
            <p className="text-xl font-tomato sm:text-2xl md:text-3xl lg:text-5xl flex flex-col items-start  font-bold text-[#2a2829]">
              10+
              <span className="text-sm sm:text-base md:text-lg font-semibold text-[#2a2829] whitespace-nowrap font-plus-jakarta-sans">
                Successful Projects
              </span>
            </p>
            <Image
              unoptimized={true}
              src="/icons/10proj.svg"
              alt="Projects"
              width={32}
              height={32}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
          </div>
          <div className="w-full bg-white rounded-2xl flex flex-row gap-2 p-3 sm:p-4 md:p-6 lg:py-6 lg:px-8 items-start justify-between">
            <p className="text-xl font-tomato sm:text-2xl md:text-3xl lg:text-5xl flex flex-col items-start font-bold text-[#2a2829]">
              70%
              <span className="text-sm sm:text-base md:text-lg font-semibold text-[#2a2829] whitespace-nowrap font-plus-jakarta-sans">
                Execution than Hiring
              </span>
            </p>
            <Image
              unoptimized={true}
              src="/icons/70hiring.svg"
              alt="Hiring"
              width={32}
              height={32}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
          <div className="w-full bg-white rounded-2xl flex flex-row gap-2 p-3 sm:p-4 md:p-6 lg:py-6 lg:px-8 items-start justify-between">
            <p className="text-xl font-tomato sm:text-2xl md:text-3xl lg:text-5xl flex flex-col items-start font-bold text-[#2a2829]">
              15+
              <span className="text-sm sm:text-base md:text-lg font-semibold text-[#2a2829] whitespace-nowrap font-plus-jakarta-sans">
                Product Experts
              </span>
            </p>
            <Image
              unoptimized={true}
              src="/icons/15experts.svg"
              alt="Projects"
              width={32}
              height={32}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
        </div>
      </div>
      <div
        className="w-full overflow-hidden mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`flex gap-8 items-center ${
            isHovered ? "metrics-pause-animation" : "metrics-animate-scroll"
          }`}
        >
          {/* Triple the logos for smoother looping */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <Image
              unoptimized={true}
              key={index}
              src={logo}
              alt={`Partner logo ${index + 1}`}
              width={100}
              height={50}
              className="h-[25px] sm:h-[50px] object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Metrics;
