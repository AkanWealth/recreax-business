"use client";

import React from "react";
import Image from "next/image";

import Lottie from "@/components/homecomps/minicomps/Lottie";

import aniBuild from "./Build.json";
import aniScale from "./Scale.json";
import aniStrategy from "./Strategy.json";
import aniUX from "./Design.json";

import { motion } from "framer-motion";

function Built() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#12233d] gap-8 md:gap-16 py-10 md:py-20 px-4 md:px-32">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardVariants}
        className="text-white text-center font-tomato text-2xl sm:text-3xl md:text-5xl max-w-[600px] font-semibold"
      >
        Built to Launch Fast. Designed to Scale
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ ...cardVariants, ...hoverVariants }}
          className="col-span-1 md:col-span-7 flex flex-col items-start bg-white rounded-2xl p-4 md:p-6 gap-4 md:gap-6 justify-center transition-all duration-300 hover:shadow-xl"
        >
          <div className="w-full h-full max-w-[230px]">
            <Lottie data={aniStrategy} loop={true} />
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6">
              <p className=" flex flex-row gap-2 text-[#060c15] text-2xl md:text-4xl font-tomato font-semibold ">
                <Image
                  src="/images/Strategy-bulb.png"
                  alt="Strategy lightbulb"
                  width={100}
                  height={100}
                  className="w-full max-w-[36px] md:w-auto"
                />
                Strategy
              </p>
              <p className="text-[#060c15] text-base md:text-lg font-plus-jakarta-sans font-semibold ">
                Refine your idea. Validate your market
              </p>
            </div>
            <p className="text-[#060c15] text-base md:text-lg font-plus-jakarta-sans font-normal ">
              We simplify the product development process, guiding you to test
              your idea, refine your strategy, and build a product users love
              without the guesswork.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ ...cardVariants, ...hoverVariants }}
          className="col-span-1 md:col-span-5 bg-[#f6ffdf] flex flex-col items-start justify-center p-4 md:p-6 gap-4 md:gap-6 rounded-2xl transition-all duration-300 hover:shadow-xl"
        >
          <div className="w-full h-full max-w-[230px]">
            <Lottie data={aniUX} loop={true} />
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6">
              <p className=" flex flex-row gap-2 text-[#060c15] text-2xl md:text-4xl font-tomato font-semibold ">
                <Image
                  src="/images/UX-screen.png"
                  alt="UX screen"
                  width={100}
                  height={100}
                  className="w-full max-w-[36px] md:w-auto"
                />
                UI/UX
              </p>
              <p className="text-[#060c15] text-base md:text-lg font-plus-jakarta-sans font-semibold ">
                Design what users actually want
              </p>
            </div>
            <p className="text-[#060c15] text-base md:text-lg font-plus-jakarta-sans font-normal ">
              Our design sprints turn insights into intuitive experiences. We
              create user flows, wireframes, and prototypes that bring your
              vision to life.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ ...cardVariants, ...hoverVariants }}
          className="col-span-1 md:col-span-5 bg-[#ffffff] flex flex-col items-start justify-center p-4 md:p-6 gap-4 md:gap-6 rounded-2xl transition-all duration-300 hover:shadow-xl"
        >
          <div className="w-full h-full max-w-[265px]">
            <Lottie data={aniBuild} loop={true} />
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6">
              <p className=" flex flex-row gap-2 text-[#060c15] text-2xl md:text-4xl font-tomato font-semibold ">
                <Image
                  src="/images/Build-wall.png"
                  alt="Build wall"
                  width={100}
                  height={100}
                  className="w-full max-w-[36px] md:w-auto"
                />
                Build
              </p>
              <p className="text-[#060c15] text-base md:text-lg font-plus-jakarta-sans font-semibold ">
                From idea to a real MVP. Fast.{" "}
              </p>
            </div>
            <p className="text-[#060c15] text-base md:text-lg font-plus-jakarta-sans font-normal ">
              We build lean, functional MVPs using no-code and low-code tools.
              Your product gets tested early, saving time and budget.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ ...cardVariants, ...hoverVariants }}
          className="col-span-1 md:col-span-7 flex flex-col items-start bg-[#f4efff] rounded-2xl p-4 md:p-6 gap-4 md:gap-6 justify-center transition-all duration-300 hover:shadow-xl"
        >
          <div className="w-full h-full max-w-[230px]">
            <Lottie data={aniScale} loop={true} />
          </div>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:gap-6">
              <p className=" flex flex-row gap-2 text-[#060c15] text-2xl md:text-4xl font-tomato font-semibold ">
                <Image
                  src="/images/Scale-icon.png"
                  alt="Scale icon"
                  width={100}
                  height={100}
                  className="w-full max-w-[36px] md:w-auto"
                />
                Scale
              </p>
              <p className="text-[#060c15] text-base md:text-lg font-plus-jakarta-sans font-semibold ">
                Don&apos;t just launch. Grow.
              </p>
            </div>
            <p className="text-[#060c15] text-base md:text-lg font-plus-jakarta-sans font-normal ">
              Post-launch, we iterate based on real user feedback. From
              performance improvements to feature add-ons, we help you scale
              smarter.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Built;
