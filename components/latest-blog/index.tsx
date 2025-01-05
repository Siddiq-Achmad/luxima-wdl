import { BlogCard } from "@/components/blogs/blog-card";
import { BlogProps, blogs } from "@/lib/blogData";

export default function LatestBlog() {
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
