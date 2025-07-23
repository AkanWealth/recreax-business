// import React from "react";
// import BlogCard from "../minicomps/BlogCard";
// import { useState } from "react";
// import Link from "next/link";
// import { ArrowRight, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const blogData = [
//   {
//     image: "/images/newsletter.png",
//     title:
//       "Why You Don't Need to Quit Your Job to Start Building Your Startup Idea",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "founder",
//     category: "Founder Playbooks",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "How Much Should You Spend on an MVP",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "founder",
//     category: "Founder Playbooks",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "7 Creative Ways to Fund Your Startup MVP Affordably",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "founder",
//     category: "Founder Playbooks",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "The Zero-to-MVP Checklist for First-Time Founders",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "founder",
//     category: "Founder Playbooks",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "How to Run Insightful Customer Discovery Calls (with Templates)",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "executive",
//     category: "Execution Guides",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "How to Validate a Startup Idea Without Building Anything",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "executive",
//     category: "Execution Guides",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "The ReCreaX Execution Framework Explained (Step-by-Step)",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "executive",
//     category: "Execution Guides",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "How an MBA Student Created an Elderly Care App in 3 Months",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "case study",
//     category: "Case Studies",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "Breaking Burnout Cycle for Founders with FounderThrive App",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "case study",
//     category: "Case Studies",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "Inside the App That's Changing How Farms Run",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "case study",
//     category: "Case Studies",
//   },
//   {
//     image: "/images/newsletter.png",
//     title: "The Zero-to-MVP Checklist for First-Time Founders",
//     description: "A step-by-step guide for new founders.",
//     date: "April 8, 2025",
//     readTime: "5 min read",
//     type: "case study",
//     category: "Case Studies",
//   },

//   // ... more blog posts ...
// ];

// const tabs = [
//   { label: "All", value: "all" },
//   { label: "Founder Playbooks", value: "Founder Playbooks" },
//   { label: "Execution Guides", value: "Execution Guides" },
//   { label: "Case Studies", value: "Case Studies" },
// ];

// function BlogDisplay() {
//   const [activeTab, setActiveTab] = useState("all");
//   const [search, setSearch] = useState("");

//   // Filter by tab and search
//   const filtered = blogData.filter((post) => {
//     const matchesTab = activeTab === "all" ? true : post.category === activeTab;
//     const matchesSearch =
//       post.title.toLowerCase().includes(search.toLowerCase()) ||
//       post.description.toLowerCase().includes(search.toLowerCase());
//     return matchesTab && matchesSearch;
//   });

//   // Group by category for "All" tab
//   const grouped =
//     activeTab === "all"
//       ? filtered.reduce((acc, post) => {
//           acc[post.category] = acc[post.category] || [];
//           acc[post.category].push(post);
//           return acc;
//         }, {} as Record<string, typeof blogData>)
//       : { [activeTab]: filtered };

