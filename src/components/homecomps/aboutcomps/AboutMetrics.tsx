"use client";

import React from "react";
import Image from "next/image";

function AboutMetrics() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 bg-white py-8 sm:py-[100px] px-5 sm:px-[120px]">
      <div className="flex w-full flex-col gap-8 sm:gap-16 items-center justify-center">
        <h2 className="text-2xl lg:text-5xl leading-[140%] text-center font-tomato font-bold text-[#12233d]">
          Numbers We&apos;re Proud Of
        </h2>
        <div className="flex w-full flex-col sm:flex-row  items-center sm:items-stretch justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <div className="w-full max-w-[370px]  bg-[#f1fafc] rounded-2xl flex flex-row gap-2  p-3 sm:p-4 md:p-6 lg:py-6 lg:px-8 items-start justify-between">
            <p className="text-xl font-tomato sm:text-2xl md:text-3xl lg:text-5xl flex flex-col items-start  font-bold text-[#2a2829]">
              10+
              <span className="text-sm sm:text-base md:text-lg font-semibold text-[#2a2829] whitespace font-plus-jakarta-sans">
                MVPs launched across Fintech, E-commerce & SaaS.
              </span>
            </p>
            <Image
              src="/icons/10proj.svg"
              alt="Projects"
              width={32}
              height={32}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
          <div className="w-full max-w-[370px]  bg-[#f1fafc] rounded-2xl flex flex-row gap-2 p-3 sm:p-4 md:p-6 lg:py-6 lg:px-8 items-start justify-between">
            <p className="text-xl font-tomato sm:text-2xl md:text-3xl lg:text-5xl flex flex-col items-start font-bold text-[#2a2829]">
              15+
              <span className="text-sm sm:text-base md:text-lg font-semibold text-[#2a2829] whitespace font-plus-jakarta-sans">
                talents placed on real projects
              </span>
            </p>
            <Image
              src="/icons/15experts.svg"
              alt="Projects"
              width={32}
              height={32}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
          <div className="w-full max-w-[370px]   bg-[#f1fafc] rounded-2xl flex flex-row gap-2 p-3 sm:p-4 md:p-6 lg:py-6 lg:px-8 items-start justify-between">
            <p className="text-xl font-tomato sm:text-2xl md:text-3xl lg:text-5xl flex flex-col items-start font-bold text-[#2a2829]">
              70%
              <span className="text-sm sm:text-base md:text-lg font-semibold text-[#2a2829] whitespace font-plus-jakarta-sans">
                faster execution speed vs traditional hiring
              </span>
            </p>
            <Image
              src="/icons/70hiring.svg"
              alt="Hiring"
              width={32}
              height={32}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMetrics;
