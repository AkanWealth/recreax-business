interface CaseStudy {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  createdAt: string;
  tableOfContents: string[];
  content: string;
  shareUrl: string;
}
interface BlogPost {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
  authorImage: string;
  createdAt: string;
  tableOfContents: string[];
  content: string;
  shareUrl: string;
}


interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  type: "founder" | "executive" | "case study" | string;
  category: string;
}

export type { CaseStudy, BlogCardProps, BlogPost };
