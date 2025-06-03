"use client";

import React from "react";
import BlogCard from "@/components/homecomps/minicomps/BlogCard";
import Newsletter from "@/components/homecomps/blogpage/Newsletter";
import BlogHero from "@/components/homecomps/blogpage/BlogHero";
import Featured from "@/components/homecomps/blogpage/Featured";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <BlogHero />
      <Featured />
      <section className="flex flex-col bg-white items-center justify-center w-full">
        <BlogCard
          image="/images/newsletter.png"
          title="Hot eba"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          date="2021-01-01"
          readTime="5 min read"
          type="founder"
        />
      </section>
      <Newsletter />
    </div>
  );
}

export default page;
