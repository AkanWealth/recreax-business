"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function CaseBuild() {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center bg-white py-8 px-4 lg:py-[100px] lg:px-20 gap-2">
      <div className="flex w-full flex-col gap-4 rounded-3xl bg-[#12233d] p-6 md:p-8 lg:py-12 lg:px-20 relative overflow-hidden animate-fadeIn">
        <div className="absolute bottom-0 right-0 w-[300px] h-[68px] md:w-[500px] md:h-[113px] lg:w-[734px] lg:h-[166px] bg-[url('/images/bg/AccelBuild.svg')] bg-no-repeat bg-contain bg-right-bottom opacity-50 animate-float" />
        <h2 className="max-w-[550px] font-tomato leading-[140%] text-2xl md:text-3xl lg:text-5xl text-white font-bold relative z-10 animate-slideUp">
          Your Idea Could Be Next.
        </h2>
        <p className="max-w-[550px] text-white text-sm md:text-base lg:text-lg font-plus-jakarta-sans font-normal leading-[155%] animate-slideUp">
          Let&apos;s turn your concept into something people can use
        </p>
        <div className="animate-slideUp">
          <Button
            onClick={() => router.push("/studio/waitlist")}
            className="bg-[#00ffff] w-fit group hover:bg-[#aeffff] px-4 py-3 md:px-5 md:py-4 rounded-lg flex flex-row gap-1 text-[#12233d] font-semibold font-plus-jakarta-sans text-sm md:text-base"
          >
            Let&apos;s Build Together{" "}
            <span className="animate-bounce">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CaseBuild;
