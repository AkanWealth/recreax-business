// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// import { useRouter, useParams } from "next/navigation";
// import Link from "next/link";
// import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, Loader2 } from "lucide-react";
// import { motion } from "framer-motion";
// import { WordPressService } from "@/lib/wordpress";
// import { BlogPost } from "@/types/blog";
// import BlogCard from "../minicomps/BlogCard";

// interface SingleBlogViewProps {
//   slug?: string;
//   initialPost?: BlogPost; // Add this prop to receive server-side data
// }

// function SingleBlogView({ slug: propSlug, initialPost }: SingleBlogViewProps) {
//   const router = useRouter();
//   const params = useParams();
//   const slug = params?.slug;
//   const currentSlug = propSlug || (slug as string);
  
//   const [post, setPost] = useState<BlogPost | null>(initialPost || null);
//   const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(!initialPost); // Only load if no initial post
//   const [error, setError] = useState<string | null>(null);

//   const wordpressService = WordPressService.getInstance();

//   useEffect(() => {
//     // If we have initial post, just fetch related posts
//     if (initialPost) {
//       const fetchRelatedPosts = async () => {
//         try {
//           if (initialPost.category) {
//             const categoryId = await wordpressService.getCategoryIdByName(initialPost.category);
//             if (categoryId) {
//               const relatedPostsData = await wordpressService.getPosts({
//                 categories: categoryId.toString(),
//                 per_page: 4
//               });
              
//               const categories = await wordpressService.getCategories();
//               const transformedRelated = relatedPostsData
//                 .filter(post => post.id !== initialPost.id)
//                 .slice(0, 3)
//                 .map(post => wordpressService.transformPost(post, categories));
              
//               setRelatedPosts(transformedRelated);
//             }
//           }
//         } catch (err) {
//           console.error('Error fetching related posts:', err);
//         }
//       };

//       fetchRelatedPosts();
//       return;
//     }

//     // If no initial post and no slug, return early
//     if (!currentSlug) return;

//     // Fallback: fetch post client-side (for cases where SSR didn't work)
//     const fetchPostAndRelated = async () => {
//       setLoading(true);
//       setError(null);
      
//       try {
//         const wpPost = await wordpressService.getPostBySlug(currentSlug);
        
//         if (!wpPost) {
//           setError('Blog post not found');
//           return;
//         }

//         setPost(wpPost);

//         if (wpPost.category) {
//           const categoryId = await wordpressService.getCategoryIdByName(wpPost.category);
//           if (categoryId) {
//             const relatedPostsData = await wordpressService.getPosts({
//               categories: categoryId.toString(),
//               per_page: 4
//             });
            
//             const categories = await wordpressService.getCategories();
//             const transformedRelated = relatedPostsData
//               .filter(post => post.id !== wpPost.id)
//               .slice(0, 3)
//               .map(post => wordpressService.transformPost(post, categories));
            
//             setRelatedPosts(transformedRelated);
//           }
//         }
//       } catch (err) {
//         setError('Failed to fetch blog post. Please try again later.');
//         console.error('Error fetching post:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPostAndRelated();
//   }, [currentSlug, initialPost]);

//   const handleShare = (platform: string) => {
//     const url = window.location.href;
//     const title = post?.title || '';
    
//     let shareUrl = '';
//     switch (platform) {
//       case 'facebook':
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
//         break;
//       case 'twitter':
//         shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
//         break;
//       case 'linkedin':
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
//         break;
//     }
    
//     if (shareUrl) {
//       window.open(shareUrl, '_blank', 'width=600,height=400');
//     }
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <Loader2 className="w-8 h-8 animate-spin text-[#12233d] mb-4" />
//         <p className="text-[#2a2829] font-medium">Loading blog post...</p>
//       </div>
//     );
//   }

