"use client";

import React from "react";

import ProductCard from "../minicomps/ProductCard";
import Tabs from "../minicomps/Tabs";

function CaseArray() {
  const products = [
    {
      image: "/images/Hubit.png",
      title: "Hubit Plx",
      ownerName: "Confidence Taiwo",
      ownerRole: "Cofounder, Meyo Apparel",
      companyLogo: "/images/GHIH.svg",
      review: "It's dreamy, it's fantastic and it makes me look really good",
      link: "/case-studies/hubit",
    },
    {
      image: "/images/AudioCare.png",
      title: "AudioCare",
      ownerName: "Olaoluwa Olaiya",
      ownerRole: "Cofounder, AudioCare",
      companyLogo: "/images/Audio.svg",
      review: "It's dreamy, it's fantastic and it makes me look really good",
      link: "/case-studies/audiocare",
    },
    {
      image: "/images/Ican.png",
      title: "Product 3",
      ownerName: "Bob Wilson",
      ownerRole: "Founder",
      companyLogo: "/images/ICAN.svg",
      review: "This is a review",
      link: "/case-studies/ican",
    },
    {
      image: "/images/Founder.png",
      title: "Founder Thrive",
      ownerName: "Alice Brown",
      ownerRole: "Co-founder",
      companyLogo: "/images/Founder.svg",
      review: "This is a review",
      link: "/case-studies/founder-thrive",
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
