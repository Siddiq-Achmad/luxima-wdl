import { Metadata, ResolvingMetadata } from "next";

import BlogDetail from "@/components/blogs/BlogDetail";
import AuthorInfo from "@/components/blogs/AuthorInfo";
import CommentSection from "@/components/blogs/CommentSection";
import LatestPosts from "@/components/blogs/LatestPosts";
import RelatedVendors from "@/components/blogs/RelatedVendors";
import { getRelatedVendors } from "@/utils/getRelatedVendors";
import axiosInstance from "@/lib/axios";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
// Metadata for SEO
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;
  try {
    const response = await axiosInstance.get(`/blog/${slug}`);
    const blog = response.data.data;

    if (!blog) {
      return {
        title: "Blog Not Found",
        description: "The requested blog could not be found.",
      };
    }
    return {
      title: blog?.title || "Blog Detail",
      description: blog?.excerpt || "Blog Detail",
      openGraph: {
        title: blog?.title || "Blog Detail",
        description: blog?.excerpt || "Blog Detail",
        images: [
          {
            url: blog?.image || "",
            width: 800,
            height: 600,
            alt: blog?.title || "Blog",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog?.title || "Blog Detail",
        description: blog?.excerpt || "Blog Detail",
        images: [blog?.image || ""],
        creator: blog?.author.name,
      },
    };
  } catch (error: any) {
    console.error("Error fetching blog data:", error.message);
    return {
      title: "Error",
      description: "An error occurred while fetching blog data.",
    };
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  try {
    const res = await axiosInstance.get(`/blog/${slug}`);
    const blog = res.data.data;

    if (!blog) {
      return (
        <div className=" p-8 w-full h-[80vh] mx-auto text-center flex justify-center items-center">
          <h1 className="text-7xl font-bold p-6">404</h1>
          <p className="text-4xl font-light">| Blog not found</p>
        </div>
      ); // Handle missing blog case
    }

    const relatedVendors = getRelatedVendors(blog.tags);

    return (
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 xl:p-12">
        <div className="flex flex-col md:flex-row gap-8 p-4">
          {/* Kolom Kiri */}
          <div className="w-full md:w-2/3">
            <BlogDetail blog={blog} />
            <CommentSection />
          </div>

          {/* Kolom Kanan */}
          <div className="w-full md:w-1/3">
            <AuthorInfo author={blog.author} />
            <RelatedVendors vendors={relatedVendors} />
            <LatestPosts />
          </div>
        </div>
      </div>
    );
  } catch (error: any) {
    console.error("Error fetching blog data : ", error.message);

    if (error.response?.status === 404) {
      return (
        <div className="container mx-auto h-screen p-4">
          <div className="flex p-8 text-center h-full w-full justify-center items-center">
            <h1 className="text-2xl lg:text-7xl  font-bold p-6">404</h1>
            <p className="text-md lg:text-4xl font-light">| Blog not found</p>
          </div>
        </div>
      );
    }

    return (
      <div className="container mx-auto h-screen p-4">
        <div className=" p-8 text-center flex  h-full w-full justify-center items-center">
          <h1 className="text-xl lg:text-7xl font-bold p-6 text-danger-500">
            Error
          </h1>
          <p className="text-md lg:text-4xl font-light">
            | An error occurred. Please try again later.
          </p>
        </div>
      </div>
    );
  }
}