//   return (
//     <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-start w-full">
//       {/* Tabs */}
//       <div className="flex flex-wrap gap-2 mb-4 w-full justify-between items-center">
//         <div className="flex gap-2 flex-wrap">
//           {tabs.map((tab) => (
//             <button
//               key={tab.value}
//               className={`relative px-4 py-2 rounded-2xl font-medium text-base md:text-lg font-plus-jakarta-sans transition-colors duration-300 cursor-pointer
//                 ${
//                   activeTab === tab.value
//                     ? "bg-[#12233d] text-white"
//                     : "bg-[#dbdbd8] text-[#2a2829]"
//                 }`}
//               onClick={() => setActiveTab(tab.value)}
//             >
//               {tab.label}
//               {/* Animated underline */}
//               {activeTab === tab.value && (
//                 <motion.div
//                   layoutId="tab-underline"
//                   className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-blue-400"
//                   transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>
//         <div className="mt-2 md:mt-0 ml-auto flex items-center relative border rounded-2xl font-plus-jakarta-sans w-full max-w-xs">
//           <Search className="w-5 h-5 text-gray-400 absolute left-3 pointer-events-none" />
//           <input
//             type="text"
//             placeholder="Search for blog"
//             className="pl-10 pr-4 py-1 font-medium text-base md:text-lg bg-transparent outline-none w-full"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Blog Groups */}
//       <AnimatePresence mode="wait">
//         {Object.entries(grouped).map(([group, posts]) => (
//           <motion.div
//             key={group}
//             className="w-full flex flex-col gap-8 md:gap-16"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 30 }}
//             transition={{ duration: 0.4, delay: 0.1 }}
//           >
//             <motion.div
//               className="flex justify-between text-[#2a2829] items-center mb-2"
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h3 className="lg:text-[32px] text-[20px] md:text-[24px] font-tomato leading-[140%] font-semibold">
//                 {group}
//               </h3>
//               <Link
//                 href={
//                   group === "Founder Playbooks"
//                     ? "/blog/playbook"
//                     : group === "Execution Guides"
//                     ? "/blog/guides"
//                     : "/case-studies"
//                 }
//                 className="text-[#2a2829] text-sm md:text-base font-medium flex items-center gap-2"
//               >
//                 View All <ArrowRight className="w-4 h-4" />
//               </Link>
//             </motion.div>
//             <div className="flex flex-col sm:flex-row gap-6 sm:justify-between flex-wrap">
//               <AnimatePresence>
//                 {posts.slice(0, 3).map((post, idx) => (
//                   <motion.div
//                     key={idx}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: 20 }}
//                     transition={{ duration: 0.3, delay: idx * 0.1 }}
//                     className="flex-1 min-w-[250px] max-w-[370px]"
//                   >
//                     <BlogCard {...post} />
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default BlogDisplay;





//second try

// import React from "react";
// import BlogCard from "../minicomps/BlogCard";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { ArrowRight, Search, Loader2 } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { WordPressService } from "@/lib/wordpress";
// import { BlogPost } from "@/types/blog";


// const tabs = [
//   { label: "All", value: "all" },
//   { label: "Founder Playbooks", value: "Founder Playbooks" },
//   { label: "Execution Guides", value: "Execution Guides" },
//   { label: "Case Studies", value: "Case Studies" },
// ];

// function BlogDisplay() {
//   const [activeTab, setActiveTab] = useState("all");
//   const [search, setSearch] = useState("");
//   const [blogData, setBlogData] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const wordpressService = WordPressService.getInstance();

//   // Fetch blog posts from WordPress
//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       setError(null);
      
//       try {
//         // Get categories first
//         const categories = await wordpressService.getCategories();
        
//         // Prepare search parameters
//         const params: any = { per_page: 50 };
        
//         // Add category filter if not "all"
//         if (activeTab !== "all") {
//           const categoryId = await wordpressService.getCategoryIdByName(activeTab);
//           if (categoryId) {
//             params.categories = categoryId.toString();
//           }
//         }
        
//         // Add search filter
//         if (search.trim()) {
//           params.search = search.trim();
//         }
        
//         // Fetch posts
//         const posts = await wordpressService.getPosts(params);
        
//         // Transform posts
//         const transformedPosts = posts.map(post => 
//           wordpressService.transformPost(post, categories)
//         );
        
//         setBlogData(transformedPosts);
//       } catch (err) {
//         setError('Failed to fetch blog posts. Please try again later.');
//         console.error('Error fetching posts:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Debounce search
//     const timeoutId = setTimeout(fetchPosts, search ? 500 : 0);
//     return () => clearTimeout(timeoutId);
//   }, [activeTab, search]);

//   // Filter posts for display
//   const filtered = blogData.filter((post) => {
//     const matchesTab = activeTab === "all" ? true : post.category === activeTab;
//     return matchesTab;
//   });

//   // Group by category for "All" tab
//   const grouped =
//     activeTab === "all"
//       ? filtered.reduce((acc, post) => {
//           acc[post.category] = acc[post.category] || [];
//           acc[post.category].push(post);
//           return acc;
//         }, {} as Record<string, BlogPost[]>)
//       : { [activeTab]: filtered };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-center justify-center w-full min-h-[400px]">
//         <Loader2 className="w-8 h-8 animate-spin text-[#12233d]" />
//         <p className="text-[#2a2829] font-medium">Loading blog posts...</p>
//       </div>
//     );
//   }

