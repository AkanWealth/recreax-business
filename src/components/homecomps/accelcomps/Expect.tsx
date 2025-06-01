"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function Expect() {
  return (
    <section className="w-full  lg:py-[100px] lg:px-[120px] flex flex-col lg:gap-16 bg-[#6ecddd] ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center justify-center gap-2 bg-white text-base md:text-lg text-[#12233d] font-semibold w-fit rounded-full h-fit px-4 py-2 font-plus-jakarta-sans"
      >
        <Image
          src="/images/Works-star.png"
          alt="works-1"
          width={20}
          height={20}
        />
        What You Can Expect
      </motion.div>

      <div className=" grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
        <div className="bg-white col-span-1 flex flex-col items-center justify-center w-full rounded-2xl p-6 border border-[#dbdbdb]">
          <div className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px] bg-[#9efae4] border border-white">
            <Image
              src="/images/icons/computer.svg"
              alt="Working MVP"
              width={52}
              height={52}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl text-center font-semibold font-tomato text-[#2a2829] leading-[155%] ">
              A Full-proof MVP
            </h2>
            <p className="text-base text-center font-normal font-plus-jakarta-sans text-[#65606c] leading-[155%] ">
              A dedicated execution team working directly with you to build your
              MVP
            </p>
          </div>
        </div>
        <div className="bg-white col-span-1 flex flex-col items-center justify-center w-full rounded-2xl p-6 border border-[#dbdbdb]">
          <div className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px] bg-[#9efae4] border border-white">
            <Image
              src="/images/icons/cycle-one.svg"
              alt="Clear Product Roadmap "
              width={52}
              height={52}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl text-center font-semibold font-tomato text-[#2a2829] leading-[155%] ">
              Clear Product Roadmap
            </h2>
            <p className="text-base text-center font-normal font-plus-jakarta-sans text-[#65606c] leading-[155%] ">
              Structured sprint execution with weekly check-ins and progress
              reviews.
            </p>
          </div>
        </div>
        <div className="bg-white col-span-1 flex flex-col items-center justify-center w-full rounded-2xl p-6 border border-[#dbdbdb]">
          <div className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px] bg-[#9efae4] border border-white">
            <Image
              src="/images/icons/feedback.svg"
              alt="Real User Feedback"
              width={52}
              height={52}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl text-center font-semibold font-tomato text-[#2a2829] leading-[155%] ">
              Real User Feedback{" "}
            </h2>
            <p className="text-base text-center font-normal font-plus-jakarta-sans text-[#65606c] leading-[155%] ">
              Test with real users and learn what works.
            </p>
          </div>
        </div>
        <div className="bg-white col-span-1 flex flex-col items-center justify-center w-full rounded-2xl p-6 border border-[#dbdbdb]">
          <div className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px] bg-[#9efae4] border border-white">
            <Image
              src="/images/icons/startup.svg"
              alt="Real User Feedback"
              width={52}
              height={52}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl text-center font-semibold font-tomato text-[#2a2829] leading-[155%] ">
              Startup Mentorship
            </h2>
            <p className="text-base text-center font-normal font-plus-jakarta-sans text-[#65606c] leading-[155%] ">
              Access to mentorship from startup operators and founders
            </p>
          </div>
        </div>
        <div className="bg-white col-span-2 flex flex-col items-center justify-center w-full rounded-2xl p-6 border border-[#dbdbdb]">
          <div className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px] bg-[#9efae4] border border-white">
            <Image
              src="/images/icons/rocket.svg"
              alt="Real User Feedback"
              width={52}
              height={52}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl text-center font-semibold font-tomato text-[#2a2829] leading-[155%] ">
              Launch with Confidence
            </h2>
            <p className="text-base text-center font-normal font-plus-jakarta-sans text-[#65606c] leading-[155%] ">
              Access to GTM launch strategy and playbooks
            </p>
          </div>
        </div>
        <div className="bg-white col-span-2 flex flex-col items-center justify-center w-full rounded-2xl p-6 border border-[#dbdbdb]">
          <div className="flex flex-col items-center justify-center gap-2 w-[100px] h-[100px] bg-[#9efae4] border border-white">
            <Image
              src="/images/icons/ffc.svg"
              alt="Real User Feedback"
              width={52}
              height={52}
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl text-center font-semibold font-tomato text-[#2a2829] leading-[155%] ">
              Founder-focused Community
            </h2>
            <p className="text-base text-center font-normal font-plus-jakarta-sans text-[#65606c] leading-[155%] ">
              Access to a community of ambitious startup builders
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expect;
