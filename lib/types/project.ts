export type ClientQuote = { quote: string; author: string; location: string };

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: "residential" | "commercial" | "infrastructure" | "interior";
  location: string;
  year: string;
  area: string;
  summary: string;
  description: string[];
  scope: string[];
  challenge: string;
  solution: string;
  coverImage: string | null;
  galleryUrls: string[];
  videoUrl?: string | null;
  clientQuote?: ClientQuote;
  published: boolean;
};

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "residential", label: "Residential" },
  { value: "commercial", label: "Commercial" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "interior", label: "Interior Design" },
] as const;
