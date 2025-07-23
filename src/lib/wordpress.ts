// import { WordPressBlogPost, BlogPost, WordPressCategory } from '../types/blog';

// import { wordpressCache } from '@/utils/wordpress-cache';
// import { WORDPRESS_CONFIG } from '@/config/wordpress';

// export class WordPressService {
//   private static instance: WordPressService;
//   private categoriesCache: WordPressCategory[] | null = null;

//   public static getInstance(): WordPressService {
//     if (!WordPressService.instance) {
//       WordPressService.instance = new WordPressService();
//     }
//     return WordPressService.instance;
//   }

//   // Fetch all posts with optional filtering
//   // async getPosts(params?: {
//   //   categories?: string;
//   //   search?: string;
//   //   per_page?: number;
//   //   page?: number;
//   // }): Promise<WordPressBlogPost[]> {
//   //   try {
//   //     const searchParams = new URLSearchParams();
      
//   //     if (params?.categories) searchParams.append('categories', params.categories);
//   //     if (params?.search) searchParams.append('search', params.search);
//   //     if (params?.per_page) searchParams.append('per_page', params.per_page.toString());
//   //     if (params?.page) searchParams.append('page', params.page.toString());
      
//   //     searchParams.append('_embed', 'true'); // Include featured media and other embedded data
//   //     searchParams.append('status', 'publish'); // Only published posts
//   //     searchParams.append('orderby', 'date'); // Order by date
//   //     searchParams.append('order', 'desc'); // Newest first
      
//   //     const cacheKey = `posts_${searchParams.toString()}`;
//   //     const cachedData = wordpressCache.get(cacheKey);
      
//   //     if (cachedData) {
//   //       return cachedData;
//   //     }
      
//   //     const url = `${WORDPRESS_CONFIG.API_URL}/posts?${searchParams.toString()}`;
//   //     console.log('Fetching from WordPress:', url);
      
//   //     const response = await fetch(url, {
//   //       headers: {
//   //         'Accept': 'application/json',
//   //         'Content-Type': 'application/json',
//   //       },
//   //     });
      
//   //     if (!response.ok) {
//   //       throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
//   //     }
      
//   //     const data = await response.json();
//   //     wordpressCache.set(cacheKey, data);
      
//   //     return data;
//   //   } catch (error) {
//   //     console.error('Error fetching WordPress posts:', error);
//   //     return [];
//   //   }
//   // }


// async getPosts(params?: {
//   categories?: string;
//   search?: string;
//   per_page?: number;
//   page?: number;
//   slug?: string;
//   exclude?: string;
// }): Promise<WordPressBlogPost[]> {
//   try {
//     const searchParams = new URLSearchParams();
    
//     if (params?.categories) searchParams.append('categories', params.categories);
//     if (params?.search) searchParams.append('search', params.search);
//     if (params?.per_page) searchParams.append('per_page', params.per_page.toString());
//     if (params?.page) searchParams.append('page', params.page.toString());
//     if (params?.slug) searchParams.append('slug', params.slug);
//     if (params?.exclude) searchParams.append('exclude', params.exclude);
    
//     searchParams.append('_embed', 'true'); // Include featured media and other embedded data
//     searchParams.append('status', 'publish'); // Only published posts
//     searchParams.append('orderby', 'date'); // Order by date
//     searchParams.append('order', 'desc'); // Newest first
    
//     const cacheKey = `posts_${searchParams.toString()}`;
//     const cachedData = wordpressCache.get(cacheKey);
    
//     if (cachedData) {
//       return cachedData;
//     }
    
//     const url = `${WORDPRESS_CONFIG.API_URL}/posts?${searchParams.toString()}`;
//     console.log('Fetching from WordPress:', url);
    
//     const response = await fetch(url, {
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });
    
//     if (!response.ok) {
//       throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
//     }
    
//     const data = await response.json();
//     wordpressCache.set(cacheKey, data);
    
//     return data;
//   } catch (error) {
//     console.error('Error fetching WordPress posts:', error);
//     return [];
//   }
// }



//   // Fetch categories
//   async getCategories(): Promise<WordPressCategory[]> {
//     if (this.categoriesCache) {
//       return this.categoriesCache;
//     }

//     const cacheKey = 'categories';
//     const cachedData = wordpressCache.get(cacheKey);
    
//     if (cachedData) {
//       this.categoriesCache = cachedData;
//       return cachedData;
//     }

//     try {
//       const response = await fetch(`${WORDPRESS_CONFIG.API_URL}/categories?per_page=100`, {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//       });
      
