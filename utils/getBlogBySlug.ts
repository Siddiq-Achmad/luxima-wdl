import { blogs } from "@/lib/blogData";

export const getBlogBySlug = (slug: string) =>
  blogs.find((blog) => blog.slug === slug || null);
