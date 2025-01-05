import { blogs } from "@/lib/blogData";

export function getAllBlogSlugs() {
  return blogs.map((blog) => blog.slug);
}