//   // Error state
//   if (error || !post) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center p-4">
//         <p className="text-red-600 font-medium text-center mb-4">{error || 'Blog post not found'}</p>
//         <Link 
//           href="/blog"
//           className="px-6 py-3 bg-[#12233d] text-white rounded-2xl font-medium hover:bg-[#1a2f4a] transition-colors"
//         >
//           Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="lg:px-[100px] px-4 pt-8 pb-4">
//         <Link 
//           href="/blog"
//           className="inline-flex items-center gap-2 text-[#2a2829] hover:text-[#12233d] transition-colors font-medium"
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Back
//         </Link>
//       </div>

//       {/* Main Content */}
//       <motion.div 
//         className="lg:px-[100px] px-4 pb-16"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Category Badge */}
//         {post.category && (
//           <div className="mb-6">
//             <span className="inline-block px-3 py-1 bg-[#2563eb] text-white text-sm font-medium rounded-full">
//               {post.category}
//             </span>
//           </div>
//         )}

//         {/* Title */}
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-tomato font-semibold text-[#2a2829] leading-[120%] mb-6">
//           {post.title}
//         </h1>

//         {/* Meta Information */}
//         <div className="flex flex-wrap items-center gap-6 mb-8 text-[#6b7280]">
//           <div className="flex items-center gap-2">
//             <User className="w-4 h-4" />
//             <span className="font-medium">ReCreax Team</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Calendar className="w-4 h-4" />
//             <span>{post.date}</span>
//           </div>
//           {post.readTime && (
//             <div className="flex items-center gap-2">
//               <span>{post.readTime}</span>
//             </div>
//           )}
//         </div>

//         {/* Featured Image */}
//         {post.image && (
//           <div className="mb-12 rounded-2xl overflow-hidden">
//             <img 
//               src={post.image} 
//               alt={post.title}
//               className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
//             />
//           </div>
//         )}

//         {/* Content */}
//         <div className="max-w-4xl">
//           {/* Excerpt/Summary */}
//           {post.description && (
//             <div className="mb-8 p-6 bg-[#f8fafc] rounded-2xl border-l-4 border-[#2563eb]">
//               <p className="text-lg font-medium text-[#2a2829] leading-relaxed">
//                 {post.description}
//               </p>
//             </div>
//           )}

//           {/* Main Content */}
//           <div 
//             className="prose prose-lg max-w-none text-[#2a2829] leading-relaxed"
//             dangerouslySetInnerHTML={{ __html: post.content || "" }}
//           />
//         </div>

//         {/* Share Section */}
//         <div className="mt-12 pt-8 border-t border-[#e5e7eb]">
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <h3 className="text-xl font-tomato font-semibold text-[#2a2829]">
//               Share articles
//             </h3>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => handleShare('facebook')}
//                 className="p-2 rounded-full bg-[#1877f2] text-white hover:bg-[#166fe5] transition-colors"
//                 aria-label="Share on Facebook"
//               >
//                 <Facebook className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => handleShare('twitter')}
//                 className="p-2 rounded-full bg-[#1da1f2] text-white hover:bg-[#1a91da] transition-colors"
//                 aria-label="Share on Twitter"
//               >
//                 <Twitter className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => handleShare('linkedin')}
//                 className="p-2 rounded-full bg-[#0077b5] text-white hover:bg-[#006396] transition-colors"
//                 aria-label="Share on LinkedIn"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Related Articles */}
//       {relatedPosts.length > 0 && (
//         <div className="bg-[#f8fafc] py-16">
//           <div className="lg:px-[100px] px-4">
//             <h2 className="text-2xl md:text-3xl font-tomato font-semibold text-[#2a2829] mb-8">
//               Other Articles
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {relatedPosts.slice(0, 3).map((relatedPost, idx) => (
//                 <motion.div
//                   key={relatedPost.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.4, delay: idx * 0.1 }}
//                 >
//                   <BlogCard {...relatedPost} />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CTA Section */}
//       <div className="bg-[#12233d] text-white py-16">
//         <div className="lg:px-[100px] px-4">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
//             <div className="flex-1">
//               <h2 className="text-2xl md:text-3xl font-tomato font-semibold mb-4">
//                 Got a Product Idea?
//               </h2>
//               <h3 className="text-3xl md:text-4xl font-tomato font-bold mb-2">
//                 Let turn your idea into reality
//               </h3>
//               <h3 className="text-3xl md:text-4xl font-tomato font-bold">
//                 and launch faster
//               </h3>
//             </div>
//             <div className="flex-shrink-0">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-[#00d4ff] text-[#12233d] rounded-2xl font-semibold hover:bg-[#00c4ef] transition-colors"
//               >
//                 Book a call with us
//                 <ArrowLeft className="w-4 h-4 rotate-180" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleBlogView;



// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
// import { ArrowLeft, Calendar, User,  Loader2 } from "lucide-react";
// import { motion } from "framer-motion";
// import { WordPressService } from "@/lib/wordpress";
// import { BlogPost } from "@/types/blog";
// import BlogCard from "../minicomps/BlogCard";

// interface SingleBlogViewProps {
//   slug?: string;
//   initialPost?: BlogPost;
// }

// function SingleBlogView({ slug: propSlug, initialPost }: SingleBlogViewProps) {

//   const params = useParams();
//   const slug = params?.slug;
//   const currentSlug = propSlug || (slug as string);
  
//   const [post, setPost] = useState<BlogPost | null>(initialPost || null);
//   const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(!initialPost);
//   const [error, setError] = useState<string | null>(null);

//   const wordpressService = WordPressService.getInstance();

//   useEffect(() => {
//     if (initialPost) {
//       const fetchRelatedPosts = async () => {
//         try {
//           if (initialPost.category) {
//             const categoryId = await wordpressService.getCategoryIdByName(initialPost.category);
//             if (categoryId) {
//               const relatedPostsData = await wordpressService.getPosts({
//                 categories: categoryId.toString(),
//                 per_page: 4
//               });
              
//               const categories = await wordpressService.getCategories();
//               const transformedRelated = relatedPostsData
//                 .filter(post => post.id !== initialPost.id)
//                 .slice(0, 3)
//                 .map(post => wordpressService.transformPost(post, categories));
              
//               setRelatedPosts(transformedRelated);
//             }
//           }
//         } catch (err) {
//           console.error('Error fetching related posts:', err);
//         }
//       };

//       fetchRelatedPosts();
//       return;
//     }

//     if (!currentSlug) return;

//     const fetchPostAndRelated = async () => {
//       setLoading(true);
//       setError(null);
      
//       try {
//         const wpPost = await wordpressService.getPostBySlug(currentSlug);
        
//         if (!wpPost) {
//           setError('Blog post not found');
//           return;
//         }

//         setPost(wpPost);

//         if (wpPost.category) {
//           const categoryId = await wordpressService.getCategoryIdByName(wpPost.category);
//           if (categoryId) {
//             const relatedPostsData = await wordpressService.getPosts({
//               categories: categoryId.toString(),
//               per_page: 4
//             });
            
//             const categories = await wordpressService.getCategories();
//             const transformedRelated = relatedPostsData
//               .filter(post => post.id !== wpPost.id)
//               .slice(0, 3)
//               .map(post => wordpressService.transformPost(post, categories));
            
//             setRelatedPosts(transformedRelated);
//           }
//         }
//       } catch (err) {
//         setError('Failed to fetch blog post. Please try again later.');
//         console.error('Error fetching post:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPostAndRelated();
//   }, [currentSlug, initialPost]);

//   const handleShare = (platform: string) => {
//     const url = window.location.href;
//     const title = post?.title || '';
    
//     let shareUrl = '';
//     switch (platform) {
//       case 'facebook':
//         shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
//         break;
//       case 'twitter':
//         shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
//         break;
//       case 'linkedin':
//         shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
//         break;
//     }
    
//     if (shareUrl) {
//       window.open(shareUrl, '_blank', 'width=600,height=400');
//     }
//   };

//   // Loading state
//   if (loading) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
//         <Loader2 className="w-8 h-8 animate-spin text-[#12233d] mb-4" />
//         <p className="text-[#2a2829] font-medium">Loading blog post...</p>
//       </div>
//     );
//   }

//   // Error state
//   if (error || !post) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
//         <p className="text-red-600 font-medium text-center mb-4">{error || 'Blog post not found'}</p>
//         <Link 
//           href="/blog"
//           className="px-6 py-3 bg-[#12233d] text-white rounded-xl font-medium hover:bg-[#1a2f4a] transition-colors"
//         >
//           Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#F1FAFC]">
//       {/* Navigation Header */}
//       <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <Link 
//             href="/blog"
//             className="inline-flex items-center gap-2 text-gray-600 hover:text-[#12233d] transition-colors font-medium text-sm"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back
//           </Link>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="bg-[#F1FAFC]">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
//            {/* Featured Image */}
//       {post.image && (
//         <div className="w-full mb-6">
//           <motion.div 
//             className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden"
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.3 }}
//           >
//             <img 
//               src="/images/blogimage.png"
//               alt={post.title}
//               className="w-full h-full object-cover rounded-2xl shadow-lg"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//           </motion.div>
//         </div>
//       )}
//           {/* Category Badge */}
//           {post.category && (
//             <motion.div 
//               className="mb-6"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4 }}
//             >
//               <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
//                 {post.category}
//               </span>
//             </motion.div>
//           )}

//           {/* Title */}
//           <motion.h1 
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//           >
//             {post.title}
//           </motion.h1>

//           {/* Meta Information */}
//           <motion.div 
//             className="flex flex-wrap items-center gap-6 mb-8 text-gray-600"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <div className="flex items-center gap-2">
//               <User className="w-4 h-4" />
//               <span className="font-medium text-sm">ReCreax Team</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Calendar className="w-4 h-4" />
//               <span className="text-sm">{post.date}</span>
//             </div>
//             {post.readTime && (
//               <div className="flex items-center gap-2">
//                 <span className="text-sm">{post.readTime}</span>
//               </div>
//             )}
//           </motion.div>
//         </div>
//       </div>

     

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F1FAFC]">
//         <motion.article 
//           className="py-12 lg:py-16"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           {/* Excerpt/Summary */}
//           {post.description && (
//             <div className="mb-8">
//               <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
//                 <p className="text-lg font-medium text-gray-800 leading-relaxed italic">
//                   {post.description}
//                 </p>
//               </div>
//             </div>
//           )}

//           {/* Main Content */}
//           <div 
//             className="prose prose-lg prose-gray max-w-none leading-relaxed
//                        prose-headings:font-bold prose-headings:text-gray-900
//                        prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
//                        prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
//                        prose-p:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed
//                        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
//                        prose-strong:text-gray-900 prose-strong:font-semibold
//                        prose-ul:my-4 prose-ol:my-4
//                        prose-li:mb-2 prose-li:text-gray-700
//                        prose-blockquote:border-l-4 prose-blockquote:border-gray-300 
//                        prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
//                        prose-img:rounded-lg prose-img:shadow-md
//                        prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
//                        prose-pre:bg-gray-900 prose-pre:text-white"
//             dangerouslySetInnerHTML={{ __html: post.content || "" }}
//           />
//         </motion.article>

//         {/* Share Section */}
//         <motion.div 
//           className="py-8 border-t border-gray-200"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//         >
//           <div className="flex items-center justify-between flex-wrap gap-4">
//             <h3 className="text-xl font-bold text-gray-900">
//               Share this article
//             </h3>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => handleShare('facebook')}
//                 className="p-3 rounded-full text-gray-500 
//                           transition-all duration-200 hover:scale-110 shadow-md"
//                 aria-label="Share on Facebook"
//               >
//                 <FaFacebook className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => handleShare('twitter')}
//                 className="p-3 rounded-full  text-gray-500 hover:bg-[#1a91da] 
//                           transition-all duration-200 hover:scale-110 shadow-md"
//                 aria-label="Share on Twitter"
//               >
//                 <FaXTwitter className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => handleShare('twitter')}
//                 className="p-3 rounded-full  text-gray-500 hover:bg-[#1a91da] 
//                           transition-all duration-200 hover:scale-110 shadow-md"
//                 aria-label="Share on Twitter"
//               >
//                 <FaInstagram className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => handleShare('linkedin')}
//                 className="p-3 rounded-full text-gray-500  
//                           transition-all duration-200 hover:scale-110 shadow-md"
//                 aria-label="Share on LinkedIn"
//               >
//                 <FaLinkedin className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Related Articles */}
//       {relatedPosts.length > 0 && (
//         <div className="bg-gray-50 py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
//                 Related Articles
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {relatedPosts.slice(0, 3).map((relatedPost, idx) => (
//                   <motion.div
//                     key={relatedPost.id}
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
//                     className="transform hover:scale-105 transition-transform duration-200"
//                   >
//                     <BlogCard {...relatedPost} />
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       )}

//       {/* CTA Section */}
//       <div className="bg-[#12233d] text-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div 
//             className="text-center lg:text-left lg:flex lg:items-center lg:justify-between"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.8 }}
//           >
//             <div className="lg:flex-1 mb-8 lg:mb-0">
//               <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-200">
//                 Got a Product Idea?
//               </h2>
//               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
//                 Let's turn your idea into reality
//               </h3>
//               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00d4ff]">
//                 and launch faster
//               </h3>
//             </div>
//             <div className="lg:flex-shrink-0">
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#12233d] 
//                           rounded-xl font-bold text-lg hover:bg-[#00c4ef] transition-all duration-200 
//                           hover:scale-105 shadow-lg"
//               >
//                 Book a call with us
//                 <ArrowLeft className="w-5 h-5 rotate-180" />
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleBlogView;




// error fixing
"use client";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { ArrowLeft, Calendar, User, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { WordPressService } from "@/lib/wordpress";
import { BlogPost } from "@/types/blog";
import BlogCard from "../minicomps/BlogCard";
import Image from "next/image";

interface SingleBlogViewProps {
  slug?: string;
  initialPost?: BlogPost;
}

function SingleBlogView({ slug: propSlug, initialPost }: SingleBlogViewProps) {
  const params = useParams();
  const slug = params?.slug;
  const currentSlug = propSlug || (slug as string);
  
  const [post, setPost] = useState<BlogPost | null>(initialPost || null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(!initialPost);
  const [error, setError] = useState<string | null>(null);

  // Memoize the WordPress service instance
  const wordpressService = useMemo(() => WordPressService.getInstance(), []);

  useEffect(() => {
    if (initialPost) {
      const fetchRelatedPosts = async () => {
        try {
          if (initialPost.category) {
            const categoryId = await wordpressService.getCategoryIdByName(initialPost.category);
            if (categoryId) {
              const relatedPostsData = await wordpressService.getPosts({
                categories: categoryId.toString(),
                per_page: 4
              });
              
              const categories = await wordpressService.getCategories();
              const transformedRelated = relatedPostsData
                .filter(post => post.id !== initialPost.id)
                .slice(0, 3)
                .map(post => wordpressService.transformPost(post, categories));
              
              setRelatedPosts(transformedRelated);
            }
          }
        } catch (err) {
          console.error('Error fetching related posts:', err);
        }
      };

      fetchRelatedPosts();
      return;
    }

    if (!currentSlug) return;

    const fetchPostAndRelated = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const wpPost = await wordpressService.getPostBySlug(currentSlug);
        
        if (!wpPost) {
          setError('Blog post not found');
          return;
        }

        setPost(wpPost);

        if (wpPost.category) {
          const categoryId = await wordpressService.getCategoryIdByName(wpPost.category);
          if (categoryId) {
            const relatedPostsData = await wordpressService.getPosts({
              categories: categoryId.toString(),
              per_page: 4
            });
            
            const categories = await wordpressService.getCategories();
            const transformedRelated = relatedPostsData
              .filter(post => post.id !== wpPost.id)
              .slice(0, 3)
              .map(post => wordpressService.transformPost(post, categories));
            
            setRelatedPosts(transformedRelated);
          }
        }
      } catch (err) {
        setError('Failed to fetch blog post. Please try again later.');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPostAndRelated();
  }, [currentSlug, initialPost, wordpressService]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-[#12233d] mb-4" />
        <p className="text-[#2a2829] font-medium">Loading blog post...</p>
      </div>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <p className="text-red-600 font-medium text-center mb-4">{error || 'Blog post not found'}</p>
        <Link 
          href="/blog"
          className="px-6 py-3 bg-[#12233d] text-white rounded-xl font-medium hover:bg-[#1a2f4a] transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F1FAFC]">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#12233d] transition-colors font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-[#F1FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
           {/* Featured Image */}
      {post.image && (
        <div className="w-full mb-6">
          <motion.div 
            className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Image 
              src="/images/blogimage.png"
              alt={post.title}
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      )}
          {/* Category Badge */}
          {post.category && (
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {post.title}
          </motion.h1>

          {/* Meta Information */}
          <motion.div 
            className="flex flex-wrap items-center gap-6 mb-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium text-sm">ReCreax Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{post.date}</span>
            </div>
            {post.readTime && (
              <div className="flex items-center gap-2">
                <span className="text-sm">{post.readTime}</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F1FAFC]">
        <motion.article 
          className="py-12 lg:py-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Excerpt/Summary */}
          {post.description && (
            <div className="mb-8">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-lg font-medium text-gray-800 leading-relaxed italic">
                  {post.description}
                </p>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div 
            className="prose prose-lg prose-gray max-w-none leading-relaxed
                       prose-headings:font-bold prose-headings:text-gray-900
                       prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                       prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                       prose-p:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed
                       prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-gray-900 prose-strong:font-semibold
                       prose-ul:my-4 prose-ol:my-4
                       prose-li:mb-2 prose-li:text-gray-700
                       prose-blockquote:border-l-4 prose-blockquote:border-gray-300 
                       prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                       prose-img:rounded-lg prose-img:shadow-md
                       prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
                       prose-pre:bg-gray-900 prose-pre:text-white"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </motion.article>

        {/* Share Section */}
        <motion.div 
          className="py-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h3 className="text-xl font-bold text-gray-900">
              Share this article
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleShare('facebook')}
                className="p-3 rounded-full text-gray-500 
                          transition-all duration-200 hover:scale-110 shadow-md"
                aria-label="Share on Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-3 rounded-full  text-gray-500  
                          transition-all duration-200 hover:scale-110 shadow-md"
                aria-label="Share on Twitter"
              >
                <FaXTwitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-3 rounded-full  text-gray-500  
                          transition-all duration-200 hover:scale-110 shadow-md"
                aria-label="Share on Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-3 rounded-full text-gray-500  
                          transition-all duration-200 hover:scale-110 shadow-md"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.slice(0, 3).map((relatedPost, idx) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                    className="transform hover:scale-105 transition-transform duration-200"
                  >
                    <BlogCard {...relatedPost} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-[#12233d] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center lg:text-left lg:flex lg:items-center lg:justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="lg:flex-1 mb-8 lg:mb-0">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-200">
                Got a Product Idea?
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                Let&apos;s turn your idea into reality
              </h3>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#00d4ff]">
                and launch faster
              </h3>
            </div>
            <div className="lg:flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00d4ff] text-[#12233d] 
                          rounded-xl font-bold text-lg hover:bg-[#00c4ef] transition-all duration-200 
                          hover:scale-105 shadow-lg"
              >
                Book a call with us
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlogView;