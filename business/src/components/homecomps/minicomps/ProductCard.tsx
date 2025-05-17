import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  title: string;
  ownerName: string;
  ownerRole: string;
  companyLogo: string;
  review: string;
  link: string;
}

function ProductCard({
  image,
  title,
  ownerName,
  ownerRole,
  companyLogo,
  review,
  link,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[550px] h-fit flex flex-col items-start justify-start gap-4 sm:gap-6 md:gap-8"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="w-full"
      >
        <Image
          className="rounded-lg w-full h-auto"
          src={image}
          alt={title}
          width={550}
          height={550}
        />
      </motion.div>
      <div className="flex flex-col items-start justify-start gap-3 sm:gap-4 w-full">
        <div className="flex flex-row items-center justify-between w-full">
          <h3 className="text-xl sm:text-2xl font-bold font-plus-jakarta-sans">
            {title}
          </h3>
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
            className="w-fit"
          >
            <Image
              src={"/linear/Right.svg"}
              alt={title}
              width={24}
              height={24}
              className="sm:w-6 sm:h-6 -rotate-45"
            />
          </motion.a>
        </div>
        <div className="flex flex-col items-start justify-start gap-2">
          <p className="text-base sm:text-lg font-plus-jakarta-sans text-[#65605c]">
            {review}
          </p>
          <div className="flex flex-row items-center justify-start gap-3">
            <Image
              src={companyLogo}
              alt={title}
              width={40}
              height={40}
              className=" sm:w-[50px] sm:h-[50px]"
            />
            <div className="flex flex-col items-start justify-start gap-1">
              <p className="text-base sm:text-lg font-semibold font-plus-jakarta-sans text-[#2a2829]">
                {ownerName}
              </p>
              <p className="text-sm sm:text-base font-normal font-plus-jakarta-sans text-[#65605c]">
                {ownerRole}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