//       if (!response.ok) {
//         throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
//       }
      
//       const data = await response.json();
//       this.categoriesCache = data;
//       wordpressCache.set(cacheKey, data);
      
//       return data;
//     } catch (error) {
//       console.error('Error fetching WordPress categories:', error);
//       return [];
//     }
//   }

//   // Get category by slug
//   async getCategoryBySlug(slug: string): Promise<WordPressCategory | null> {
//     const categories = await this.getCategories();
//     return categories.find(cat => cat.slug === slug) || null;
//   }

//   // Get category ID by name
//   async getCategoryIdByName(name: string): Promise<number | null> {
//     const categories = await this.getCategories();
//     const category = categories.find(cat => 
//       cat.name.toLowerCase() === name.toLowerCase()
//     );
//     return category?.id || null;
//   }

//   async getPostBySlug(slug: string): Promise<BlogPost | null> {
//   try {
//     const cacheKey = `post_${slug}`;
//     const cachedData = wordpressCache.get(cacheKey);
    
//     if (cachedData) {
//       return cachedData;
//     }
    
//     const url = `${WORDPRESS_CONFIG.API_URL}/posts?slug=${slug}&_embed=true&status=publish`;
//     console.log('Fetching post by slug from WordPress:', url);
    
//     const response = await fetch(url, {
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });
    
//     if (!response.ok) {
//       throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
//     }
    
//     const data = await response.json();
    
//     if (!Array.isArray(data) || data.length === 0) {
//       return null;
//     }
    
//     // Get categories for transformation
//     const categories = await this.getCategories();
//     const transformedPost = this.transformPost(data[0], categories);
    
//     wordpressCache.set(cacheKey, transformedPost);
//     return transformedPost;
    
//   } catch (error) {
//     console.error('Error fetching post by slug:', error);
//     return null;
//   }
// }

//   // Transform WordPress post to your blog post format
//   transformPost(wpPost: WordPressBlogPost, categories: WordPressCategory[]): BlogPost {
//     // Get featured image URL
//     const featuredImage = this.extractFeaturedImageUrl(wpPost);

//     // Get category name
//     const categoryId = wpPost.categories[0];
//     const category = categories.find(cat => cat.id === categoryId);
//     const categoryName = category?.name || 'Uncategorized';

//     // Map category to your type system
//     const type = this.mapCategoryToType(categoryName);

//     // Calculate read time (rough estimate: 200 words per minute)
//     const wordCount = this.stripHtml(wpPost.content.rendered).split(/\s+/).filter(word => word.length > 0).length;
//     const readTime = Math.max(1, Math.ceil(wordCount / 200));

//     // Clean description from excerpt
//     let description = this.stripHtml(wpPost.excerpt.rendered);
//     if (description.length > 150) {
//       description = description.substring(0, 150) + '...';
//     }
//     if (!description) {
//       // Fallback to content if no excerpt
//       const contentText = this.stripHtml(wpPost.content.rendered);
//       description = contentText.substring(0, 150) + '...';
//     }

//     return {
//       id: wpPost.id,
//       image: featuredImage,
//       title: this.stripHtml(wpPost.title.rendered),
//       description,
//       date: new Date(wpPost.date).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       }),
//       readTime: `${readTime} min read`,
//       type,
//       category: categoryName,
//       slug: wpPost.slug,
//       content: wpPost.content.rendered,
//       link: wpPost.link
//     };
//   }

//   // Helper to extract featured image URL
//   private extractFeaturedImageUrl(wpPost: WordPressBlogPost): string {
//     // Check embedded featured media first
//     if (wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
//       return wpPost._embedded['wp:featuredmedia'][0].source_url;
//     }
    
//     // If no featured image, return fallback
//     return WORDPRESS_CONFIG.FALLBACK_IMAGE;
//   }

//   // Map WordPress categories to your type system
//   private mapCategoryToType(categoryName: string): string {
//     // Check exact mapping first
//     if (WORDPRESS_CONFIG.CATEGORY_MAPPING[categoryName]) {
//       return WORDPRESS_CONFIG.CATEGORY_MAPPING[categoryName];
//     }
    
//     // Fallback to keyword matching
//     const lowerCaseName = categoryName.toLowerCase();
//     if (lowerCaseName.includes('founder') || lowerCaseName.includes('playbook')) {
//       return 'founder';
//     }
//     if (lowerCaseName.includes('execution') || lowerCaseName.includes('guide')) {
//       return 'executive';
//     }
//     if (lowerCaseName.includes('case') || lowerCaseName.includes('study')) {
//       return 'case study';
//     }
//     return 'founder'; // default
//   }

