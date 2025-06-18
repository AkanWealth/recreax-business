"use client";

import React from "react";

import ProductCard from "../minicomps/ProductCard";
import Tabs from "../minicomps/Tabs";

function CaseArray() {
  const products = [
    {
      image: "/images/GHIH.png",
      title: "Generation Hand-in-Hand",
      ownerName: "Reetika Mehta",
      ownerRole: "Founder, GHIH",
      companyLogo: "/images/GHIH.svg",
      review:
        "Within a short time, ReCreaX developed my Web App that allows elderly users to connect easily with volunteers and companions.",
      link: "https://generationshandinhand.bubbleapps.io/version-test",
    },
    {
      image: "/images/AudioCare.png",
      title: "AudioCare",
      ownerName: "Ayowole O",
      ownerRole: "Founder, AudioCare",
      companyLogo: "/images/Audio.svg",
      review:
        "ReCreaX team managed to build an incredible platform that showcases my sound business, within a tight deadline",
      link: "https://audiocare.framer.website/",
    },
    {
      image: "/images/QRL.png",
      title: "QRLimited",
      ownerName: "Emmanuel Adedayo",
      ownerRole: "CoFounder, QRLimited",
      companyLogo: "/images/QRL.svg",
      review:
        "ReCreaX gave me the guidance, resources and collaborative environment I needed to make the QRL Management Solution a reality",
      link: "https://www.figma.com/proto/b95oOz9scDO7Yju3mIvNbs/QR-LIMITED?",
    },
    {
      image: "/images/dbo.png",
      title: "DBO Website",
      ownerName: "Dr. Bode Oguntoke",
      ownerRole: "Founder, DBO",
      companyLogo: "/images/logos/logo-9.png",
      review:
        "They successfully managed the project from start to finish, demonstrating strong communication, leadership, and problem-solving skills",
      link: "https://www.drbodeoguntoke.com/",
    },
  ];

  const categories = [
    "All",
    "Fintech",
    "Health Tech",
    "HRTech",
    "Logistics",
    "Edutech",
  ];
  const [activeCategory, setActiveCategory] = React.useState("All");

  // TODO: Filter products by activeCategory if/when needed

  return (
    <div className="flex flex-col items-start justify-center w-full bg-white gap-16 py-10 sm:py-20 px-4 sm:px-32">
      <Tabs
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />
      <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-20">
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
    </div>
  );
}

export default CaseArray;
