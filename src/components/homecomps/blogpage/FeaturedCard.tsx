import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Define the blog data interface
interface BlogData {
  category: string;
  title: string;
  date: string;
  imageUrl: string;
  imageAlt?: string;
}

// Add props interface
interface FeaturedCardProps {
  blogData: BlogData;
}

function FeaturedCard({ blogData }: FeaturedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-4xl bg-[#f1fafc] w-full flex flex-col items-center justify-between lg:flex-row py-6 px-4 lg:py-16 lg:px-20 lg:gap-[160px] gap-8"
    >
      <div className="w-full h-full flex flex-col justify-between gap-4 lg:gap-6 max-w-[450px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base leading-[148%] font-plus-jakarta-sans text-[#0671e0]"
        >
          {blogData.category}
        </motion.p>
        <div className="flex flex-col h-full justify-between gap-2">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-plus-jakarta-sans text-[#2a2829] lg:font-tomato font-semibold lg:font-bold text-lg lg:text-5xl leading-[155%] lg:leading-[140%]"
          >
            {blogData.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-plus-jakarta-sans text-base leading-[148%] text-[#65605c] lg:text-lg font-semibold"
          >
            {blogData.date}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image
          unoptimized={true}
          src={blogData.imageUrl}
          width={500}
          height={500}
          alt={blogData.imageAlt || "featured blog"}
          className="rounded-2xl w-full h-auto object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

export default FeaturedCard;
