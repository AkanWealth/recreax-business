"use client";

import React from "react";

import ProductCard from "../minicomps/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
function Products() {
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

  return (
    <div className="flex flex-col items-start justify-center w-full bg-white gap-16 py-10 sm:py-20 px-4 sm:px-32">
      <h2 className=" leading-[140%] text-black text-left font-semibold  sm:font-bold text-2xl sm:text-5xl font-tomato">
        Startups Trust Us. Founders Rely on Us. <br />
        <span className="text-[#12233d]">Products Launch with Us</span>
      </h2>
      <div className="grid grid-cols-1 w-full justify-items-center sm:grid-cols-2 gap-20">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            ownerName={product.ownerName}
            ownerRole={product.ownerRole}
            companyLogo={product.companyLogo}
            review={product.review}
            link={product.link}
          />
        ))}
      </div>

      <Link href="/case-studies">
        <Button className="bg-[#12233d] font-plus-jakarta-sans font-semibold text-base p-4 text-white px-10 py-4 rounded-[8px]">
          View all Case Studies{" "}
          <HiArrowRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-white fill-white" />
        </Button>
      </Link>
    </div>
  );
}

export default Products;
