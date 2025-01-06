"use client";
import { title } from "@/components/primitives";

import { motion } from "framer-motion";
import { blogs, BlogProps } from "@/lib/blogData";
import { BlogCard } from "@/components/blogs/blog-card";
import { getAllBlogs } from "@/utils/getAllBlogs";

export default function BlogPage() {
  return (
    <div className="py-4">
      {/* Blog Header */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-4">Wedding Planning Blog</h1>
            <p className="text-lg text-muted-foreground">
              Expert advice, inspiration, and tips for planning your perfect
              wedding day
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 0.5,
              delay: 0.5,
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} {...blog} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
function getAllBlogS() {
  throw new Error("Function not implemented.");
}
