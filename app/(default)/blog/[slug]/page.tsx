import { Metadata, ResolvingMetadata } from "next";

import BlogDetail from "@/components/blogs/BlogDetail";

import axiosInstance from "@/lib/axios";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
// // Metadata for SEO
// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const slug = (await params).slug;
//   try {
//     const response = await axiosInstance.get(`/blog/${slug}`);
//     const blog = response.data.data;

//     if (!blog) {
//       return {
//         title: "Blog Not Found",
//         description: "The requested blog could not be found.",
//       };
//     }
//     return {
//       title: blog?.title || "Blog Detail",
//       description: blog?.excerpt || "Blog Detail",
//       openGraph: {
//         title: blog?.title || "Blog Detail",
//         description: blog?.excerpt || "Blog Detail",
//         images: [
//           {
//             url: blog?.image || "",
//             width: 800,
//             height: 600,
//             alt: blog?.title || "Blog",
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: blog?.title || "Blog Detail",
//         description: blog?.excerpt || "Blog Detail",
//         images: [blog?.image || ""],
//         creator: blog?.author.name,
//       },
//     };
//   } catch (error: any) {
//     console.error("Error fetching blog data:", error.message);
//     return {
//       title: "Error",
//       description: "An error occurred while fetching blog data.",
//     };
//   }
// }

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return <BlogDetail slug={slug} />;
}
