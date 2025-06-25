"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function AccelHero() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8 sm:gap-[120px] items-center justify-between sm:min-h-screen overflow-hidden relative">
      {/* Hero content section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col gap-6 sm:gap-8 items-center justify-center w-full px-4 py-8 sm:py-16 lg:mt-20"
      >
        <div className="flex flex-row flex-wrap w-full gap-2 sm:gap-4 items-center justify-center text-center font-tomato text-3xl sm:text-[64px] max-w-[1000px] font-semibold">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="whitespace-nowrap"
          >
            Build What
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              unoptimized={true}
              src="/images/studiohero-1.svg"
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
            People Want
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="whitespace-nowrap"
          >
            Launch with Confidence
          </motion.span>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
          >
            <Image
              unoptimized={true}
              src="/images/studiohero-2.svg"
              alt="Check"
              width={70}
              height={70}
              className="sm:w-[70px] sm:h-[70px] w-[32px] h-[32px]"
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
          We help first-time founders turn validated ideas into real, usable
          products that people want with speed, structure, and strategic support
          from day one.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8"
        >
          <Button
            onClick={() => router.push("/studio/waitlist")}
            className="bg-[#12233d] w-fit group hover:bg-[#1a2f4d] px-4 py-3 md:px-5 md:py-4 rounded-lg flex flex-row gap-1 text-white font-semibold font-plus-jakarta-sans text-sm md:text-base"
          >
            Join the Waitlist{" "}
            <span className="">
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
      <Image
        unoptimized={true}
        src="/images/bg/shero.svg"
        alt="Hero"
        width={1543}
        height={425}
        className="absolute bottom-0 w-screen h-auto object-contain"
        priority
      />
    </div>
  );
}

export default AccelHero;
