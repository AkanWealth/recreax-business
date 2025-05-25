"use client";

import React from "react";
import BlogCard from "@/components/homecomps/minicomps/BlogCard";
import Newsletter from "@/components/homecomps/blogpage/Newsletter";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <BlogCard
        image="/images/newsletter.png"
        title="Hot eba"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        date="2021-01-01"
        readTime="5 min read"
        type="founder"
      />
      <Newsletter />
    </div>
  );
}

export default page;
