import React from "react";
import FeaturedCard from "./FeaturedCard";

function Featured() {
  const blogData = {
    category: "Founder Playbook",
    title: "How to Validate Your Startup Idea Without Writing Code",
    date: "April 8, 2025",
    imageUrl: "/images/FeaturedBlog.svg",
    imageAlt: "featured blog",
  };
  return (
    <section className="w-full bg-white py-8 px-5  lg:p-[100px] flex flex-col items-start justify-center lg:gap-14 gap-8">
      <h3 className="font-semibold font-plus-jakarta-sans text-base leading-[148%]  lg:font-tomato lg:text-[32px]">
        Featured Blog
      </h3>
      <FeaturedCard blogData={blogData} />
    </section>
  );
}

export default Featured;
