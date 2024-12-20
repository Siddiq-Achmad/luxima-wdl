import { VendorCard } from "./vendor-card";

const FEATURED_VENDORS = [
  {
    id: "1",
    name: "Elegant Events Venue",
    category: "Wedding Venue",
    rating: 4.8,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    location: "Los Angeles, CA",
  },
  {
    id: "2",
    name: "Divine Florals",
    category: "Florist",
    rating: 4.9,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    location: "Beverly Hills, CA",
  },
  {
    id: "3",
    name: "Captured Moments",
    category: "Photography",
    rating: 5.0,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    location: "Santa Monica, CA",
  },
];

export default function FeaturedVendors() {
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
          {FEATURED_VENDORS.map((vendor) => (
            <VendorCard key={vendor.id} {...vendor} />
          ))}
        </div>
      </div>
    </section>
  );
}
