// app/(default)/vendors/[slug]/page.tsx

import VendorDetailContent from "@/components/vendors/VendorDetailContent";
import VendorDetailHeader from "@/components/vendors/VendorDetailHeader";
import VendorOwnerInfo from "@/components/vendors/VendorOwnerInfo";
import VendorReviews from "@/components/vendors/VendorReviews";
import VendorServices from "@/components/vendors/VendorServices";
import { VendorProvider } from "@/context/VendorContext";
import { Vendor, vendors } from "@/lib/vendorData";
import { getReviewsByVendor } from "@/utils/getReviewsByVendor";
import { getServicesByVendor } from "@/utils/getServicesByVendor";
import { Divider } from "@nextui-org/react";

// Fungsi untuk menghasilkan params statis
export function generateStaticParams() {
  return vendors.map((vendor: Vendor) => ({
    slug: vendor.slug,
  }));
}

// Halaman Detail Vendor
const VendorDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const vendor = vendors.find((v) => v.slug === slug);

  if (!vendor) {
    return <div>Vendor not found</div>;
  }

  const vendorReviews = getReviewsByVendor(vendor.id);
  const services = getServicesByVendor(vendor.id);

  return (
    <div className="pt-20 p-4 container mx-auto w-full">
      <VendorProvider vendor={vendor}>
        <VendorDetailHeader />
        <Divider className="my-8" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="col-span-4 md:col-span-3">
            <VendorDetailContent />
            <Divider className="my-4" />
            <section className="my-4">
              <h2 className="text-medium uppercase mb-4 font-semibold px-2">
                Services
              </h2>
              <VendorServices services={services} />
            </section>
            <Divider className="my-4" />
            <section className="my-4">
              <h2 className="text-medium uppercase mb-4 font-semibold px-2">
                Reviews
              </h2>
              <VendorReviews reviews={vendorReviews} />
            </section>
          </div>
          <div>
            <VendorOwnerInfo />
          </div>
        </div>
      </VendorProvider>
    </div>
  );
};

export default VendorDetailPage;
