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

export type { CaseStudy };
