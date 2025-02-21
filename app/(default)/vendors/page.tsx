"use client";
import { Search, MapPin, Filter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { vendors, Vendor } from "@/lib/vendorData";
import { VendorCard } from "@/components/vendors/vendor-card";
import { Typewriter } from "@/components/typewriter";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/categoryService";
import { getLocations } from "@/services/locationService";
import { Category } from "@/types/category";
import { City } from "@/types/city";

// const CATEGORIES = [
//   "All Categories",
//   "Venues",
//   "Photographers",
//   "Florists",
//   "Caterers",
//   "Wedding Planners",
//   "Musicians",
//   "Decorators",
// ];

// const LOCATIONS = [
//   "All Locations",
//   "Los Angeles",
//   "New York",
//   "Chicago",
//   "Miami",
//   "San Francisco",
//   "Las Vegas",
//   "Seattle",
// ];

export default function VendorsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [categories, setCategories] = useState<Category[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const filteredVendors = vendors.filter((vendor) => {
    return (
      vendor.category === selectedCategory &&
      vendor.location === selectedLocation
    );
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const dataCategory = await getCategories();
        const dataLocation = await getLocations();
        // const data = await Promise.all([dataCategory, dataLocation]);

        // Update the state with the fetched data
        setCategories(dataCategory);
        setCities(dataLocation);
      } catch (err) {
        setError("Failed to fetch categories");
        setCategories([]);
        setCities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-20">
      {/* Search Header */}
      <section className="bg-primary/5 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">
              <span>Find Your Perfect </span>
              <Typewriter
                // text={[
                //   "Wedding Vendors",
                //   "Photographer",
                //   "Videographer",
                //   "Venues",
                //   "Florists",
                //   "Caterers",
                //   "Wedding Planners",
                //   "Musicians",
                //   "Decorators",
                // ]}
                text={categories.map((category) => category.name)}
                speed={70}
                className="text-primary"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={"_"}
              />
              <span> in your area</span>
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
                    <option value="All Locations">All Locations</option>
                    {cities.map((city) => (
                      <option key={city.slug} value={city.city}>
                        {city.city} {city.state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary appearance-none">
                    <option value="All Categories">All Categories</option>
                    {categories.map((category) => (
                      <option key={category.slug} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Vendors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 0.5,
              delay: 0.5,
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {vendors.map((vendor) => (
              <VendorCard key={vendor.id} {...vendor} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
