// import { useState, useEffect, useCallback } from 'react';
// import { BlogPost } from '../types/blog';
// import { WordPressService } from '../lib/wordpress';

// interface UseWordPressPostsOptions {
//   category?: string;
//   search?: string;
//   perPage?: number;
// }

// export const useWordPressPosts = (options: UseWordPressPostsOptions = {}) => {
//   const [posts, setPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [hasMore, setHasMore] = useState(true);
//   const [page, setPage] = useState(1);

//   const wordpressService = WordPressService.getInstance();

//   const fetchPosts = useCallback(async (pageNum = 1, append = false) => {
//     if (!append) setLoading(true);
//     setError(null);

//     try {
//       const categories = await wordpressService.getCategories();
      
//       const params: any = { 
//         per_page: options.perPage || 12,
//         page: pageNum
//       };

//       if (options.category && options.category !== 'all') {
//         const categoryId = await wordpressService.getCategoryIdByName(options.category);
//         if (categoryId) {
//           params.categories = categoryId.toString();
//         }
//       }

//       if (options.search?.trim()) {
//         params.search = options.search.trim();
//       }

//       const wpPosts = await wordpressService.getPosts(params);
//       const transformedPosts = wpPosts.map(post => 
//         wordpressService.transformPost(post, categories)
//       );

//       if (append) {
//         setPosts(prev => [...prev, ...transformedPosts]);
//       } else {
//         setPosts(transformedPosts);
//       }

//       setHasMore(transformedPosts.length === (options.perPage || 12));
//       setPage(pageNum);
//     } catch (err) {
//       setError('Failed to fetch blog posts');
//       console.error('Error fetching posts:', err);
//     } finally {
//       setLoading(false);
//     }
//   }, [options.category, options.search, options.perPage]);

//   const loadMore = useCallback(() => {
//     if (!loading && hasMore) {
//       fetchPosts(page + 1, true);
//     }
//   }, [fetchPosts, loading, hasMore, page]);

//   const refresh = useCallback(() => {
//     setPage(1);
//     fetchPosts(1, false);
//   }, [fetchPosts]);

//   useEffect(() => {
//     setPage(1);
//     fetchPosts(1, false);
//   }, [fetchPosts]);

//   return {
//     posts,
//     loading,
//     error,
//     hasMore,
//     loadMore,
//     refresh
//   };
// };




import { useState, useEffect, useCallback, useMemo } from 'react';
import { BlogPost } from '../types/blog';
import { WordPressService } from '../lib/wordpress';

interface UseWordPressPostsOptions {
  category?: string;
  search?: string;
  perPage?: number;
}

interface PostsParams {
  per_page: number;
  page: number;
  categories?: string;
  search?: string;
}

export const useWordPressPosts = (options: UseWordPressPostsOptions = {}) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Memoize the service instance to avoid recreation
  const wordpressService = useMemo(() => WordPressService.getInstance(), []);

  const fetchPosts = useCallback(async (pageNum = 1, append = false) => {
    if (!append) setLoading(true);
    setError(null);

    try {
      const categories = await wordpressService.getCategories();
      
      const params: PostsParams = { 
        per_page: options.perPage || 12,
        page: pageNum
      };

      if (options.category && options.category !== 'all') {
        const categoryId = await wordpressService.getCategoryIdByName(options.category);
        if (categoryId) {
          params.categories = categoryId.toString();
        }
      }

      if (options.search?.trim()) {
        params.search = options.search.trim();
      }

      const wpPosts = await wordpressService.getPosts(params);
      const transformedPosts = wpPosts.map(post => 
        wordpressService.transformPost(post, categories)
      );

      if (append) {
        setPosts(prev => [...prev, ...transformedPosts]);
      } else {
        setPosts(transformedPosts);
      }

      setHasMore(transformedPosts.length === (options.perPage || 12));
      setPage(pageNum);
    } catch (err) {
      setError('Failed to fetch blog posts');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  }, [options.category, options.search, options.perPage, wordpressService]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchPosts(page + 1, true);
    }
  }, [fetchPosts, loading, hasMore, page]);

  const refresh = useCallback(() => {
    setPage(1);
    fetchPosts(1, false);
  }, [fetchPosts]);

  useEffect(() => {
    setPage(1);
    fetchPosts(1, false);
  }, [fetchPosts]);

  return {
    posts,
    loading,
    error,
    hasMore,
    loadMore,
    refresh
  };
};