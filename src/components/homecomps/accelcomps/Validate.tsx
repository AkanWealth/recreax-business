"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ProductCycleLottie from "./LottieComp";

function Validate() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="w-full py-8 px-4 lg:py-[100px] lg:px-[120px] flex flex-col items-center justify-center lg:flex-row gap-8 lg:gap-[95px] bg-[#ffffff]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center w-full items-center max-w-[580px]"
      >
        <ProductCycleLottie />
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="flex flex-col gap-12 w-full max-w-[550px]"
      >
        <motion.h2
          variants={itemVariants}
          className="text-black text-left font-semibold sm:font-bold text-2xl sm:text-5xl font-tomato"
        >
          Build. Validate. Launch. <br />
          <span className="text-[#12233d]">In 90 Days</span>
        </motion.h2>
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-8"
        >
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/icons/vali-1.svg"
                alt="build"
                width={40}
                height={40}
              />
              <h5 className="text-[#2a2829] text-left font-semibold leading-[155%] sm:font-bold text-2xl font-tomato">
                Build Without a Tech Co-Founder
              </h5>
            </div>
            <p className="text-[#65605c] text-left font-normal leading-[155%] lg:text-lg font-plus-jakarta-sans">
              You don&apos;t need an in-house product team to start. We give you
              the structure, tools, and team to launch confidently — without the
              overhead.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/icons/vali-2.svg"
                alt="build"
                width={40}
                height={40}
              />
              <h5 className="text-[#2a2829] text-left font-semibold leading-[155%] sm:font-bold text-2xl font-tomato">
                MVP in 90 Days
              </h5>
            </div>
            <p className="text-[#65605c] text-left font-normal leading-[155%] lg:text-lg font-plus-jakarta-sans">
              From idea to launch — we define, design, and build a real product
              fast. You&apos;ll test with users, gather feedback, and ship in
              just 90 days.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/images/icons/vali-3.svg"
                alt="build"
                width={40}
                height={40}
              />
              <h5 className="text-[#2a2829] text-left font-semibold leading-[155%] sm:font-bold text-2xl font-tomato">
                Go-to-Market Ready
              </h5>
            </div>
            <p className="text-[#65605c] text-left font-normal leading-[155%] lg:text-lg font-plus-jakarta-sans">
              More than just building — we help you lay the right foundation for
              growth with smart strategy, lean testing, and launch support.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Validate;
