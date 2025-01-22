"use client";
import { title } from "@/components/primitives";
import { useBlogContext } from "@/context/BlogContext";
import { motion } from "framer-motion";
import { BlogCard } from "@/components/blogs/blog-card";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@heroui/pagination";
import PaginationButtons from "@/components/blogs/PaginationButtons";
import { Button } from "@heroui/react";
import { ArrowBigLeftDashIcon, ArrowBigRightDashIcon } from "lucide-react";

export default function BlogPage() {
  const { blogs, pagination, loading, fetchBlogs } = useBlogContext();

  const handleNext = () => {
    if (pagination.currentPage < pagination.totalPages) {
      fetchBlogs(pagination.currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (pagination.currentPage > 1) {
      fetchBlogs(pagination.currentPage - 1);
    }
  };

  if (loading)
    return (
      <div className=" p-8 w-full h-[80vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-4xl font-bold p-6">Loading ... </h1>
        <p className="text-2xl font-light">| Fetching blog data </p>
      </div>
    );
  if (!blogs)
    return (
      <div className=" p-8 w-full h-[80vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-7xl font-bold p-6">404</h1>
        <p className="text-4xl font-light">| Blog not found</p>
      </div>
    );

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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6"
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} {...blog} />
            ))}
          </motion.div>
          <div className="flex justify-between items-center mt-4 my-6">
            <Button
              color="primary"
              variant="shadow"
              onPress={handlePrev}
              disabled={pagination.currentPage === 1}
              radius="full"
              className="text-white text-sm p-4  disabled:bg-stone-400 disabled:cursor-not-allowed"
            >
              <ArrowBigLeftDashIcon /> Previous
            </Button>
            <Pagination
              color="primary"
              variant="faded"
              total={pagination.totalPages}
              initialPage={pagination.currentPage}
              onChange={(page) => fetchBlogs(page)}
              radius="full"
              className="text-white "
            />
            <Button
              color="primary"
              variant="shadow"
              onPress={handleNext}
              disabled={pagination.currentPage === pagination.totalPages}
              radius="full"
              className="text-white text-sm p-4 disabled:bg-stone-400 disabled:cursor-not-allowed"
            >
              Next <ArrowBigRightDashIcon />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
