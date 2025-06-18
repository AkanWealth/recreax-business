"use client";

import React from "react";

import Image from "next/image";
import { motion } from "motion/react";

function AboutHero() {
  return (
    <div className="flex flex-col gap-8 sm:gap-[60px] md:gap-[120px] items-center justify-between h-fit bg-[url(/images/bg/hhero.png)] bg-cover bg-center overflow-hidden">
      {/* Hero content section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col gap-6 sm:gap-8 items-center justify-center w-full px-4 py-8 sm:py-12 md:py-16 sm:px-8 md:px-[120px] max-w-screen-xl mx-auto"
      >
        <div className="flex flex-row flex-wrap w-full gap-2 sm:gap-4 items-center justify-center text-center font-tomato text-2xl xs:text-3xl sm:text-4xl md:text-[64px] max-w-[1000px] font-semibold">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="whitespace-nowrap"
          >
            Build and
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              unoptimized={true}
              src="/images/icons/aboutrocket.svg"
              alt="Rocket"
              width={70}
              height={70}
              className="w-[28px] h-[28px] xs:w-[32px] xs:h-[32px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px]"
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="whitespace-nowrap text-[#003267]"
          >
            Launch
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="whitespace-nowrap text-[#003267]"
          >
            Faster with
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Image
              src="/images/icons/aboutpeople.png"
              alt="People"
              width={186}
              height={72}
              unoptimized={true}
              className="w-[60px] h-[24px] xs:w-[70px] xs:h-[32px] sm:w-[120px] sm:h-[48px] md:w-[186px] md:h-[72px]"
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="whitespace-nowrap"
          >
            Real Talents
          </motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col w-full md:flex-row justify-between items-center gap-4 sm:gap-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-left text-[#2a2829] text-sm xs:text-base sm:text-lg md:text-2xl font-tomato font-semibold leading-[155%] max-w-[300px] md:max-w-[320px]"
          >
            ReCreaX is where early-stage startups and emerging tech talents
            collaborate to build, launch, and scale real-world products—fast.
          </motion.p>
          <Image
            src="/images/AHero.png"
            alt="About Hero"
            width={404}
            height={305}
            unoptimized={true}
            className="mx-auto w-full max-w-[200px] xs:max-w-[260px] sm:max-w-[320px] md:max-w-[404px] h-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-left text-[#2a2829] text-sm xs:text-base sm:text-lg md:text-2xl font-tomato font-semibold leading-[155%] max-w-[300px] md:max-w-[320px]"
          >
            Founders get structured execution without hiring stress, while
            talents gain hands-on experience and career growth.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutHero;