//   // Strip HTML tags and decode entities
//   private stripHtml(html: string): string {
//     return html
//       .replace(/<[^>]*>/g, '')
//       .replace(/&nbsp;/g, ' ')
//       .replace(/&amp;/g, '&')
//       .replace(/&lt;/g, '<')
//       .replace(/&gt;/g, '>')
//       .replace(/&quot;/g, '"')
//       .replace(/&#39;/g, "'")
//       .trim();
//   }
// }




// import { WordPressBlogPost, BlogPost, WordPressCategory } from '../types/blog';
// import { wordpressCache } from '@/utils/wordpress-cache';
// import { WORDPRESS_CONFIG } from '@/config/wordpress';

// interface GetPostsParams {
//   categories?: string;
//   search?: string;
//   per_page?: number;
//   page?: number;
//   slug?: string;
//   exclude?: string;
// }

// export class WordPressService {
//   private static instance: WordPressService;
//   private categoriesCache: WordPressCategory[] | null = null;

//   public static getInstance(): WordPressService {
//     if (!WordPressService.instance) {
//       WordPressService.instance = new WordPressService();
//     }
//     return WordPressService.instance;
//   }

//   async getPosts(params?: GetPostsParams): Promise<WordPressBlogPost[]> {
//     try {
//       const searchParams = new URLSearchParams();
      
//       if (params?.categories) searchParams.append('categories', params.categories);
//       if (params?.search) searchParams.append('search', params.search);
//       if (params?.per_page) searchParams.append('per_page', params.per_page.toString());
//       if (params?.page) searchParams.append('page', params.page.toString());
//       if (params?.slug) searchParams.append('slug', params.slug);
//       if (params?.exclude) searchParams.append('exclude', params.exclude);
      
//       searchParams.append('_embed', 'true'); // Include featured media and other embedded data
//       searchParams.append('status', 'publish'); // Only published posts
//       searchParams.append('orderby', 'date'); // Order by date
//       searchParams.append('order', 'desc'); // Newest first
      
//       const cacheKey = `posts_${searchParams.toString()}`;
//       const cachedData = wordpressCache.get(cacheKey);
      
//       if (cachedData) {
//         console.log('📋 Using cached posts data');
//         return cachedData;
//       }
      
//       const url = `${WORDPRESS_CONFIG.API_URL}/posts?${searchParams.toString()}`;
//       console.log('🌐 Fetching from WordPress:', url);
      
//       const response = await fetch(url, {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//       });
      
//       if (!response.ok) {
//         console.error('❌ WordPress API Response Error:', {
//           status: response.status,
//           statusText: response.statusText,
//           url: url
//         });
//         throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
//       }
      
//       const data: WordPressBlogPost[] = await response.json();
//       console.log('✅ WordPress API returned:', data.length, 'posts');
      
//       // Log first few posts for debugging
//       if (data.length > 0) {
//         console.log('📝 Sample posts:', data.slice(0, 3).map((post) => ({
//           id: post.id,
//           slug: post.slug,
//           title: post.title?.rendered,
//           status: post.status
//         })));
//       }
      
//       wordpressCache.set(cacheKey, data);
      
//       return data;
//     } catch (error) {
//       console.error('❌ Error fetching WordPress posts:', error);
//       return [];
//     }
//   }

//   // Fetch categories
//   async getCategories(): Promise<WordPressCategory[]> {
//     if (this.categoriesCache) {
//       return this.categoriesCache;
//     }

//     const cacheKey = 'categories';
//     const cachedData = wordpressCache.get(cacheKey);
    
//     if (cachedData) {
//       this.categoriesCache = cachedData;
//       return cachedData;
//     }

//     try {
//       const response = await fetch(`${WORDPRESS_CONFIG.API_URL}/categories?per_page=100`, {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//       });
      
//       if (!response.ok) {
//         throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
//       }
      
//       const data: WordPressCategory[] = await response.json();
//       this.categoriesCache = data;
//       wordpressCache.set(cacheKey, data);
      
//       return data;
//     } catch (error) {
//       console.error('Error fetching WordPress categories:', error);
//       return [];
//     }
//   }

//   // Get category by slug
//   async getCategoryBySlug(slug: string): Promise<WordPressCategory | null> {
//     const categories = await this.getCategories();
//     return categories.find(cat => cat.slug === slug) || null;
//   }

