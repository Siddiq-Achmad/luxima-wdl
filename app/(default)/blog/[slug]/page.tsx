import { Metadata } from "next";
import {
  blogs,
  BlogProps,
  getBlogBySlug,
  getAllBlogSlugs,
} from "@/lib/blogData";
import BlogDetail from "@/components/blogs/BlogDetail";
import AuthorInfo from "@/components/blogs/AuthorInfo";
import RelatedPosts from "@/components/blogs/RelatedPosts";
import CommentSection from "@/components/blogs/CommentSection";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import LatestPosts from "@/components/blogs/LatestPosts";
import RelatedVendors from "@/components/blogs/RelatedVendors";
import { getRelatedVendors } from "@/utils/getRelatedVendors";

// Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug); // Fungsi sinkron
  return {
    title: blog?.title || "Blog",
    description: blog?.excerpt || "Blog Detail",
  };
}
// Generate static params
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return <div>Blog not found</div>; // Handle missing blog case
  }

  const relatedVendors = getRelatedVendors(blog.tags);

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 xl:p-12">
      <div className="flex flex-col md:flex-row gap-8 p-4">
        {/* Kolom Kiri */}
        <div className="w-full md:w-2/3">
          <BlogDetail blog={blog} />
          <CommentSection blogSlug={blog.slug} />
        </div>

        {/* Kolom Kanan */}
        <div className="w-full md:w-1/3">
          <AuthorInfo author={blog.author} />

          <RelatedVendors vendors={relatedVendors} />
          <LatestPosts posts={blogs} />
        </div>
      </div>
    </div>
  );
}