//   // Error state
//   if (error) {
//     return (
//       <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-center justify-center w-full min-h-[400px]">
//         <p className="text-red-600 font-medium text-center">{error}</p>
//         <button 
//           onClick={() => window.location.reload()}
//           className="px-4 py-2 bg-[#12233d] text-white rounded-2xl font-medium hover:bg-[#1a2f4a] transition-colors"
//         >
//           Retry
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-start w-full">
//       {/* Tabs */}
//       <div className="flex flex-wrap gap-2 mb-4 w-full justify-between items-center">
//         <div className="flex gap-2 flex-wrap">
//           {tabs.map((tab) => (
//             <button
//               key={tab.value}
//               className={`relative px-4 py-2 rounded-2xl font-medium text-base md:text-lg font-plus-jakarta-sans transition-colors duration-300 cursor-pointer
//                 ${
//                   activeTab === tab.value
//                     ? "bg-[#12233d] text-white"
//                     : "bg-[#dbdbd8] text-[#2a2829] hover:bg-[#c5c5c2]"
//                 }`}
//               onClick={() => setActiveTab(tab.value)}
//             >
//               {tab.label}
//               {/* Animated underline */}
//               {activeTab === tab.value && (
//                 <motion.div
//                   layoutId="tab-underline"
//                   className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-blue-400"
//                   transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>
//         <div className="mt-2 md:mt-0 ml-auto flex items-center relative border rounded-2xl font-plus-jakarta-sans w-full max-w-xs">
//           <Search className="w-5 h-5 text-gray-400 absolute left-3 pointer-events-none" />
//           <input
//             type="text"
//             placeholder="Search for blog"
//             className="pl-10 pr-4 py-1 font-medium text-base md:text-lg bg-transparent outline-none w-full"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* No posts found */}
//       {filtered.length === 0 && (
//         <div className="w-full text-center py-12">
//           <p className="text-[#2a2829] text-lg font-medium">
//             {search ? `No posts found for "${search}"` : "No posts found in this category"}
//           </p>
//         </div>
//       )}

//       {/* Blog Groups */}
//       <AnimatePresence mode="wait">
//         {Object.entries(grouped).map(([group, posts]) => (
//           posts.length > 0 && (
//             <motion.div
//               key={group}
//               className="w-full flex flex-col gap-8 md:gap-16"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 30 }}
//               transition={{ duration: 0.4, delay: 0.1 }}
//             >
//               <motion.div
//                 className="flex justify-between text-[#2a2829] items-center mb-2"
//                 initial={{ opacity: 0, x: -40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h3 className="lg:text-[32px] text-[20px] md:text-[24px] font-tomato leading-[140%] font-semibold">
//                   {group}
//                 </h3>
//                 <Link
//                   href={
//                     group === "Founder Playbooks"
//                       ? "/blog/playbook"
//                       : group === "Execution Guides"
//                       ? "/blog/guides"
//                       : "/case-studies"
//                   }
//                   className="text-[#2a2829] text-sm md:text-base font-medium flex items-center gap-2 hover:text-[#12233d] transition-colors"
//                 >
//                   View All <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </motion.div>
//               <div className="flex flex-col sm:flex-row gap-6 sm:justify-between flex-wrap">
//                 <AnimatePresence>
//                   {posts.slice(0, 3).map((post, idx) => (
//                     <motion.div
//                       key={post.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 20 }}
//                       transition={{ duration: 0.3, delay: idx * 0.1 }}
//                       className="flex-1 min-w-[250px] max-w-[370px]"
//                     >
//                       <BlogCard {...post} />
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           )
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default BlogDisplay;




//last try
import React from "react";
import BlogCard from "../minicomps/BlogCard";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Search, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WordPressService } from "@/lib/wordpress";
import { BlogPost } from "@/types/blog";

