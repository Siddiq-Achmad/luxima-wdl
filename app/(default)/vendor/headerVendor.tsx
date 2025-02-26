"use client";
import { Typewriter } from "@/components/typewriter";
import { getCategories } from "@/services/categoryService";
import { getCity } from "@/services/cityService";
import { Category } from "@/types/category";
import { City } from "@/types/city";
import { motion } from "framer-motion";
import { Filter, MapPin, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function HeaderVendor() {
  // const [selectedCategory, setSelectedCategory] = useState("All Categories");
  // const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [categories, setCategories] = useState<Category[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCategory = await getCategories();
        const dataCity = await getCity();
        // const data = await Promise.all([dataCategory, dataLocation]);
        // console.log("Category", dataCategory);
        // console.log("Location", dataLocation);

        // Update the state with the fetched data
        setCategories(dataCategory);
        setCities(dataCity);
      } catch (err) {
        setCategories([]);
        setCities([]);
      } finally {
      }
    };

    fetchData();
  }, []);
  return (
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
            {categories && categories.length > 0 ? (
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
            ) : (
              <Typewriter
                text={[
                  "Wedding Vendors",
                  "Photographer",
                  "Videographer",
                  "Venues",
                  "Florists",
                  "Caterers",
                  "Wedding Planners",
                  "Musicians",
                  "Decorators",
                ]}
                speed={70}
                className="text-primary"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={"_"}
              />
            )}
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
                      {city.city} - {city.state.toUpperCase()}
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
  );
}
