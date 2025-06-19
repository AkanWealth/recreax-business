"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function CaseHero() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-16 sm:gap-20 w-full "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-col items-center justify-center gap-6 max-w-screen-lg w-full px-4 pt-20 sm:pt-0 sm:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="flex flex-row flex-wrap w-full gap-2 sm:gap-4 items-center justify-center text-center font-tomato text-[#2a2829] text-2xl xs:text-3xl sm:text-4xl md:text-[64px] max-w-[1000px] font-semibold">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="whitespace-nowrap leading-[140%]"
          >
            Real Founders
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              src="/images/icons/thumbs.svg"
              alt="thumbs"
              unoptimized={true}
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
            Real Results
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Image
              src="/images/icons/circleeye.svg"
              alt="People"
              width={70}
              height={70}
              unoptimized={true}
              className="w-[28px] h-[28px] xs:w-[32px] xs:h-[32px] sm:w-[50px] sm:h-[50px] md:w-[70px] md:h-[70px]"
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="whitespace-nowrap"
          >
            with ReCreaX
          </motion.span>
        </div>
        <motion.p
          className="text-center text-sm xs:text-base sm:text-lg font-plus-jakarta-sans font-normal leading-[155%] max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          Move from raw ideas to real products, faster and smarter. We&apos;ve
          helped over 10 first-time founders go from concept to launch with
          clarity and confidence. Dive into real stories of startups that built,
          pivoted, and grew with ReCreaX as their execution partner.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="w-full"
      >
        <Image
          src="/images/bg/chero.svg"
          alt="Case Hero"
          unoptimized={true}
          width={1000}
          height={1000}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>
    </motion.section>
  );
}

export default CaseHero;
