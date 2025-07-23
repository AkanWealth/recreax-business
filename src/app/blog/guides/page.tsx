// "use client";

// import React, { useState } from "react";
// import Newsletter from "@/components/homecomps/blogpage/Newsletter";
// import BlogSubDisplay from "@/components/homecomps/blogpage/BlogSubDisplay";

// import { BlogCardProps } from "@/types/general";

// const initialExecutionPosts: BlogCardProps[] = [
//   {
//     image: "/images/newsletter.png",
//     title: "The Zero-to-MVP Checklist for First-Time Founders",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "executive",
//     category: "Execution Guides",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "The Zero-to-MVP Checklist for First-Time Founders",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "executive",
//     category: "Execution Guides",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "The Zero-to-MVP Checklist for First-Time Founders",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "executive",
//     category: "Execution Guides",
//   },
// ];
// function Page() {
//   const [executionPosts, setExecutionPosts] = useState(initialExecutionPosts);

//   const handleLoadMoreExecution = () => {
//     setExecutionPosts((prevPosts) => [...prevPosts, ...prevPosts]);
//   };

//   return (
//     <div>
//       <BlogSubDisplay
//         title="Execution Guides"
//         posts={executionPosts}
//         typeFilter="executive"
//         showLoadMore={true}
//         onLoadMore={handleLoadMoreExecution}
//       />
//       <Newsletter />
//     </div>
//   );
// }

// export default Page;




"use client";

import React, { useState } from "react";
import Newsletter from "@/components/homecomps/blogpage/Newsletter";
import BlogSubDisplay from "@/components/homecomps/blogpage/BlogSubDisplay";

import { BlogCardProps } from "@/types/general";

const initialExecutionPosts: BlogCardProps[] = [
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "executive",
    category: "Execution Guides",
    slug: "zero-to-mvp-checklist-first-time-founders",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "executive",
    category: "Execution Guides",
    slug: "zero-to-mvp-checklist-first-time-founders-2",
  },
  {
    image: "/images/newsletter.png",
    title: "The Zero-to-MVP Checklist for First-Time Founders",
    description: "A step-by-step guide for new founders.",
    date: "April 8, 2025",
    readTime: "5 min read",
    type: "executive",
    category: "Execution Guides",
    slug: "zero-to-mvp-checklist-first-time-founders-3",
  },
];

function Page() {
  const [executionPosts, setExecutionPosts] = useState(initialExecutionPosts);

  const handleLoadMoreExecution = () => {
    setExecutionPosts((prevPosts) => [...prevPosts, ...prevPosts]);
  };

  return (
    <div>
      <BlogSubDisplay
        title="Execution Guides"
        posts={executionPosts}
        typeFilter="executive"
        showLoadMore={true}
        onLoadMore={handleLoadMoreExecution}
      />
      <Newsletter />
    </div>
  );
}

export default Page;