interface PostsParams {
  per_page: number;
  page?: number;
  categories?: string;
  search?: string;
}

const tabs = [
  { label: "All", value: "all" },
  { label: "Founder Playbooks", value: "Founder Playbooks" },
  { label: "Execution Guides", value: "Execution Guides" },
  { label: "Case Studies", value: "Case Studies" },
];

function BlogDisplay() {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoize the WordPress service instance
  const wordpressService = useMemo(() => WordPressService.getInstance(), []);

  // Fetch blog posts from WordPress
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Get categories first
        const categories = await wordpressService.getCategories();
        
        // Prepare search parameters
        const params: PostsParams = { per_page: 50 };
        
        // Add category filter if not "all"
        if (activeTab !== "all") {
          const categoryId = await wordpressService.getCategoryIdByName(activeTab);
          if (categoryId) {
            params.categories = categoryId.toString();
          }
        }
        
        // Add search filter
        if (search.trim()) {
          params.search = search.trim();
        }
        
        // Fetch posts
        const posts = await wordpressService.getPosts(params);
        
        // Transform posts
        const transformedPosts = posts.map(post => 
          wordpressService.transformPost(post, categories)
        );
        
        setBlogData(transformedPosts);
      } catch (err) {
        setError('Failed to fetch blog posts. Please try again later.');
        console.error('Error fetching posts:', err);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search
    const timeoutId = setTimeout(fetchPosts, search ? 500 : 0);
    return () => clearTimeout(timeoutId);
  }, [activeTab, search, wordpressService]);

  // Filter posts for display
  const filtered = blogData.filter((post) => {
    const matchesTab = activeTab === "all" ? true : post.category === activeTab;
    return matchesTab;
  });

  // Group by category for "All" tab
  const grouped =
    activeTab === "all"
      ? filtered.reduce((acc, post) => {
          acc[post.category] = acc[post.category] || [];
          acc[post.category].push(post);
          return acc;
        }, {} as Record<string, BlogPost[]>)
      : { [activeTab]: filtered };

  // Loading state
  if (loading) {
    return (
      <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-center justify-center w-full min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#12233d]" />
        <p className="text-[#2a2829] font-medium">Loading blog posts...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-center justify-center w-full min-h-[400px]">
        <p className="text-red-600 font-medium text-center">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-[#12233d] text-white rounded-2xl font-medium hover:bg-[#1a2f4a] transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-start w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 w-full justify-between items-center">
        <div className="flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`relative px-4 py-2 rounded-2xl font-medium text-base md:text-lg font-plus-jakarta-sans transition-colors duration-300 cursor-pointer
                ${
                  activeTab === tab.value
                    ? "bg-[#12233d] text-white"
                    : "bg-[#dbdbd8] text-[#2a2829] hover:bg-[#c5c5c2]"
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

      {/* No posts found */}
      {filtered.length === 0 && (
        <div className="w-full text-center py-12">
          <p className="text-[#2a2829] text-lg font-medium">
            {search ? `No posts found for "${search}"` : "No posts found in this category"}
          </p>
        </div>
      )}

      {/* Blog Groups */}
      <AnimatePresence mode="wait">
        {Object.entries(grouped).map(([group, posts]) => (
          posts.length > 0 && (
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
                  className="text-[#2a2829] text-sm md:text-base font-medium flex items-center gap-2 hover:text-[#12233d] transition-colors"
                >
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <div className="flex flex-col sm:flex-row gap-6 sm:justify-between flex-wrap">
                <AnimatePresence>
                  {posts.slice(0, 3).map((post, idx) => (
                    <motion.div
                      key={post.id}
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
          )
        ))}
      </AnimatePresence>
    </div>
  );
}

export default BlogDisplay;


// import React from "react";
// import BlogCard from "../minicomps/BlogCard";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { ArrowRight, Search } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// // WordPress API service
// const WORDPRESS_API_BASE = 'https://public-api.wordpress.com/wp/v2/sites/recreaxltd.wordpress.com';

// const fetchWordPressPosts = async () => {
//   try {
//     const response = await fetch(`${WORDPRESS_API_BASE}/posts?per_page=50&_embed`);
//     if (!response.ok) throw new Error('Failed to fetch posts');
//     const posts = await response.json();
//     return posts;
//   } catch (error) {
//     console.error('Error fetching WordPress posts:', error);
//     return [];
//   }
// };

// const fetchWordPressCategories = async () => {
//   try {
//     const response = await fetch(`${WORDPRESS_API_BASE}/categories`);
//     if (!response.ok) throw new Error('Failed to fetch categories');
//     const categories = await response.json();
//     return categories;
//   } catch (error) {
//     console.error('Error fetching WordPress categories:', error);
//     return [];
//   }
// };

// // Transform WordPress post to your blog format
// const transformWordPressPosts = (posts: any[], categories: any[]) => {
//   return posts.map(post => {
//     // Get category names
//     const postCategories = post.categories.map((catId: any) => {
//       const category = categories.find(cat => cat.id === catId);
//       return category ? category.name : '';
//     }).filter(Boolean);

//     // Get featured image
//     const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/newsletter.png';

//     // Extract excerpt or use content preview
//     const description = post.excerpt.rendered.replace(/<[^>]*>/g, '').trim() || 
//                       post.content.rendered.replace(/<[^>]*>/g, '').substring(0, 100) + '...';

//     // Determine type and category based on WordPress categories
//     let type = 'founder';
//     let category = 'Founder Playbooks';
    
//     if (postCategories.some((cat: string) => cat.toLowerCase().includes('execution') || cat.toLowerCase().includes('guide'))) {
//       type = 'executive';
//       category = 'Execution Guides';
//     } else if (postCategories.some((cat: string) => cat.toLowerCase().includes('case') || cat.toLowerCase().includes('study'))) {
//       type = 'case study';
//       category = 'Case Studies';
//     }

//     // Estimate read time (assuming 200 words per minute)
//     const wordCount = post.content.rendered.replace(/<[^>]*>/g, '').split(' ').length;
//     const readTime = Math.ceil(wordCount / 200) + ' min read';

//     return {
//       id: post.id,
//       image: featuredImage,
//       title: post.title.rendered,
//       description: description,
//       date: new Date(post.date).toLocaleDateString('en-US', { 
//         year: 'numeric', 
//         month: 'long', 
//         day: 'numeric' 
//       }),
//       readTime: readTime,
//       type: type,
//       category: category,
//       slug: post.slug,
//       link: post.link,
//       content: post.content.rendered,
//       wpCategories: postCategories
//     };
//   });
// };

// const tabs = [
//   { label: "All", value: "all" },
//   { label: "Founder Playbooks", value: "Founder Playbooks" },
//   { label: "Execution Guides", value: "Execution Guides" },
//   { label: "Case Studies", value: "Case Studies" },
// ];

// function BlogDisplay() {
//   const [activeTab, setActiveTab] = useState("all");
//   const [search, setSearch] = useState("");
//   const [blogData, setBlogData] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const loadData = async () => {
//       setLoading(true);
//       try {
//         const [posts, wpCategories] = await Promise.all([
//           fetchWordPressPosts(),
//           fetchWordPressCategories()
//         ]);
        
//         setCategories(wpCategories);
//         const transformedPosts = transformWordPressPosts(posts, wpCategories);
//         setBlogData(transformedPosts);
//         setError(null);
//       } catch (err) {
//         console.error('Error loading blog data:', err);
//         setError('Failed to load blog posts');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadData();
//   }, []);

//   // Filter by tab and search
//   const filtered = blogData.filter((post) => {
//     const matchesTab = activeTab === "all" ? true : post.category === activeTab;
//     const matchesSearch =
//       post.title.toLowerCase().includes(search.toLowerCase()) ||
//       post.description.toLowerCase().includes(search.toLowerCase());
//     return matchesTab && matchesSearch;
//   });

//   // Group by category for "All" tab
//   const grouped =
//     activeTab === "all"
//       ? filtered.reduce((acc, post) => {
//           acc[post.category] = acc[post.category] || [];
//           acc[post.category].push(post);
//           return acc;
//         }, {})
//       : { [activeTab]: filtered };

//   if (loading) {
//     return (
//       <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-center justify-center w-full min-h-[400px]">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#12233d]"></div>
//         <p className="text-[#2a2829] text-lg font-plus-jakarta-sans">Loading blog posts...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-center justify-center w-full min-h-[400px]">
//         <p className="text-red-500 text-lg font-plus-jakarta-sans">{error}</p>
//         <button 
//           onClick={() => window.location.reload()} 
//           className="bg-[#12233d] text-white px-4 py-2 rounded-2xl font-plus-jakarta-sans"
//         >
//           Try Again
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="lg:p-[100px] p-4 gap-12 flex flex-col items-start w-full">
//       {/* Tabs */}
//       <div className="flex flex-wrap gap-2 mb-4 w-full justify-between items-center">
//         <div className="flex gap-2 flex-wrap">
//           {tabs.map((tab) => (
//             <button
//               key={tab.value}
//               className={`relative px-4 py-2 rounded-2xl font-medium text-base md:text-lg font-plus-jakarta-sans transition-colors duration-300 cursor-pointer
//                 ${
//                   activeTab === tab.value
//                     ? "bg-[#12233d] text-white"
//                     : "bg-[#dbdbd8] text-[#2a2829]"
//                 }`}
//               onClick={() => setActiveTab(tab.value)}
//             >
//               {tab.label}
//               {/* Animated underline */}
//               {activeTab === tab.value && (
//                 <motion.div
//                   layoutId="tab-underline"
//                   className="absolute left-2 right-2 -bottom-1 h-1 rounded bg-blue-400"
//                   transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                 />
//               )}
//             </button>
//           ))}
//         </div>
//         <div className="mt-2 md:mt-0 ml-auto flex items-center relative border rounded-2xl font-plus-jakarta-sans w-full max-w-xs">
//           <Search className="w-5 h-5 text-gray-400 absolute left-3 pointer-events-none" />
//           <input
//             type="text"
//             placeholder="Search for blog"
//             className="pl-10 pr-4 py-1 font-medium text-base md:text-lg bg-transparent outline-none w-full"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* Blog Groups */}
//       {Object.keys(grouped).length === 0 ? (
//         <div className="w-full flex flex-col items-center justify-center py-12">
//           <p className="text-[#2a2829] text-lg font-plus-jakarta-sans">No blog posts found.</p>
//         </div>
//       ) : (
//         <AnimatePresence mode="wait">
//           {Object.entries(grouped).map(([group, posts]) => (
//             <motion.div
//               key={group}
//               className="w-full flex flex-col gap-8 md:gap-16"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 30 }}
//               transition={{ duration: 0.4, delay: 0.1 }}
//             >
//               <motion.div
//                 className="flex justify-between text-[#2a2829] items-center mb-2"
//                 initial={{ opacity: 0, x: -40 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h3 className="lg:text-[32px] text-[20px] md:text-[24px] font-tomato leading-[140%] font-semibold">
//                   {group}
//                 </h3>
//                 <Link
//                   href={
//                     group === "Founder Playbooks"
//                       ? "/blog/playbook"
//                       : group === "Execution Guides"
//                       ? "/blog/guides"
//                       : "/case-studies"
//                   }
//                   className="text-[#2a2829] text-sm md:text-base font-medium flex items-center gap-2"
//                 >
//                   View All <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </motion.div>
//               <div className="flex flex-col sm:flex-row gap-6 sm:justify-between flex-wrap">
//                 <AnimatePresence>
//                   {posts.slice(0, 3).map((post, idx) => (
//                     <motion.div
//                       key={post.id}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 20 }}
//                       transition={{ duration: 0.3, delay: idx * 0.1 }}
//                       className="flex-1 min-w-[250px] max-w-[370px]"
//                     >
//                       <BlogCard {...post} />
//                     </motion.div>
//                   ))}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       )}
//     </div>
//   );
// }

// export default BlogDisplay;