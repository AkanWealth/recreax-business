export const WORDPRESS_CONFIG = {
  API_URL: 'https://public-api.wordpress.com/wp/v2/sites/recreaxltd.wordpress.com',
  // API_URL: 'https://recreaxltd.wordpress.com/wp-json/wp/v2',
  FALLBACK_IMAGE: '/images/newsletter.png',
  POSTS_PER_PAGE: 12,
  CACHE_TTL: 5 * 60 * 1000, // 5 minutes
  
  // Category mapping configuration
  CATEGORY_MAPPING: {
    'Founder Playbooks': 'founder',
    'Execution Guides': 'executive', 
    'Case Studies': 'case study'
  } as Record<string, string>,
  
  // Default categories to create in WordPress
  DEFAULT_CATEGORIES: [
    'Founder Playbooks',
    'Execution Guides', 
    'Case Studies'
  ]
};