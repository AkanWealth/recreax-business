import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function BlogHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col items-center justify-center md:px-20 md:py-12 min-h-[250px] lg:min-h-[450px] overflow-hidden w-full"
    >
      {/* Decorative background image */}
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        src="/images/bg/bloghero.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 right-0 w-64 md:w-96 opacity-60 z-0"
      />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-[32px] leading-[140%] md:text-[64px] font-bold text-center font-tomato max-w-[600px] z-10 relative"
      >
        The ReCreaX Founders Blog
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="inline"
        >
          <Image
            unoptimized={true}
            src="/images/BlogHeroshape.svg"
            alt="logo"
            width={70}
            height={70}
            className="ml-2 inline h-8 w-8 sm:h-[70px] sm:w-[70px]"
          />
        </motion.div>
      </motion.h1>
    </motion.div>
  );
}

export default BlogHero;
