"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function Special() {
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
    <section className="flex flex-col lg:flex-row items-center justify-center w-full h-full bg-[#12233d] py-12 px-4 lg:py-[100px] lg:px-[120px] lg:gap-[120px]">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          unoptimized={true}
          src="/images/AccelSpecial.svg"
          alt="Special"
          width={446}
          height={482}
          className="w-full h-full max-w-[446px] max-h-[482px]"
        />
      </motion.div>

      <motion.div
        className="flex flex-col lg:gap-12 max-w-[650px] w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-white text-2xl lg:text-5xl leading-[140%] font-bold font-tomato text-center lg:text-left"
        >
          Specially Designed <br />
          <span className="text-[#00ffff]">For YOU</span>
        </motion.h2>

        <motion.div
          className="flex w-full flex-col gap-4 lg:gap-6"
          variants={containerVariants}
        >
          {[
            "First-time founders with a strong idea",
            "Founders building tech-enabled businesses (SaaS, fintech, HR Tech, marketplaces, or HealthTech)",
            "Bootstrapped founders that need lean but fast execution",
            "Startups in pre-seed or bootstrapped phase looking to ship faster and smarter",
          ].map((text, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full rounded-xl bg-[#f1fafc] p-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <p className="text-[#2a2829] text-sm lg:text-lg font-plus-jakarta-sans font-semibold leading-[155%]">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Special;
