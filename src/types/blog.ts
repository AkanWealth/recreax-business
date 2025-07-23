// export interface WordPressBlogPost {
//   id: number;
//   date: string;
//   date_gmt: string;
//   guid: {
//     rendered: string;
//   };
//   modified: string;
//   modified_gmt: string;
//   slug: string;
//   status: string;
//   type: string;
//   link: string;
//   title: {
//     rendered: string;
//   };
//   content: {
//     rendered: string;
//     protected: boolean;
//   };
//   excerpt: {
//     rendered: string;
//     protected: boolean;
//   };
//   author: number;
//   featured_media: number;
//   comment_status: string;
//   ping_status: string;
//   sticky: boolean;
//   template: string;
//   format: string;
//   meta: any[];
//   categories: number[];
//   tags: number[];
//   _embedded?: {
//     'wp:featuredmedia'?: Array<{
//       id: number;
//       source_url: string;
//       alt_text: string;
//     }>;
//   };
//   _links: any;
// }

// export interface BlogPost {
//   id: number;
//   image: string;
//   title: string;
//   description: string;
//   date: string;
//   readTime: string;
//   type: string;
//   category: string;
//   slug: string;
//   content?: string;
//   link?: string;
// }

// export interface WordPressCategory {
//   id: number;
//   count: number;
//   description: string;
//   link: string;
//   name: string;
//   slug: string;
//   taxonomy: string;
//   parent: number;
//   meta: any[];
//   _links: any;
// }




// WordPress API response interfaces
interface WordPressRendered {
  rendered: string;
  protected?: boolean;
}

interface WordPressGuid {
  rendered: string;
}

interface WordPressFeaturedMedia {
  id: number;
  source_url: string;
  alt_text: string;
}

interface WordPressEmbedded {
  'wp:featuredmedia'?: WordPressFeaturedMedia[];
  [key: string]: unknown;
}

interface WordPressLinks {
  [key: string]: unknown;
}

interface WordPressMeta {
  [key: string]: unknown;
}

export interface WordPressBlogPost {
  id: number;
  date: string;
  date_gmt: string;
  guid: WordPressGuid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WordPressRendered;
  content: WordPressRendered;
  excerpt: WordPressRendered;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: WordPressMeta[];
  categories: number[];
  tags: number[];
  _embedded?: WordPressEmbedded;
  _links: WordPressLinks;
}

export interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  type: string;
  category: string;
  slug: string;
  content?: string;
  link?: string;
}

export interface WordPressCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: WordPressMeta[];
  _links: WordPressLinks;
}