//   // Get category ID by name
//   async getCategoryIdByName(name: string): Promise<number | null> {
//     const categories = await this.getCategories();
//     const category = categories.find(cat => 
//       cat.name.toLowerCase() === name.toLowerCase()
//     );
//     return category?.id || null;
//   }

//   // ENHANCED getPostBySlug with multiple fallback methods
//   async getPostBySlug(slug: string): Promise<BlogPost | null> {
//     console.log('🔍 Looking for blog post with slug:', slug);
    
//     try {
//       // Method 1: Check cache first
//       const cacheKey = `post_${slug}`;
//       const cachedData = wordpressCache.get(cacheKey);
      
//       if (cachedData) {
//         console.log('📋 Found cached post:', cachedData.title);
//         return cachedData;
//       }
      
//       // Method 2: Direct API call by slug
//       const url = `${WORDPRESS_CONFIG.API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=true&status=publish`;
//       console.log('🌐 Fetching post by slug from WordPress:', url);
      
//       const response = await fetch(url, {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//       });
      
//       if (!response.ok) {
//         console.error('❌ WordPress API Response Error:', {
//           status: response.status,
//           statusText: response.statusText,
//           url: url
//         });
//         // Don't throw here, try fallback methods
//       } else {
//         const data: WordPressBlogPost[] = await response.json();
//         console.log('📊 Direct slug API returned:', data.length, 'posts');
        
//         if (Array.isArray(data) && data.length > 0) {
//           const categories = await this.getCategories();
//           const transformedPost = this.transformPost(data[0], categories);
//           wordpressCache.set(cacheKey, transformedPost);
//           console.log('✅ Found post via direct slug lookup:', transformedPost.title);
//           return transformedPost;
//         }
//       }
      
//       console.log('⚠️ Direct slug lookup failed, trying fallback methods...');
      
//       // Method 3: Try URL decoding (in case of special characters)
//       try {
//         const decodedSlug = decodeURIComponent(slug);
//         if (decodedSlug !== slug) {
//           console.log('🔄 Trying with decoded slug:', decodedSlug);
//           const decodedResult = await this.getPostBySlug(decodedSlug);
//           if (decodedResult) {
//             return decodedResult;
//           }
//         }
//       } catch (error) {
//         console.log('⚠️ URL decoding failed, continuing...', error);
//       }
      
//       // Method 4: Search through all posts manually
//       console.log('🔍 Searching through all posts...');
//       const allPosts = await this.getPosts({ per_page: 100 });
      
//       if (allPosts.length === 0) {
//         console.log('❌ No posts returned from WordPress API');
//         return null;
//       }
      
//       console.log('📊 Searching through', allPosts.length, 'posts');
      
//       // Try exact slug match
//       let foundPost = allPosts.find((p: WordPressBlogPost) => p.slug === slug);
      
//       if (!foundPost) {
//         // Try case-insensitive match
//         console.log('🔄 Trying case-insensitive match...');
//         foundPost = allPosts.find((p: WordPressBlogPost) => 
//           p.slug?.toLowerCase() === slug.toLowerCase()
//         );
//       }
      
//       if (!foundPost) {
//         // Try partial matches
//         console.log('🔄 Trying partial matches...');
//         foundPost = allPosts.find((p: WordPressBlogPost) => 
//           p.slug?.includes(slug) || slug.includes(p.slug || '')
//         );
//       }
      
//       if (!foundPost) {
//         // Try matching by title converted to slug
//         console.log('🔄 Trying title-to-slug matching...');
//         const titleSlug = slug.replace(/-/g, ' ').toLowerCase();
//         foundPost = allPosts.find((p: WordPressBlogPost) => {
//           const postTitle = p.title?.rendered?.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ');
//           return postTitle?.includes(titleSlug) || 
//                  postTitle?.replace(/\s+/g, '-').includes(slug);
//         });
//       }
      
//       if (foundPost) {
//         console.log('✅ Found post via manual search:', {
//           id: foundPost.id,
//           slug: foundPost.slug,
//           title: foundPost.title?.rendered
//         });
        
//         const categories = await this.getCategories();
//         const transformedPost = this.transformPost(foundPost, categories);
//         wordpressCache.set(cacheKey, transformedPost);
//         return transformedPost;
//       }
      
//       // Debug: Log available slugs
//       console.log('🐛 Available slugs (first 10):');
//       allPosts.slice(0, 10).forEach((post: WordPressBlogPost, index: number) => {
//         console.log(`${index + 1}. "${post.slug}" - ${post.title?.rendered}`);
//       });
      
