import { VendorCard } from "../vendors/vendor-card";
import { vendors } from "@/lib/vendorData";

export default function FeaturedVendors() {
  const featuredVendors = vendors.filter((vendor) => vendor.isFeatured);
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Wedding Vendors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our hand-picked selection of top-rated wedding
            professionals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVendors.map((vendor) => (
            <VendorCard key={vendor.id} {...vendor} />
          ))}
        </div>
      </div>
    </section>
  );
}
