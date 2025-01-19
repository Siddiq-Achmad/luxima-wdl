"use client";
import { BlogCard } from "@/components/blogs/blog-card";
import { useBlogContext } from "@/context/BlogContext";

export default function LatestBlog() {
  const { blogs, isLoading } = useBlogContext();

  if (isLoading)
    return (
      <div className=" p-8 w-full h-[20vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-4xl font-bold p-6">Loading ... </h1>
        <p className="text-2xl font-light">| Fetching blog data </p>
      </div>
    );
  if (!blogs)
    return (
      <div className=" p-8 w-full h-[20vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-7xl font-bold p-6">404</h1>
        <p className="text-4xl font-light">| Blog not found</p>
      </div>
    );
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Wedding Planning Tips & Inspiration
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice and creative ideas to help you plan your perfect
            wedding day
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.length >= 3
            ? blogs
                .slice(-3)
                .map((post) => <BlogCard key={post.slug} {...post} />)
            : blogs.map((post) => <BlogCard key={post.slug} {...post} />)}
        </div>
      </div>
    </section>
  );
}