//       console.log('❌ Post not found with slug:', slug);
//       return null;
      
//     } catch (error) {
//       console.error('❌ Error in getPostBySlug:', error);
//       return null;
//     }
//   }

//   // NEW: Get post by ID for debugging
//   async getPostById(id: number): Promise<BlogPost | null> {
//     try {
//       console.log('🔍 Fetching post by ID:', id);
      
//       const url = `${WORDPRESS_CONFIG.API_URL}/posts/${id}?_embed=true`;
//       const response = await fetch(url, {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//         },
//       });
      
//       if (!response.ok) {
//         console.error('❌ WordPress API error:', response.status, response.statusText);
//         return null;
//       }
      
//       const wpPost: WordPressBlogPost = await response.json();
//       console.log('✅ Found post by ID:', {
//         id: wpPost.id,
//         slug: wpPost.slug,
//         title: wpPost.title?.rendered
//       });
      
//       const categories = await this.getCategories();
//       return this.transformPost(wpPost, categories);
//     } catch (error) {
//       console.error('❌ Error fetching post by ID:', error);
//       return null;
//     }
//   }

//   // NEW: Debug method to list all available posts
//   async debugListAllPosts(): Promise<void> {
//     try {
//       console.log('🐛 DEBUG: Fetching all posts for debugging...');
//       const posts = await this.getPosts({ per_page: 50 });
      
//       console.log('🐛 DEBUG: All available posts:');
//       console.table(posts.map((post: WordPressBlogPost) => ({
//         ID: post.id,
//         Slug: post.slug,
//         Title: post.title?.rendered,
//         Status: post.status,
//         Date: post.date
//       })));
      
//       return;
//     } catch (error) {
//       console.error('❌ Debug list error:', error);
//     }
//   }

//   // Transform WordPress post to your blog post format
//   transformPost(wpPost: WordPressBlogPost, categories: WordPressCategory[]): BlogPost {
//     try {
//       // Get featured image URL
//       const featuredImage = this.extractFeaturedImageUrl(wpPost);

//       // Get category name
//       const categoryId = wpPost.categories[0];
//       const category = categories.find(cat => cat.id === categoryId);
//       const categoryName = category?.name || 'Uncategorized';

//       // Map category to your type system
//       const type = this.mapCategoryToType(categoryName);

//       // Calculate read time (rough estimate: 200 words per minute)
//       const wordCount = this.stripHtml(wpPost.content.rendered).split(/\s+/).filter(word => word.length > 0).length;
//       const readTime = Math.max(1, Math.ceil(wordCount / 200));

//       // Clean description from excerpt
//       let description = this.stripHtml(wpPost.excerpt.rendered);
//       if (description.length > 150) {
//         description = description.substring(0, 150) + '...';
//       }
//       if (!description) {
//         // Fallback to content if no excerpt
//         const contentText = this.stripHtml(wpPost.content.rendered);
//         description = contentText.substring(0, 150) + '...';
//       }

//       const transformedPost = {
//         id: wpPost.id,
//         image: featuredImage,
//         title: this.stripHtml(wpPost.title.rendered),
//         description,
//         date: new Date(wpPost.date).toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric'
//         }),
//         readTime: `${readTime} min read`,
//         type,
//         category: categoryName,
//         slug: wpPost.slug,
//         content: wpPost.content.rendered,
//         link: wpPost.link
//       };

//       console.log('✅ Transformed post:', {
//         id: transformedPost.id,
//         slug: transformedPost.slug,
//         title: transformedPost.title
//       });

//       return transformedPost;
//     } catch (error) {
//       console.error('❌ Error transforming post:', error);
//       throw error;
//     }
//   }

//   // Helper to extract featured image URL
//   private extractFeaturedImageUrl(wpPost: WordPressBlogPost): string {
//     // Check embedded featured media first
//     if (wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
//       return wpPost._embedded['wp:featuredmedia'][0].source_url;
//     }
    
//     // If no featured image, return fallback
//     return WORDPRESS_CONFIG.FALLBACK_IMAGE;
//   }

//   // Map WordPress categories to your type system
//   private mapCategoryToType(categoryName: string): string {
//     // Check exact mapping first
//     if (WORDPRESS_CONFIG.CATEGORY_MAPPING[categoryName]) {
//       return WORDPRESS_CONFIG.CATEGORY_MAPPING[categoryName];
//     }
    
