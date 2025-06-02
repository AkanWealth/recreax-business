"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function Expect() {
  return (
    <section className="w-full py-8 px-4 lg:py-[100px] lg:px-[120px] flex flex-col gap-8 lg:gap-16 bg-[#6ecddd]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-row items-center justify-center gap-2 bg-white text-sm md:text-base lg:text-lg text-[#12233d] font-semibold w-fit rounded-full h-fit px-4 py-2 font-plus-jakarta-sans mx-auto"
      >
        <Image
          src="/images/Works-star.png"
          alt="works-1"
          width={20}
          height={20}
        />
        What You Can Expect
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {[
          {
            icon: "/images/icons/computer.svg",
            title: "A Full-proof MVP",
            description:
              "A dedicated execution team working directly with you to build your MVP",
            alt: "Working MVP",
          },
          {
            icon: "/images/icons/cycle-one.svg",
            title: "Clear Product Roadmap",
            description:
              "Structured sprint execution with weekly check-ins and progress reviews.",
            alt: "Clear Product Roadmap",
          },
          {
            icon: "/images/icons/feedback.svg",
            title: "Real User Feedback",
            description: "Test with real users and learn what works.",
            alt: "Real User Feedback",
          },
          {
            icon: "/images/icons/startup.svg",
            title: "Startup Mentorship",
            description:
              "Access to mentorship from startup operators and founders",
            alt: "Startup Mentorship",
          },
          {
            icon: "/images/icons/rocket.svg",
            title: "Launch with Confidence",
            description: "Access to GTM launch strategy and playbooks",
            alt: "Launch with Confidence",
            span: 2,
          },
          {
            icon: "/images/icons/ffc.svg",
            title: "Founder-focused Community",
            description: "Access to a community of ambitious startup builders",
            alt: "Founder-focused Community",
            span: 2,
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white flex flex-col items-center justify-center w-full rounded-2xl p-4 lg:p-6 border border-[#dbdbdb] ${
              item.span ? "md:col-span-2" : ""
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center gap-2 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] bg-[#9efae4] border border-white rounded-full"
            >
              <Image src={item.icon} alt={item.alt} width={52} height={52} />
            </motion.div>
            <div className="flex flex-col items-center justify-center gap-3 lg:gap-4 mt-4">
              <h2 className="text-xl lg:text-2xl text-center font-semibold font-tomato text-[#2a2829] leading-[155%]">
                {item.title}
              </h2>
              <p className="text-sm lg:text-base text-center font-normal font-plus-jakarta-sans text-[#65606c] leading-[155%]">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Expect;
