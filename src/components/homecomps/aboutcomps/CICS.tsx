"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function CICS() {
  return (
    <section className="w-full py-8 px-4 lg:py-[100px] lg:px-[120px] flex flex-col gap-8 lg:gap-16 bg-[#D2F0F4]">
      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row items-center justify-center gap-2 bg-white text-sm md:text-base lg:text-lg text-[#12233d] font-semibold w-fit rounded-full h-fit px-4 py-2 font-plus-jakarta-sans mx-auto"
        >
          <Image
            unoptimized={true}
            src="/images/Works-star.png"
            alt="works-1"
            width={20}
            height={20}
          />
          Our Core Values{" "}
        </motion.div>
        <h2 className="text-2xl lg:text-5xl leading-[140%] text-center font-tomato font-bold text-[#12233d] max-w-[838px] mx-auto">
          At <span className="text-[#003267]">ReCreaX</span>, our C.I.C.S.
          values guide how we <span className="text-[#003267]">build</span>,
          <span className="text-[#003267]">collaborate</span>, and{" "}
          <span className="text-[#003267] italic font-medium">grow</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center  gap-4 lg:gap-12">
        {[
          {
            icon: "/images/icons/competence.svg",
            title: "Competence",
            description:
              "Excellence through real-world execution, not just theoretical knowledge.",
            alt: "Competence",
          },
          {
            icon: "/images/icons/innovation.svg",
            title: "Innovation",
            description:
              "Disrupting outdated hiring and talent development models.",
            alt: "Innovation",
          },
          {
            icon: "/images/icons/connection.svg",
            title: "Connection",
            description:
              "A thriving platform where talents and startups connect for mutual growth and success.",
            alt: "Connection",
          },
          {
            icon: "/images/icons/sincerity.svg",
            title: "Sincerity",
            description:
              "A genuine commitment to talent empowerment and business success.",
            alt: "Sincerity",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white flex flex-col items-center justify-center w-full max-w-[480px] rounded-2xl p-4 lg:px-12 lg:py-[62px] `}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center gap-2 w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] bg-[#9efae4] border border-white rounded-full"
            >
              <Image
                unoptimized={true}
                src={item.icon}
                alt={item.alt}
                width={52}
                height={52}
              />
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

export default CICS;
