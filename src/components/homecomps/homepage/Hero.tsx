"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

type heroImageCaro = {
  url: string;
  degree: number;
};

function Hero() {
  const imageSetting: heroImageCaro[] = [
    { url: "/images/carousel/c1.png", degree: 0 },
    { url: "/images/carousel/c2.png", degree: 0 },
    { url: "/images/carousel/c3.png", degree: 0 },
    { url: "/images/carousel/c4.png", degree: 15 },
    { url: "/images/carousel/c5.png", degree: -30 },
  ];
  return (
    <div className="flex flex-col gap-8 sm:gap-[120px] items-center justify-between sm:min-h-screen bg-[url(/images/bg/hhero.png)]   overflow-hidden">
      {/* Hero content section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col gap-6 sm:gap-8 items-center justify-center w-full px-4 py-8 sm:py-16"
      >
        <div className="flex flex-row flex-wrap w-full gap-2 sm:gap-4 items-center justify-center text-center font-tomato text-3xl sm:text-[64px] max-w-[1000px] font-semibold">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="whitespace-nowrap"
          >
            From Idea
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              unoptimized={true}
              src="/images/hero-light.png"
              alt="People"
              width={70}
              height={70}
              className="sm:w-[70px] sm:h-[70px] w-[32px] h-[32px]"
              priority
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="whitespace-nowrap text-[#003267]"
          >
            to Scalable Product
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="whitespace-nowrap"
          >
            with Real Experts
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Image
              unoptimized={true}
              src="/images/hero-people.png"
              alt="People"
              width={150}
              height={70}
              className="sm:w-[150px] sm:h-[70px] w-[70px] h-[32px]"
              priority
            />
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center text-base sm:text-lg max-w-[800px] px-4"
        >
          We help early-stage founders turn validated ideas into usable products
          faster, with clarity, structure, and strategic support.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8"
        >
          <Link href="/book-a-call">
            <Button className="px-6 py-4 rounded-xl font-plus-jakarta-sans font-medium text-base text-center bg-[#12233d] text-white hover:bg-[#1a2f4d] transition-colors duration-300 w-full sm:w-auto">
              Book a Free 1:1 Session
            </Button>
          </Link>
          <Link href="/case-studies">
            <Button className="border-2 bg-transparent border-[#12233d] p-4 rounded-xl text-base font-medium font-plus-jakarta-sans text-[#12233d] hover:bg-[#12233d] hover:text-white transition-all duration-300 w-full sm:w-auto">
              See Our Work
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Hero image carousel section */}
      <div className="relative w-full mb-[-180px] overflow-hidden">
        <div className="flex hero-animate-scroll gap-4   ">
          {/* First set of images */}
          <div className="flex gap-4 hero-scroll-content">
            {imageSetting.map((image, imageIndex) => (
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + imageIndex * 0.1 }}
                className={`relative min-w-[250px] rounded-5xl sm:min-w-[300px] w-full h-[250px] sm:h-[300px]`}
                style={{ transform: `rotate(${image.degree}deg)` }}
              >
                <Image
                  unoptimized={true}
                  src={image.url}
                  alt={`Carousel image ${imageIndex + 1}`}
                  fill
                  className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Duplicate set for seamless looping */}
          <div className="flex gap-4 hero-scroll-content">
            {imageSetting.map((image, imageIndex) => (
              <motion.div
                key={`duplicate-${imageIndex}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + imageIndex * 0.1 }}
                className={`relative min-w-[250px] rounded-5xl sm:min-w-[300px] w-full h-[250px] sm:h-[300px]`}
                style={{ transform: `rotate(${image.degree}deg)` }}
              >
                <Image
                  unoptimized={true}
                  src={image.url}
                  alt={`Carousel image ${imageIndex + 1}`}
                  fill
                  className="object-contain w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative curved-rectangle w-full z-[-10px]   sm:mt-[-200px] sm:h-[400px]  h-[200px] "></div>
      </div>
    </div>
  );
}

export default Hero;
