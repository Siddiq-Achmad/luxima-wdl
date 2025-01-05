// app/(default)/vendors/[slug]/page.tsx

import VendorDetailContent from "@/components/vendors/VendorDetailContent";
import VendorDetailHeader from "@/components/vendors/VendorDetailHeader";
import VendorOwnerInfo from "@/components/vendors/VendorOwnerInfo";
import VendorReviews from "@/components/vendors/VendorReviews";
import Review from "@/components/vendors/review";
import { VendorProvider } from "@/context/VendorContext";
import { reviews, ReviewType } from "@/lib/reviewsData";
import { Vendor, vendors } from "@/lib/vendorData";
import { getReviewsByVendor } from "@/utils/getReviewsByVendor";

// Fungsi untuk menghasilkan params statis
export function generateStaticParams() {
  return vendors.map((vendor: Vendor) => ({
    slug: vendor.slug,
  }));
}

// Halaman Detail Vendor
const VendorDetailPage = ({ params }: { params: { slug: string } }) => {
  const vendor = vendors.find((v) => v.slug === params.slug);

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  const vendorReviews = getReviewsByVendor(vendor.id);
  console.log(vendorReviews);

  return (
    <div className="pt-20 p-4 container mx-auto max-w-7xl">
      <VendorProvider vendor={vendor}>
        <VendorDetailHeader />
        <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
          <div style={{ flex: 2 }}>
            <VendorDetailContent />
            <VendorReviews reviews={vendorReviews} />
          </div>
          <div style={{ flex: 1 }}>
            <VendorOwnerInfo />
          </div>
        </div>
      </VendorProvider>
    </div>
  );
};

export default VendorDetailPage;
