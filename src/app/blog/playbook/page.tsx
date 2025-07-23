"use client";

import React, { useState } from "react";
import Newsletter from "@/components/homecomps/blogpage/Newsletter";
import BlogSubDisplay from "@/components/homecomps/blogpage/BlogSubDisplay";

import { BlogCardProps } from "@/types/general";

const initialFounderPosts: BlogCardProps[] = [
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "founder",
    category: "Founder Playbooks",
    slug: "zero-to-mvp-checklist-first-time-founders-2",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "founder",
    category: "Founder Playbooks",
    slug: "zero-to-mvp-checklist-first-time-founders-2",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "founder",
    category: "Founder Playbooks",
    slug: "zero-to-mvp-checklist-first-time-founders-2",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "founder",
    category: "Founder Playbooks",
    slug: "zero-to-mvp-checklist-first-time-founders-2",
  },
];
function Page() {
  const [founderPosts, setFounderPosts] = useState(initialFounderPosts);

  const handleLoadMoreFounder = () => {
    setFounderPosts((prevPosts) => [...prevPosts, ...prevPosts]);
  };

  return (
    <div>
      <BlogSubDisplay
        title="Founder Playbooks"
        posts={founderPosts}
        typeFilter="founder"
        showLoadMore={true}
        onLoadMore={handleLoadMoreFounder}
      />
      <Newsletter />
    </div>
  );
}

export default Page;
