

"use client";

import { useEffect, useState } from "react";
import  CategoryCard  from "./categoryCard";
import { getCategories } from "@/services/categoryService";

interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className=" p-8 w-full h-[20vh] mx-auto text-center flex justify-center items-center ">
        <h1 className="text-4xl font-bold p-6">Loading ... </h1>
        <p className="text-2xl font-light">| Fetching Category Data </p>
      </div>
    );
  if (error)
    return (
  <div className=" p-8 w-full h-[20vh] mx-auto text-center flex justify-center items-center ">
        <h1 className="text-4xl font-bold p-6">Error  </h1>
        <p className="text-2xl font-light">| {error} </p>
      </div>
  );
  if (!categories)
    return (
      <div className=" p-8 w-full h-[20vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-7xl font-bold p-6">404</h1>
        <p className="text-4xl font-light">| Category not found</p>
      </div>
    );
  


return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vendor by category
          </p>
        </div>
        <div className="gap-2 md:gap-4 lg:gap-6 grid grid-cols-12 grid-rows-2">
          {categories.map((category) => (
        <CategoryCard
          key={category.slug}
          name={category.name}
          slug={category.slug}
          description={category.description}
          image={category.image}
        />
      ))}
        </div>
        </div>
      </section>
)
}