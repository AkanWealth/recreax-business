"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function CaseLogos() {
  const logos = [
    "/images/logos/logo-1.png",
    "/images/logos/logo-2.png",
    "/images/logos/logo-3.png",
    "/images/logos/logo-4.png",
    "/images/logos/logo-5.png",
    "/images/logos/logo-6.png",
    "/images/logos/logo-7.png",
    "/images/logos/logo-8.png",
    "/images/logos/logo-9.png",
  ];

  // Animation variants for parent and children
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="w-full flex items-center justify-center bg-[#f1fafc] py-8 px-4 lg:py-[100px] lg:px-[120px] gap-2">
      <motion.div
        className="flex w-full max-w-[1000px] flex-wrap justify-center flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-4 md:p-8 lg:py-12 lg:px-20 relative overflow-hidden bg-blend-luminosity"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="w-fit flex justify-center items-center"
            variants={itemVariants}
          >
            <Image
              src={logo}
              unoptimized={true}
              alt={`Logo ${index + 1}`}
              width={100}
              height={100}
              className="object-contain max-w-[100px] max-h-[100px] grayscale transition duration-300 ease-in-out hover:grayscale-0 hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default CaseLogos;
