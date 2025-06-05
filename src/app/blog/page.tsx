"use client";

import React from "react";
import Newsletter from "@/components/homecomps/blogpage/Newsletter";
import BlogHero from "@/components/homecomps/blogpage/BlogHero";
import Featured from "@/components/homecomps/blogpage/Featured";
import BlogDisplay from "@/components/homecomps/blogpage/BlogDisplay";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <BlogHero />
      <Featured />
      <section className="flex flex-col bg-white items-center justify-center w-full">
        <BlogDisplay />
      </section>
      <Newsletter />
    </div>
  );
}

export default page;
