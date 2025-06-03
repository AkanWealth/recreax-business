"use client";

import React from "react";

import ProductCard from "../minicomps/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
function Products() {
  const products = [
    {
      image: "/images/Hubit.png",
      title: "Hubit Plx",
      ownerName: "Confidence Taiwo",
      ownerRole: "Cofounder, Meyo Apparel",
      companyLogo: "/images/GHIH.svg",
      review: "It's dreamy, it's fantastic and it makes me look really good",
      link: "https://www.google.com",
    },
    {
      image: "/images/AudioCare.png",
      title: "AudioCare",
      ownerName: "Olaoluwa Olaiya",
      ownerRole: "Cofounder, AudioCare",
      companyLogo: "/images/Audio.svg",
      review: "It's dreamy, it's fantastic and it makes me look really good",
      link: "https://www.google.com",
    },
    {
      image: "/images/Ican.png",
      title: "Product 3",
      ownerName: "Bob Wilson",
      ownerRole: "Founder",
      companyLogo: "/images/ICAN.svg",
      review: "This is a review",
      link: "https://www.google.com",
    },
    {
      image: "/images/Founder.png",
      title: "Founder Thrive",
      ownerName: "Alice Brown",
      ownerRole: "Co-founder",
      companyLogo: "/images/Founder.svg",
      review: "This is a review",
      link: "https://www.google.com",
    },
  ];

  return (
    <div className="flex flex-col items-start justify-center w-full bg-white gap-16 py-10 sm:py-20 px-4 sm:px-32">
      <h2 className=" leading-[140%] text-black text-left font-semibold  sm:font-bold text-2xl sm:text-5xl font-tomato">
        Startups Trust Us. Founders Rely on Us. <br />
        <span className="text-[#12233d]">Products Launch with Us</span>
      </h2>
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
