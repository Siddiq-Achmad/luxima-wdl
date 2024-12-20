import { Search, MapPin, Filter } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  "All Categories",
  "Venues",
  "Photographers",
  "Florists",
  "Caterers",
  "Wedding Planners",
  "Musicians",
  "Decorators",
];

const LOCATIONS = [
  "All Locations",
  "Los Angeles",
  "New York",
  "Chicago",
  "Miami",
  "San Francisco",
  "Las Vegas",
  "Seattle",
];

export default function VendorsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Search Header */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">
              Find Your Perfect Wedding Vendors
            </h1>

            {/* Search Form */}
            <div className="bg-white dark:bg-gray-950 p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search vendors..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none">
                    {LOCATIONS.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none">
                    {CATEGORIES.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1519167758481-83f550bb49b3",
                        "1519225421980-715cb0215aed",
                        "1537633552985-df8429e8048b",
                      ][index % 3]
                    }`}
                    alt="Vendor"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {CATEGORIES[1 + (index % (CATEGORIES.length - 1))]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Vendor Name {index + 1}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      <MapPin className="inline-block w-4 h-4 mr-1" />
                      {LOCATIONS[1 + (index % (LOCATIONS.length - 1))]}
                    </span>
                    <Link
                      href={`/vendors/${index + 1}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
