import React from "react";
import BlogCard from "../minicomps/BlogCard";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const blogData = [
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "founder",
    category: "Founder Playbooks",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "founder",
    category: "Founder Playbooks",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "founder",
    category: "Founder Playbooks",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "founder",
    category: "Founder Playbooks",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "executive",
    category: "Execution Guides",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "executive",
    category: "Execution Guides",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "executive",
    category: "Execution Guides",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "case study",
    category: "Case Studies",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "case study",
    category: "Case Studies",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "case study",
    category: "Case Studies",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "case study",
    category: "Case Studies",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "case study",
    category: "Case Studies",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "case study",
    category: "Case Studies",
  },
  // ... more blog posts ...
];

const tabs = [
  { label: "All", value: "all" },
  { label: "Founder Playbooks", value: "Founder Playbooks" },
  { label: "Execution Guides", value: "Execution Guides" },
  { label: "Case Studies", value: "Case Studies" },
];

function BlogDisplay() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");

  // Filter by tab and search
  const filtered = blogData.filter((post) => {
    const matchesTab = activeTab === "all" ? true : post.category === activeTab;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.description.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Group by category for "All" tab
  const grouped =
    activeTab === "all"
      ? filtered.reduce((acc, post) => {
          acc[post.category] = acc[post.category] || [];
          acc[post.category].push(post);
          return acc;
        }, {} as Record<string, typeof blogData>)
      : { [activeTab]: filtered };

  return (
    <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-start w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 w-full justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`relative px-4 py-2 rounded-2xl font-medium text-base md:text-lg font-plus-jakarta-sans transition-colors duration-300
                ${
                  activeTab === tab.value
                    ? "bg-[#12233d] text-white"
                    : "bg-[#dbdbd8] text-[#2a2829]"
                }`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
              {/* Animated underline */}
              {activeTab === tab.value && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-blue-400"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="mt-2 md:mt-0 ml-auto flex items-center relative border rounded-2xl font-plus-jakarta-sans w-full max-w-xs">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Search for blog"
            className="pl-10 pr-4 py-1 font-medium text-base md:text-lg bg-transparent outline-none w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Blog Groups */}
      <AnimatePresence mode="wait">
        {Object.entries(grouped).map(([group, posts]) => (
          <motion.div
            key={group}
            className="w-full flex flex-col gap-8 md:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <motion.div
              className="flex justify-between text-[#2a2829] items-center mb-2"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="lg:text-[32px] text-[20px] md:text-[24px] font-tomato leading-[140%] font-semibold">
                {group}
              </h3>
              <Link
                href={
                  group === "Founder Playbooks"
                    ? "/blog/playbook"
                    : group === "Execution Guides"
                    ? "/blog/guides"
                    : "/case-studies"
                }
                className="text-[#2a2829] text-sm md:text-base font-medium flex items-center gap-2"
              >
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-6 sm:justify-between flex-wrap">
              <AnimatePresence>
                {posts.slice(0, 3).map((post, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex-1 min-w-[250px] max-w-[370px]"
                  >
                    <BlogCard {...post} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default BlogDisplay;
