"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function Works() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:gap-16 py-10 md:py-20 px-4 md:px-32 w-full bg-[#6ecddd]">
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
        How it works
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8 md:gap-16 items-start bg-white w-full md:w-fit rounded-2xl py-6 pl-6 shadow-lg hover:shadow-xl"
        >
          <div className="flex flex-col gap-2 items-start ">
            <p className="rounded-full font-tomato text-white bg-[#003267] h-8 w-8 flex items-center justify-center">
              1
            </p>
            <h2 className="text-2xl font-semibold text-[#2a2829] font-tomato">
              Share your idea
            </h2>
            <p className="text-base md:text-lg font-normal max-w-full md:max-w-80 font-plus-jakarta-sans text-[#2a2829]">
              We will refine, validate your concept, and craft a structured
              execution plan
            </p>
          </div>
          <Image
            src="/images/Works-1.png"
            alt="works-1"
            width={342}
            height={259}
            className="w-full md:w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-8 md:gap-16 items-start bg-white w-full md:w-fit rounded-2xl py-6 pl-6 shadow-lg hover:shadow-xl"
        >
          <div className="flex flex-col gap-2 items-start ">
            <p className="rounded-full font-tomato text-[#060c15] bg-[#a6b1e1] h-8 w-8 flex items-center justify-center">
              2
            </p>
            <h2 className="text-2xl font-semibold text-[#2a2829] font-tomato">
              Build in sprints
            </h2>
            <p className="text-base md:text-lg font-normal max-w-full md:max-w-80 font-plus-jakarta-sans text-[#2a2829]">
              We turn your idea into a functional product, ensuring constant
              feedback and alignment
            </p>
          </div>
          <Image
            src="/images/Works-2.png"
            alt="works-2"
            width={352}
            height={244}
            className="w-full md:w-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-8 md:gap-16 items-start bg-white w-full md:w-fit rounded-2xl p-6 shadow-lg hover:shadow-xl"
        >
          <div className="flex flex-col gap-2 items-start ">
            <p className="rounded-full font-tomato text-[#060c15] bg-[#9efbdf] h-8 w-8 flex items-center justify-center">
              3
            </p>
            <h2 className="text-2xl font-semibold text-[#2a2829] font-tomato">
              Launch & scale
            </h2>
            <p className="text-base md:text-lg font-normal max-w-full md:max-w-80 font-plus-jakarta-sans text-[#2a2829]">
              We are available to provide continuous support to help you scale
              beyond launch.
            </p>
          </div>
          <Image
            src="/images/Works-3.png"
            alt="works-3"
            width={342}
            height={259}
            className="w-full md:w-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Works;
