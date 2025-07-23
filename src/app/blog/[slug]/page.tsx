

// import { Metadata } from 'next';
// import { notFound } from 'next/navigation';
// import SingleBlogView from '@/components/homecomps/blogpage/SingleBlogView';
// import { WordPressService } from '../../../lib/wordpress';
// import { BlogPost } from '../../../types/blog';

// interface BlogPostPageProps {
//   params: {
//     slug: string;
//   };
// }

// // Server Component - this runs on the server
// async function getBlogPost(slug: string): Promise<BlogPost | null> {
//   try {
//     console.log('🔍 Looking for blog post with slug:', slug);
//     const wordpressService = WordPressService.getInstance();
    
//     // First try: exact slug match
//     let post = await wordpressService.getPostBySlug(slug);
    
//     if (!post) {
//       console.log('⚠️ Exact slug match failed, trying alternative methods...');
      
//       // Second try: Get all posts and find by slug manually
//       try {
//         const allPosts = await wordpressService.getPosts({ per_page: 100 });
//         console.log('📊 Total posts found:', allPosts.length);
        
//         // Log the first few slugs to see the format
//         console.log('🏷️ Sample slugs from WordPress:', 
//           allPosts.slice(0, 5).map(p => p.slug || 'no-slug').join(', ')
//         );
        
//         // Try to find by slug
//         const foundPost = allPosts.find(p => p.slug === slug);
//         if (foundPost) {
//           const categories = await wordpressService.getCategories();
//           post = wordpressService.transformPost(foundPost, categories);
//           console.log('✅ Found post via manual search:', post.title);
//         }
//       } catch (listError) {
//         console.error('❌ Error getting post list:', listError);
//       }
//     } else {
//       console.log('✅ Found post via direct slug lookup:', post.title);
//     }
    
//     console.log('📝 Final result:', post ? `"${post.title}"` : 'No post found');
//     return post;
//   } catch (error) {
//     console.error('❌ Error fetching blog post:', error);
//     return null;
//   }
// }

// // Generate metadata for SEO
// export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
//   const post = await getBlogPost(params.slug);
  
//   if (!post) {
//     return {
//       title: 'Blog Post Not Found | ReCreax',
//     };
//   }

//   return {
//     title: `${post.title} | ReCreax Blog`,
//     description: post.description || 'Read the latest insights and guides from ReCreax',
//     openGraph: {
//       title: post.title,
//       description: post.description || 'Read the latest insights and guides from ReCreax',
//       images: post.image ? [post.image] : ['/default-og-image.jpg'],
//       type: 'article',
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: post.title,
//       description: post.description || 'Read the latest insights and guides from ReCreax',
//       images: post.image ? [post.image] : ['/default-og-image.jpg'],
//     },
//   };
// }

// // Main page component
// export default async function BlogPostPage({ params }: BlogPostPageProps) {
//   const post = await getBlogPost(params.slug);

//   if (!post) {
//     notFound(); // This will render the not-found.tsx page
//   }

//   return <SingleBlogView initialPost={post} />;
// }
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SingleBlogView from '@/components/homecomps/blogpage/SingleBlogView';
import { WordPressService } from '../../../lib/wordpress';
import { BlogPost } from '../../../types/blog';

// ✅ FIXED: Changed params to be a Promise
interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Server Component - this runs on the server
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    console.log('🔍 Looking for blog post with slug:', slug);
    const wordpressService = WordPressService.getInstance();
    
    // First try: exact slug match
    let post = await wordpressService.getPostBySlug(slug);
    
    if (!post) {
      console.log('⚠️ Exact slug match failed, trying alternative methods...');
      
      // Second try: Get all posts and find by slug manually
      try {
        const allPosts = await wordpressService.getPosts({ per_page: 100 });
        console.log('📊 Total posts found:', allPosts.length);
        
        // Log the first few slugs to see the format
        console.log('🏷️ Sample slugs from WordPress:', 
          allPosts.slice(0, 5).map(p => p.slug || 'no-slug').join(', ')
        );
        
        // Try to find by slug
        const foundPost = allPosts.find(p => p.slug === slug);
        if (foundPost) {
          const categories = await wordpressService.getCategories();
          post = wordpressService.transformPost(foundPost, categories);
          console.log('✅ Found post via manual search:', post.title);
        }
      } catch (listError) {
        console.error('❌ Error getting post list:', listError);
      }
    } else {
      console.log('✅ Found post via direct slug lookup:', post.title);
    }
    
    console.log('📝 Final result:', post ? `"${post.title}"` : 'No post found');
    return post;
  } catch (error) {
    console.error('❌ Error fetching blog post:', error);
    return null;
  }
}

// ✅ FIXED: Added await when accessing params
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params; // Added 'await' here
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | ReCreax',
    };
  }

  return {
    title: `${post.title} | ReCreax Blog`,
    description: post.description || 'Read the latest insights and guides from ReCreax',
    openGraph: {
      title: post.title,
      description: post.description || 'Read the latest insights and guides from ReCreax',
      images: post.image ? [post.image] : ['/default-og-image.jpg'],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || 'Read the latest insights and guides from ReCreax',
      images: post.image ? [post.image] : ['/default-og-image.jpg'],
    },
  };
}

// ✅ FIXED: Added await when accessing params
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params; // Added 'await' here
  const post = await getBlogPost(slug);

  if (!post) {
    notFound(); // This will render the not-found.tsx page
  }

  return <SingleBlogView initialPost={post} />;
}