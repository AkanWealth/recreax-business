"use client";
import React, { useState, useEffect, useMemo } from "react";
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

  // Enhanced content processing to preserve WordPress formatting and alignment
  const processWordPressContent = (content: string) => {
    if (!content) return '';
    
    // Process WordPress blocks and preserve original styling and alignment
    let processedContent = content
      // Handle WordPress image blocks with alignment
      .replace(
        /<!-- wp:image[\s\S]*?-->([\s\S]*?)<!-- \/wp:image -->/g,
        (match, imageContent) => {
          // Check for alignment classes in the original content
          const hasAlignLeft = match.includes('alignleft') || imageContent.includes('alignleft');
          const hasAlignRight = match.includes('alignright') || imageContent.includes('alignright');
          const hasAlignCenter = match.includes('aligncenter') || imageContent.includes('aligncenter');
          
          let alignmentClass = '';
          if (hasAlignLeft) alignmentClass = 'float-left mr-4 mb-4';
          else if (hasAlignRight) alignmentClass = 'float-right ml-4 mb-4';
          else if (hasAlignCenter) alignmentClass = 'mx-auto block';
          
          return imageContent.replace(
            /<img([^>]*)>/g,
            `<img$1 class="w-full max-w-full h-auto rounded-lg shadow-md my-6 ${alignmentClass}" loading="lazy">`
          );
        }
      )
      // Handle WordPress paragraph blocks with alignment
      .replace(
        /<!-- wp:paragraph[\s\S]*?"textAlign":"(left|center|right|justify)"[\s\S]*?-->([\s\S]*?)<!-- \/wp:paragraph -->/g,
        (match, alignment, content) => {
          const alignClass = alignment === 'center' ? 'text-center' : 
                           alignment === 'right' ? 'text-right' : 
                           alignment === 'justify' ? 'text-justify' : 'text-left';
          return `<div class="${alignClass}">${content}</div>`;
        }
      )
      // Handle regular paragraph blocks
      .replace(
        /<!-- wp:paragraph[\s\S]*?-->([\s\S]*?)<!-- \/wp:paragraph -->/g,
        '$1'
      )
      // Handle WordPress heading blocks with alignment
      .replace(
        /<!-- wp:heading[\s\S]*?"textAlign":"(left|center|right)"[\s\S]*?-->([\s\S]*?)<!-- \/wp:heading -->/g,
        (match, alignment, content) => {
          const alignClass = alignment === 'center' ? 'text-center' : 
                           alignment === 'right' ? 'text-right' : 'text-left';
          return content.replace(/<(h[1-6])([^>]*)>/g, `<$1$2 class="${alignClass}">`);
        }
      )
      // Handle regular heading blocks
      .replace(
        /<!-- wp:heading[\s\S]*?-->([\s\S]*?)<!-- \/wp:heading -->/g,
        '$1'
      )
      // Handle WordPress table blocks with alignment
      .replace(
        /<!-- wp:table[\s\S]*?-->([\s\S]*?)<!-- \/wp:table -->/g,
        (match, tableContent) => {
          // Check for alignment in the block attributes
          const hasAlignLeft = match.includes('"align":"left"');
          const hasAlignRight = match.includes('"align":"right"');
          const hasAlignCenter = match.includes('"align":"center"');
          
          let tableClass = 'wp-block-table';
          if (hasAlignLeft) tableClass += ' alignleft';
          else if (hasAlignRight) tableClass += ' alignright';
          else if (hasAlignCenter) tableClass += ' aligncenter';
          
          return `<figure class="${tableClass}">${tableContent}</figure>`;
        }
      )
      // Handle WordPress list blocks with alignment
      .replace(
        /<!-- wp:list[\s\S]*?"textAlign":"(left|center|right)"[\s\S]*?-->([\s\S]*?)<!-- \/wp:list -->/g,
        (match, alignment, content) => {
          const alignClass = alignment === 'center' ? 'text-center' : 
                           alignment === 'right' ? 'text-right' : 'text-left';
          return `<div class="${alignClass}">${content}</div>`;
        }
      )
      // Handle regular list blocks
      .replace(
        /<!-- wp:list[\s\S]*?-->([\s\S]*?)<!-- \/wp:list -->/g,
        '$1'
      )
      // Handle WordPress quote blocks with alignment
      .replace(
        /<!-- wp:quote[\s\S]*?"textAlign":"(left|center|right)"[\s\S]*?-->([\s\S]*?)<!-- \/wp:quote -->/g,
        (match, alignment, content) => {
          const alignClass = alignment === 'center' ? 'text-center' : 
                           alignment === 'right' ? 'text-right' : 'text-left';
          return `<blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6 bg-blue-50 p-4 rounded-r-lg ${alignClass}">${content}</blockquote>`;
        }
      )
      // Handle regular quote blocks
      .replace(
        /<!-- wp:quote[\s\S]*?-->([\s\S]*?)<!-- \/wp:quote -->/g,
        '<blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6 bg-blue-50 p-4 rounded-r-lg">$1</blockquote>'
      )
      // Handle WordPress code blocks
      .replace(
        /<!-- wp:code[\s\S]*?-->([\s\S]*?)<!-- \/wp:code -->/g,
        '<pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6"><code>$1</code></pre>'
      )
      // Clean up any remaining WordPress comments
      .replace(/<!-- \/?wp:.*?-->/g, '');
    
    return processedContent;
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

  // Add useEffect to inject styles
  useEffect(() => {
    const styleId = 'wordpress-content-styles';
    
    // Check if styles are already injected
    if (document.getElementById(styleId)) {
      return;
    }

    // Create and inject styles
    const style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      .wordpress-content {
        line-height: 1.7;
        color: #374151;
      }

      .wordpress-content p {
        margin-bottom: 1rem;
        line-height: 1.7;
        color: #374151;
      }

      .wordpress-content h1,
      .wordpress-content h2,
      .wordpress-content h3,
      .wordpress-content h4,
      .wordpress-content h5,
      .wordpress-content h6 {
        font-weight: 700;
        color: #111827;
        margin-top: 2rem;
        margin-bottom: 1rem;
      }

      .wordpress-content h2 {
        font-size: 1.875rem;
        line-height: 2.25rem;
      }

      .wordpress-content h3 {
        font-size: 1.5rem;
        line-height: 2rem;
      }

      .wordpress-content h4 {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }

      .wordpress-content .wp-block-table {
        margin: 2rem 0;
        overflow-x: auto;
      }

      .wordpress-content .wp-block-table.alignleft {
        float: left;
        margin-right: 2rem;
        margin-bottom: 1rem;
        max-width: 50%;
      }

      .wordpress-content .wp-block-table.alignright {
        float: right;
        margin-left: 2rem;
        margin-bottom: 1rem;
        max-width: 50%;
      }

      .wordpress-content .wp-block-table.aligncenter {
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: fit-content;
      }

      .wordpress-content table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #e5e7eb;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      }

      .wordpress-content table th,
      .wordpress-content table td {
        padding: 0.75rem 1rem;
        text-align: left;
        border-bottom: 1px solid #e5e7eb;
        border-right: 1px solid #e5e7eb;
      }

      .wordpress-content table th:last-child,
      .wordpress-content table td:last-child {
        border-right: none;
      }

      .wordpress-content table th {
        background: #f9fafb;
        font-weight: 600;
        color: #374151;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      .wordpress-content table tbody tr:last-child td {
        border-bottom: none;
      }

      .wordpress-content table tbody tr:hover {
        background: #f9fafb;
      }

      .wordpress-content .text-left {
        text-align: left;
      }

      .wordpress-content .text-center {
        text-align: center;
      }

      .wordpress-content .text-right {
        text-align: right;
      }

      .wordpress-content .text-justify {
        text-align: justify;
      }

      .wordpress-content img.alignleft {
        float: left;
        margin-right: 1.5rem;
        margin-bottom: 1rem;
        max-width: 50%;
      }

      .wordpress-content img.alignright {
        float: right;
        margin-left: 1.5rem;
        margin-bottom: 1rem;
        max-width: 50%;
      }

      .wordpress-content img.aligncenter {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .wordpress-content::after {
        content: "";
        display: table;
        clear: both;
      }

      .wordpress-content ul,
      .wordpress-content ol {
        margin: 1rem 0;
        padding-left: 1.5rem;
      }

      .wordpress-content li {
        margin-bottom: 0.5rem;
        color: #374151;
      }

      .wordpress-content a {
        color: #2563eb;
        text-decoration: none;
      }

      .wordpress-content a:hover {
        color: #1d4ed8;
        text-decoration: underline;
      }

      .wordpress-content blockquote {
        margin: 2rem 0;
        padding: 1.5rem;
        background: #eff6ff;
        border-left: 4px solid #3b82f6;
        border-radius: 0 8px 8px 0;
        font-style: italic;
        color: #4b5563;
      }

      .wordpress-content pre {
        background: #1f2937;
        color: white;
        padding: 1.5rem;
        border-radius: 8px;
        overflow-x: auto;
        margin: 2rem 0;
        font-family: 'Courier New', Courier, monospace;
        font-size: 0.875rem;
        line-height: 1.5;
      }

      .wordpress-content code {
        background: #f3f4f6;
        color: #1f2937;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-family: 'Courier New', Courier, monospace;
        font-size: 0.875rem;
      }

      .wordpress-content pre code {
        background: transparent;
        color: inherit;
        padding: 0;
      }

      @media (max-width: 768px) {
        .wordpress-content .wp-block-table.alignleft,
        .wordpress-content .wp-block-table.alignright {
          float: none;
          margin: 1rem 0;
          max-width: 100%;
        }

        .wordpress-content img.alignleft,
        .wordpress-content img.alignright {
          float: none;
          margin: 1rem auto;
          max-width: 100%;
          display: block;
        }

        .wordpress-content table {
          font-size: 0.875rem;
        }

        .wordpress-content table th,
        .wordpress-content table td {
          padding: 0.5rem;
        }
      }
    `;
    
    document.head.appendChild(style);

    // Cleanup function to remove styles when component unmounts
    return () => {
      const existingStyle = document.getElementById(styleId);
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

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

            {/* Main Content - Now preserves WordPress formatting and alignment */}
            <div 
              className="wordpress-content max-w-none"
              dangerouslySetInnerHTML={{ __html: processWordPressContent(post.content || "") }}
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
                  className="p-3 rounded-full text-gray-500 hover:text-blue-600
                            transition-all duration-200 hover:scale-110 shadow-md"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-3 rounded-full text-gray-500 hover:text-blue-400
                            transition-all duration-200 hover:scale-110 shadow-md"
                  aria-label="Share on Twitter"
                >
                  <FaXTwitter className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('instagram')}
                  className="p-3 rounded-full text-gray-500 hover:text-pink-500
                            transition-all duration-200 hover:scale-110 shadow-md"
                  aria-label="Share on Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-3 rounded-full text-gray-500 hover:text-blue-700
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


// "use client";
// import React from "react";
// import { useState, useEffect, useMemo } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
// import { ArrowLeft, Calendar, User, Loader2 } from "lucide-react";
// import { motion } from "framer-motion";
// import { WordPressService } from "@/lib/wordpress";
// import { BlogPost } from "@/types/blog";
// import BlogCard from "../minicomps/BlogCard";
// import Image from "next/image";

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

//   // Memoize the WordPress service instance
//   const wordpressService = useMemo(() => WordPressService.getInstance(), []);

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
//   }, [currentSlug, initialPost, wordpressService]);

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

//  // Enhanced content processing to preserve WordPress formatting
// const processWordPressContent = (content: string) => {
//   if (!content) return '';
  
//   // Process WordPress blocks and preserve styling
//   let processedContent = content
//     // Handle WordPress image blocks - replaced /gs with /g and [\s\S]*?
//     .replace(
//       /<!-- wp:image[\s\S]*?-->([\s\S]*?)<!-- \/wp:image -->/g,
//       (match, imageContent) => {
//         // Extract image from the content and add responsive classes
//         return imageContent.replace(
//           /<img([^>]*)>/g,
//           '<img$1 class="w-full h-auto rounded-lg shadow-md my-6" loading="lazy">'
//         );
//       }
//     )
//     // Handle WordPress paragraph blocks
//     .replace(
//       /<!-- wp:paragraph[\s\S]*?-->([\s\S]*?)<!-- \/wp:paragraph -->/g,
//       '$1'
//     )
//     // Handle WordPress heading blocks
//     .replace(
//       /<!-- wp:heading[\s\S]*?-->([\s\S]*?)<!-- \/wp:heading -->/g,
//       '$1'
//     )
//     // Handle WordPress list blocks
//     .replace(
//       /<!-- wp:list[\s\S]*?-->([\s\S]*?)<!-- \/wp:list -->/g,
//       '$1'
//     )
//     // Handle WordPress quote blocks - fixed regex here
//     .replace(
//       /<!-- wp:quote[\s\S]*?-->([\s\S]*?)<!-- \/wp:quote -->/g,
//       '<blockquote class="border-l-4 border-blue-500 pl-6 italic text-gray-700 my-6 bg-blue-50 p-4 rounded-r-lg">$1</blockquote>'
//     )
//     // Handle WordPress code blocks
//     .replace(
//       /<!-- wp:code[\s\S]*?-->([\s\S]*?)<!-- \/wp:code -->/g,
//       '<pre class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto my-6"><code>$1</code></pre>'
//     )
//     // Clean up any remaining WordPress comments
//     .replace(/<!-- \/?wp:.*?-->/g, '')
//     // Ensure proper spacing for paragraphs
//     .replace(/<p>/g, '<p class="mb-4 text-gray-700 leading-relaxed">')
//     // Style headings
//     .replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">')
//     .replace(/<h3>/g, '<h3 class="text-xl font-bold text-gray-900 mt-6 mb-3">')
//     .replace(/<h4>/g, '<h4 class="text-lg font-bold text-gray-900 mt-4 mb-2">')
//     // Style links
//     .replace(/<a([^>]*)>/g, '<a$1 class="text-blue-600 hover:text-blue-800 hover:underline">')
//     // Style lists
//     .replace(/<ul>/g, '<ul class="list-disc list-inside my-4 space-y-2">')
//     .replace(/<ol>/g, '<ol class="list-decimal list-inside my-4 space-y-2">')
//     .replace(/<li>/g, '<li class="text-gray-700">')
//     // Style strong/bold text
//     .replace(/<strong>/g, '<strong class="font-semibold text-gray-900">')
//     .replace(/<b>/g, '<b class="font-semibold text-gray-900">');
  
//   return processedContent;
// };

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
//           {/* Featured Image */}
//           {post.image && (
//             <div className="w-full mb-6">
//               <motion.div 
//                 className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden"
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.7, delay: 0.3 }}
//               >
//                 <Image 
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover rounded-2xl shadow-lg"
//                   priority
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//               </motion.div>
//             </div>
//           )}
          
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

//           {/* Main Content - Now preserves WordPress formatting */}
//           <div 
//             className="wordpress-content max-w-none"
//             dangerouslySetInnerHTML={{ __html: processWordPressContent(post.content || "") }}
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
//                 className="p-3 rounded-full text-gray-500 hover:text-blue-600
//                           transition-all duration-200 hover:scale-110 shadow-md"
//                 aria-label="Share on Facebook"
//               >
//                 <FaFacebook className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => handleShare('twitter')}
//                 className="p-3 rounded-full text-gray-500 hover:text-blue-400
//                           transition-all duration-200 hover:scale-110 shadow-md"
//                 aria-label="Share on Twitter"
//               >
//                 <FaXTwitter className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => handleShare('instagram')}
//                 className="p-3 rounded-full text-gray-500 hover:text-pink-500
//                           transition-all duration-200 hover:scale-110 shadow-md"
//                 aria-label="Share on Instagram"
//               >
//                 <FaInstagram className="w-5 h-5" />
//               </button>
//               <button
//                 onClick={() => handleShare('linkedin')}
//                 className="p-3 rounded-full text-gray-500 hover:text-blue-700
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
//                 Let&apos;s turn your idea into reality
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

//       {/* WordPress Content Styles */}
//       <style jsx global>{`
//         .wordpress-content img {
//           max-width: 100%;
//           height: auto;
//           border-radius: 8px;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//           margin: 1.5rem 0;
//         }
        
//         .wordpress-content figure {
//           margin: 1.5rem 0;
//         }
        
//         .wordpress-content figcaption {
//           text-align: center;
//           font-style: italic;
//           color: #6b7280;
//           margin-top: 0.5rem;
//           font-size: 0.875rem;
//         }
        
//         .wordpress-content .wp-block-quote {
//           border-left: 4px solid #3b82f6;
//           padding-left: 1.5rem;
//           font-style: italic;
//           color: #4b5563;
//           margin: 1.5rem 0;
//           background: #eff6ff;
//           padding: 1rem 1.5rem;
//           border-radius: 0 8px 8px 0;
//         }
        
//         .wordpress-content .wp-block-code {
//           background: #1f2937;
//           color: white;
//           padding: 1rem;
//           border-radius: 8px;
//           overflow-x: auto;
//           margin: 1.5rem 0;
//           font-family: 'Courier New', Courier, monospace;
//         }
        
//         .wordpress-content .wp-block-table {
//           width: 100%;
//           border-collapse: collapse;
//           margin: 1.5rem 0;
//         }
        
//         .wordpress-content .wp-block-table th,
//         .wordpress-content .wp-block-table td {
//           border: 1px solid #d1d5db;
//           padding: 0.75rem;
//           text-align: left;
//         }
        
//         .wordpress-content .wp-block-table th {
//           background: #f9fafb;
//           font-weight: 600;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default SingleBlogView;