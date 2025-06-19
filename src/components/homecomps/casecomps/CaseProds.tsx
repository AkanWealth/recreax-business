"use client";

import React from "react";
import ProductCard from "@/components/homecomps/minicomps/ProductCard";
import { motion } from "framer-motion";

function CaseProds() {
  const products = [
    {
      image: "/images/GHIH.png",
      title: "Generation Hand-in-Hand",
      ownerName: "Reetika Mehta",
      ownerRole: "Founder, GHIH",
      companyLogo: "/images/GHIH.svg",
      review:
        "Within a short time, ReCreaX developed my Web App that allows elderly users to connect easily with volunteers and companions.",
      link: "/case-studies/ghih",
    },
    {
      image: "/images/AudioCare.png",
      title: "AudioCare",
      ownerName: "Ayowole O",
      ownerRole: "Founder, AudioCare",
      companyLogo: "/images/Audio.svg",
      review:
        "ReCreaX team managed to build an incredible platform that showcases my sound business, within a tight deadline",
      link: "/case-studies/audiocare",
    },
    {
      image: "/images/QRL.png",
      title: "QRLimited",
      ownerName: "Emmanuel Adedayo",
      ownerRole: "CoFounder, QRLimited",
      companyLogo: "/images/QRL.svg",
      review:
        "ReCreaX gave me the guidance, resources and collaborative environment I needed to make the QRL Management Solution a reality",
      link: "/case-studies/qrl",
    },
    {
      image: "/images/dbo.png",
      title: "DBO Website",
      ownerName: "Dr. Bode Oguntoke",
      ownerRole: "Founder, DBO",
      companyLogo: "/images/logos/logo-9.png",
      review:
        "They successfully managed the project from start to finish, demonstrating strong communication, leadership, and problem-solving skills",
      link: "/case-studies/dbo",
    },
  ];

  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
    }),
  };

  return (
    <section className="w-full flex flex-col gap-10 px-4 py-12 sm:px-8 md:px-16 lg:px-[100px] bg-[#f1fafc]">
      <h5 className="text-2xl leading-[140%] text-black font-tomato font-semibold mb-6">
        Other Cases
      </h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        {products
          .slice()
          .sort(() => Math.random() - 0.5)
          .slice(0, 2)
          .map((product, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <ProductCard
                image={product.image}
                title={product.title}
                ownerName={product.ownerName}
                ownerRole={product.ownerRole}
                companyLogo={product.companyLogo}
                review={product.review}
                link={product.link}
              />
            </motion.div>
          ))}
      </div>
    </section>
  );
}

export default CaseProds;
