import { Metadata } from "next";
import { blogs, BlogProps } from "@/lib/blogData";
import { getBlogBySlug } from "@/utils/getBlogBySlug";
import { getAllBlogSlugs } from "@/utils/getAllBlogSlugs";
import BlogDetail from "@/components/blogs/BlogDetail";
import AuthorInfo from "@/components/blogs/AuthorInfo";
import CommentSection from "@/components/blogs/CommentSection";
import LatestPosts from "@/components/blogs/LatestPosts";
import RelatedVendors from "@/components/blogs/RelatedVendors";
import { getRelatedVendors } from "@/utils/getRelatedVendors";

// Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Gunakan await jika `params.slug` adalah nilai yang memerlukan resolusi

  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  return {
    title: blog?.title || "Blog",
    description: blog?.excerpt || "Blog Detail",
  };
}

// Generate static params
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs(); // Harus mengembalikan array slug
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

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
