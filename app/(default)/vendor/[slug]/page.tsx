import VendorDetail from "@/components/vendors/VendorDetail";

import { Vendor, vendors } from "@/lib/vendorData";

import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const { slug } = await params;
//   const vendor = vendors.find((v) => v.slug === slug);
//   return {
//     title: vendor?.name || "Vendor Detail",
//     description: vendor?.description,
//     openGraph: {
//       title: vendor?.name || "Vendor Detail",
//       description: vendor?.description,
//       images: [
//         {
//           url: vendor?.image || "",
//           width: 800,
//           height: 600,
//           alt: vendor?.name || "Vendor",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: vendor?.name || "Vendor Detail",
//       description: vendor?.description,
//       images: [vendor?.image || ""],
//     },
//   };
// }

// // Fungsi untuk menghasilkan params statis
// export function generateStaticParams() {
//   return vendors.map((vendor: Vendor) => ({
//     slug: vendor.slug,
//   }));
// }

// Halaman Detail Vendor
export default async function VendorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return <VendorDetail slug={slug} />;
}