//     // Fallback to keyword matching
//     const lowerCaseName = categoryName.toLowerCase();
//     if (lowerCaseName.includes('founder') || lowerCaseName.includes('playbook')) {
//       return 'founder';
//     }
//     if (lowerCaseName.includes('execution') || lowerCaseName.includes('guide')) {
//       return 'executive';
//     }
//     if (lowerCaseName.includes('case') || lowerCaseName.includes('study')) {
//       return 'case study';
//     }
//     return 'founder'; // default
//   }

//   // Strip HTML tags and decode entities
//   private stripHtml(html: string): string {
//     return html
//       .replace(/<[^>]*>/g, '')
//       .replace(/&nbsp;/g, ' ')
//       .replace(/&amp;/g, '&')
//       .replace(/&lt;/g, '<')
//       .replace(/&gt;/g, '>')
//       .replace(/&quot;/g, '"')
//       .replace(/&#39;/g, "'")
//       .trim();
//   }
// }


import { WordPressBlogPost, BlogPost, WordPressCategory } from '../types/blog';
import { wordpressCache } from '@/utils/wordpress-cache';
import { WORDPRESS_CONFIG } from '@/config/wordpress';

interface GetPostsParams {
  categories?: string;
  search?: string;
  per_page?: number;
  page?: number;
  slug?: string;
  exclude?: string;
}

export class WordPressService {
  private static instance: WordPressService;
  private categoriesCache: WordPressCategory[] | null = null;

  public static getInstance(): WordPressService {
    if (!WordPressService.instance) {
      WordPressService.instance = new WordPressService();
    }
    return WordPressService.instance;
  }

