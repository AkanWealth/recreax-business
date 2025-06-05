import React from "react";
import BlogCard from "../minicomps/BlogCard";
import { BlogCardProps } from "@/types/general";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BlogSubDisplayProps {
  title: string; // Section title, e.g., "Founder Playbooks"
  posts: BlogCardProps[]; // Array of blog post data
  typeFilter?: "founder" | "executive"; // Optional: filter by type
  showLoadMore?: boolean; // Optional: show "Load more" button
  onLoadMore?: () => void; // Optional: handler for "Load more"
}

const BlogSubDisplay: React.FC<BlogSubDisplayProps> = ({
  title,
  posts,
  typeFilter,
  showLoadMore = false,
  onLoadMore,
}) => {
  // Optionally filter posts by type
  const filteredPosts = typeFilter
    ? posts.filter((post) => post.type === typeFilter)
    : posts;

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, type: "spring", stiffness: 60 },
    }),
  };

  return (
    <section className="py-10 px-4 md:px-10 lg:py-20 lg:px-[100px] bg-white">
      <div className="mb-8 flex flex-row items-center gap-2 justify-start">
        <Link
          href="/blog"
          className="text-gray-600 hover:text-gray-900 hover:underline transition-colors duration-200 inline-flex items-center text-sm"
        >
          Blog
        </Link>
        <ArrowRight className="w-4 h-4" />
        <p className="text-gray-600 hover:text-gray-900 transition-colors duration-200 inline-flex items-center text-sm">
          {title}
        </p>
      </div>
      <div className="flex flex-col items-start justify-start lg:gap-16 gap-8">
        <h2 className="lg:text-[32px] text-[#2a2829] text-[20px] md:text-[24px] font-tomato leading-[140%] font-semibold mb-6">
          {title}
        </h2>
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 
            w-full
          "
        >
          <AnimatePresence>
            {filteredPosts.map((post, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={cardVariants}
                className="w-full"
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {showLoadMore && onLoadMore && (
          <div className="mt-8 flex justify-center w-full">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
              whileTap={{ scale: 0.97 }}
              onClick={onLoadMore}
              className="px-6 py-2 bg-blue-900 text-white rounded-lg transition-colors duration-200"
            >
              Load more
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSubDisplay;
