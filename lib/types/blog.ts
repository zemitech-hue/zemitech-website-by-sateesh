export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string | null;
  contentMd: string;
  readMinutes: number;
  publishedAt: string;
  published: boolean;
};