  async getPosts(params?: GetPostsParams): Promise<WordPressBlogPost[]> {
    try {
      const searchParams = new URLSearchParams();
      
      if (params?.categories) searchParams.append('categories', params.categories);
      if (params?.search) searchParams.append('search', params.search);
      if (params?.per_page) searchParams.append('per_page', params.per_page.toString());
      if (params?.page) searchParams.append('page', params.page.toString());
      if (params?.slug) searchParams.append('slug', params.slug);
      if (params?.exclude) searchParams.append('exclude', params.exclude);
      
      searchParams.append('_embed', 'true'); // Include featured media and other embedded data
      searchParams.append('status', 'publish'); // Only published posts
      searchParams.append('orderby', 'date'); // Order by date
      searchParams.append('order', 'desc'); // Newest first
      
      const cacheKey = `posts_${searchParams.toString()}`;
      const cachedData = wordpressCache.get<WordPressBlogPost[]>(cacheKey);
      
      if (cachedData && Array.isArray(cachedData)) {
        console.log('📋 Using cached posts data');
        return cachedData;
      }
      
      const url = `${WORDPRESS_CONFIG.API_URL}/posts?${searchParams.toString()}`;
      console.log('🌐 Fetching from WordPress:', url);
      
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        console.error('❌ WordPress API Response Error:', {
          status: response.status,
          statusText: response.statusText,
          url: url
        });
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
      }
      
      const data: WordPressBlogPost[] = await response.json();
      console.log('✅ WordPress API returned:', data.length, 'posts');
      
      // Log first few posts for debugging
      if (data.length > 0) {
        console.log('📝 Sample posts:', data.slice(0, 3).map((post) => ({
          id: post.id,
          slug: post.slug,
          title: post.title?.rendered,
          status: post.status
        })));
      }
      
      wordpressCache.set(cacheKey, data);
      
      return data;
    } catch (error) {
      console.error('❌ Error fetching WordPress posts:', error);
      return [];
    }
  }

  // Fetch categories
  async getCategories(): Promise<WordPressCategory[]> {
    if (this.categoriesCache) {
      return this.categoriesCache;
    }

    const cacheKey = 'categories';
    const cachedData = wordpressCache.get<WordPressCategory[]>(cacheKey);
    
    if (cachedData && Array.isArray(cachedData)) {
      this.categoriesCache = cachedData;
      return cachedData;
    }

    try {
      const response = await fetch(`${WORDPRESS_CONFIG.API_URL}/categories?per_page=100`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
      }
      
      const data: WordPressCategory[] = await response.json();
      this.categoriesCache = data;
      wordpressCache.set(cacheKey, data);
      
      return data;
    } catch (error) {
      console.error('Error fetching WordPress categories:', error);
      return [];
    }
  }

  // Get category by slug
  async getCategoryBySlug(slug: string): Promise<WordPressCategory | null> {
    const categories = await this.getCategories();
    return categories.find(cat => cat.slug === slug) || null;
  }

  // Get category ID by name
  async getCategoryIdByName(name: string): Promise<number | null> {
    const categories = await this.getCategories();
    const category = categories.find(cat => 
      cat.name.toLowerCase() === name.toLowerCase()
    );
    return category?.id || null;
  }

  // ENHANCED getPostBySlug with multiple fallback methods
  async getPostBySlug(slug: string): Promise<BlogPost | null> {
    console.log('🔍 Looking for blog post with slug:', slug);
    
    try {
      // Method 1: Check cache first
      const cacheKey = `post_${slug}`;
      const cachedData = wordpressCache.get<BlogPost>(cacheKey);
      
      if (cachedData && typeof cachedData === 'object' && cachedData.slug) {
        console.log('📋 Found cached post:', cachedData.title);
        return cachedData;
      }
      
      // Method 2: Direct API call by slug
      const url = `${WORDPRESS_CONFIG.API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=true&status=publish`;
      console.log('🌐 Fetching post by slug from WordPress:', url);
      
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        console.error('❌ WordPress API Response Error:', {
          status: response.status,
          statusText: response.statusText,
          url: url
        });
        // Don't throw here, try fallback methods
      } else {
        const data: WordPressBlogPost[] = await response.json();
        console.log('📊 Direct slug API returned:', data.length, 'posts');
        
        if (Array.isArray(data) && data.length > 0) {
          const categories = await this.getCategories();
          const transformedPost = this.transformPost(data[0], categories);
          wordpressCache.set(cacheKey, transformedPost);
          console.log('✅ Found post via direct slug lookup:', transformedPost.title);
          return transformedPost;
        }
      }
      
      console.log('⚠️ Direct slug lookup failed, trying fallback methods...');
      
      // Method 3: Try URL decoding (in case of special characters)
      try {
        const decodedSlug = decodeURIComponent(slug);
        if (decodedSlug !== slug) {
          console.log('🔄 Trying with decoded slug:', decodedSlug);
          const decodedResult = await this.getPostBySlug(decodedSlug);
          if (decodedResult) {
            return decodedResult;
          }
        }
      } catch (error) {
        console.log('⚠️ URL decoding failed, continuing...', error);
      }
      
      // Method 4: Search through all posts manually
      console.log('🔍 Searching through all posts...');
      const allPosts = await this.getPosts({ per_page: 100 });
      
      if (allPosts.length === 0) {
        console.log('❌ No posts returned from WordPress API');
        return null;
      }
      
      console.log('📊 Searching through', allPosts.length, 'posts');
      
      // Try exact slug match
      let foundPost = allPosts.find((p: WordPressBlogPost) => p.slug === slug);
      
      if (!foundPost) {
        // Try case-insensitive match
        console.log('🔄 Trying case-insensitive match...');
        foundPost = allPosts.find((p: WordPressBlogPost) => 
          p.slug?.toLowerCase() === slug.toLowerCase()
        );
      }
      
      if (!foundPost) {
        // Try partial matches
        console.log('🔄 Trying partial matches...');
        foundPost = allPosts.find((p: WordPressBlogPost) => 
          p.slug?.includes(slug) || slug.includes(p.slug || '')
        );
      }
      
      if (!foundPost) {
        // Try matching by title converted to slug
        console.log('🔄 Trying title-to-slug matching...');
        const titleSlug = slug.replace(/-/g, ' ').toLowerCase();
        foundPost = allPosts.find((p: WordPressBlogPost) => {
          const postTitle = p.title?.rendered?.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ');
          return postTitle?.includes(titleSlug) || 
                 postTitle?.replace(/\s+/g, '-').includes(slug);
        });
      }
      
      if (foundPost) {
        console.log('✅ Found post via manual search:', {
          id: foundPost.id,
          slug: foundPost.slug,
          title: foundPost.title?.rendered
        });
        
        const categories = await this.getCategories();
        const transformedPost = this.transformPost(foundPost, categories);
        wordpressCache.set(cacheKey, transformedPost);
        return transformedPost;
      }
      
      // Debug: Log available slugs
      console.log('🐛 Available slugs (first 10):');
      allPosts.slice(0, 10).forEach((post: WordPressBlogPost, index: number) => {
        console.log(`${index + 1}. "${post.slug}" - ${post.title?.rendered}`);
      });
      
      console.log('❌ Post not found with slug:', slug);
      return null;
      
    } catch (error) {
      console.error('❌ Error in getPostBySlug:', error);
      return null;
    }
  }

  // NEW: Get post by ID for debugging
  async getPostById(id: number): Promise<BlogPost | null> {
    try {
      console.log('🔍 Fetching post by ID:', id);
      
      const url = `${WORDPRESS_CONFIG.API_URL}/posts/${id}?_embed=true`;
      const response = await fetch(url, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        console.error('❌ WordPress API error:', response.status, response.statusText);
        return null;
      }
      
      const wpPost: WordPressBlogPost = await response.json();
      console.log('✅ Found post by ID:', {
        id: wpPost.id,
        slug: wpPost.slug,
        title: wpPost.title?.rendered
      });
      
      const categories = await this.getCategories();
      return this.transformPost(wpPost, categories);
    } catch (error) {
      console.error('❌ Error fetching post by ID:', error);
      return null;
    }
  }

  // NEW: Debug method to list all available posts
  async debugListAllPosts(): Promise<void> {
    try {
      console.log('🐛 DEBUG: Fetching all posts for debugging...');
      const posts = await this.getPosts({ per_page: 50 });
      
      console.log('🐛 DEBUG: All available posts:');
      console.table(posts.map((post: WordPressBlogPost) => ({
        ID: post.id,
        Slug: post.slug,
        Title: post.title?.rendered,
        Status: post.status,
        Date: post.date
      })));
      
      return;
    } catch (error) {
      console.error('❌ Debug list error:', error);
    }
  }

  // Transform WordPress post to your blog post format
  transformPost(wpPost: WordPressBlogPost, categories: WordPressCategory[]): BlogPost {
    try {
      // Get featured image URL
      const featuredImage = this.extractFeaturedImageUrl(wpPost);

      // Get category name
      const categoryId = wpPost.categories[0];
      const category = categories.find(cat => cat.id === categoryId);
      const categoryName = category?.name || 'Uncategorized';

      // Map category to your type system
      const type = this.mapCategoryToType(categoryName);

      // Calculate read time (rough estimate: 200 words per minute)
      const wordCount = this.stripHtml(wpPost.content.rendered).split(/\s+/).filter(word => word.length > 0).length;
      const readTime = Math.max(1, Math.ceil(wordCount / 200));

      // Clean description from excerpt
      let description = this.stripHtml(wpPost.excerpt.rendered);
      if (description.length > 150) {
        description = description.substring(0, 150) + '...';
      }
      if (!description) {
        // Fallback to content if no excerpt
        const contentText = this.stripHtml(wpPost.content.rendered);
        description = contentText.substring(0, 150) + '...';
      }

      const transformedPost = {
        id: wpPost.id,
        image: featuredImage,
        title: this.stripHtml(wpPost.title.rendered),
        description,
        date: new Date(wpPost.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        readTime: `${readTime} min read`,
        type,
        category: categoryName,
        slug: wpPost.slug,
        content: wpPost.content.rendered,
        link: wpPost.link
      };

      console.log('✅ Transformed post:', {
        id: transformedPost.id,
        slug: transformedPost.slug,
        title: transformedPost.title
      });

      return transformedPost;
    } catch (error) {
      console.error('❌ Error transforming post:', error);
      throw error;
    }
  }

  // Helper to extract featured image URL
  private extractFeaturedImageUrl(wpPost: WordPressBlogPost): string {
    // Check embedded featured media first
    if (wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return wpPost._embedded['wp:featuredmedia'][0].source_url;
    }
    
    // If no featured image, return fallback
    return WORDPRESS_CONFIG.FALLBACK_IMAGE;
  }

  // Map WordPress categories to your type system
  private mapCategoryToType(categoryName: string): string {
    // Check exact mapping first
    if (WORDPRESS_CONFIG.CATEGORY_MAPPING[categoryName]) {
      return WORDPRESS_CONFIG.CATEGORY_MAPPING[categoryName];
    }
    
    // Fallback to keyword matching
    const lowerCaseName = categoryName.toLowerCase();
    if (lowerCaseName.includes('founder') || lowerCaseName.includes('playbook')) {
      return 'founder';
    }
    if (lowerCaseName.includes('execution') || lowerCaseName.includes('guide')) {
      return 'executive';
    }
    if (lowerCaseName.includes('case') || lowerCaseName.includes('study')) {
      return 'case study';
    }
    return 'founder'; // default
  }

  // Strip HTML tags and decode entities
  private stripHtml(html: string): string {
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
  }
}