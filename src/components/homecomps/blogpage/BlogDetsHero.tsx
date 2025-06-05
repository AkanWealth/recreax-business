"use client";

import React from "react";
import { BlogPost } from "@/types/general";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function BlogDetsHero({ blogHeroData }: { blogHeroData: BlogPost }) {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-start max-w-[1440px] w-full py-6 px-4 md:py-8 md:px-8 lg:py-12 lg:px-20 lg:gap-12 bg-[#f1fafc]"
    >
      <motion.button
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        onClick={() => router.back()}
        className="flex items-center gap-2 self-start mb-4 text-[#2a2829] hover:text-[#bce8ef] transition-colors duration-300 font-plus-jakarta-sans text-base md:text-lg font-medium"
      >
        <span className="text-xl">←</span>
        Back
      </motion.button>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full"
      >
        <Image
          src={blogHeroData.imageUrl}
          alt={blogHeroData.title}
          width={927}
          height={477}
          priority
          unoptimized
          className="w-full h-auto rounded-lg"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col w-full gap-4 md:gap-6"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[155%] w-full font-tomato">
          {blogHeroData.title}
        </h2>
        <div className="flex w-full flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={blogHeroData.authorImage}
              alt={blogHeroData.author}
              width={40}
              height={40}
              unoptimized
              className="w-8 h-8 rounded-full"
            />
            <p className="text-base md:text-lg font-semibold leading-[155%] tracking-normal align-middle font-plus-jakarta-sans">
              {blogHeroData.author}
            </p>
          </div>
          <p className="text-sm md:text-base font-normal leading-[148%] tracking-normal align-middle font-plus-jakarta-sans">
            {blogHeroData.createdAt}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default BlogDetsHero;
