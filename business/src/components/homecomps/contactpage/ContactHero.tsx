"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

function ContactHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-8 sm:gap-16 max-w-[1200px] mx-auto py-12 sm:py-24 px-4 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center justify-center gap-2"
      >
        <h1 className="text-4xl sm:text-[64px] text-center font-tomato font-bold flex flex-row items-center justify-center gap-4">
          Contact Us
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/images/contactPhone.png"
              alt="arrow"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-[70px] sm:h-[70px]"
            />
          </motion.div>
        </h1>
        <p className="text-center text-base sm:text-lg font-plus-jakarta-sans font-normal text-[#2a2829] max-w-[800px]">
          Whether you&apos;re a founder with a big idea or a talent looking to
          work on meaningful projects, we&apos;d love to hear from you.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row py-6 sm:py-8 px-6 sm:px-12 bg-[#12233d] rounded-2xl justify-around gap-6 sm:gap-0"
      >
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="flex flex-col gap-2 items-center sm:items-start justify-start w-fit text-white text-xl sm:text-2xl font-tomato font-semibold"
        >
          Email Us
          <span className="text-white text-base sm:text-lg font-plus-jakarta-sans font-normal">
            info@recreax.com
          </span>
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.05 }}
          className="flex flex-col gap-2 items-center sm:items-start justify-start w-fit text-white text-xl sm:text-2xl font-tomato font-semibold"
        >
          WhatsApp
          <span className="text-white text-base sm:text-lg font-plus-jakarta-sans font-normal">
            +2348086929001
          </span>
        </motion.p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="bg-[#00ffff] w-full sm:w-60 h-12 sm:h-14 group hover:bg-[#aeffff] p-4 rounded-lg flex flex-row gap-1 text-[#12233d] font-semibold font-plus-jakarta-sans text-base">
            Book a Free 1:1 Session{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-700 ease-in-out" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContactHero;
