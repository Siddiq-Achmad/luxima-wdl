"use client";
import { title } from "@/components/primitives";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axiosInstance from "@/lib/axios";
import { Vendor } from "@/types/vendor";
import { Category } from "@/types/category";
import { VendorCard } from "@/components/vendors/vendor-card";
import { motion } from "framer-motion";
import { Button, Image } from "@heroui/react";
import { ArrowBigLeftDashIcon, ArrowBigRightDashIcon } from "lucide-react";
import router from "next/router";

export default function CategoryPage() {
  const { slug } = useParams();
  const [category, setCategory] = useState<Category | null>(null);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    axiosInstance
      .get(`/category/${slug}`)
      .then((response) => {
        setCategory(response.data.data || null);
        setVendors(response.data.data.vendors || []);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching vendors:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return (
      <div className=" p-8 w-full h-[80vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-4xl font-bold p-6">Loading ... </h1>
        <p className="text-2xl font-light">| Fetching Vendor data </p>
      </div>
    );
  if (!vendors)
    return (
      <div className=" p-8 w-full h-[80vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-7xl font-bold p-6">404</h1>
        <p className="text-4xl font-light">| Vendor not found</p>
      </div>
    );
  if (!category)
    return (
      <div className=" p-8 w-full h-[80vh] mx-auto text-center flex flex-col justify-center items-center">
        <div className="w-full">
          <p className="font-light text-2xl p-6 text-red-600"> {slug}</p>
        </div>
        <div className="w-full  text-center flex justify-center items-center">
          <h1 className="text-8xl font-bold p-6">404</h1>
          <p className="text-5xl font-light">| Page not found</p>
        </div>
      </div>
    );
  return (
    <div className="pt-20">
      {/* Search Header */}
      <section className="relative h-[20vh] min-h-[260px] bg-gray-900">
        <Image
          src={category?.image}
          alt={category?.name}
          width="100%"
          height={260}
          className="object-cover opacity-40"
        />

        <div className="absolute z-10 inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center text-white"
          >
            <h1 className={`${title()} text-5xl font-bold mb-4`}>
              {category?.name}
            </h1>
            <p className="text-xl  max-w-2xl mx-auto">
              {category?.description}
            </p>
          </motion.div>
        </div>
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
            {vendors &&
              vendors.length > 0 &&
              vendors.map((vendor) => (
                <VendorCard key={vendor.slug} {...vendor} />
              ))}
          </motion.div>

          {vendors && vendors.length > 0 ? (
            <div className="flex justify-between items-center mt-8 my-6">
              <Button
                color="primary"
                variant="shadow"
                //   onPress={handlePrev}
                //   disabled={pagination.currentPage === 1}
                radius="full"
                className="text-white text-sm p-4  disabled:bg-stone-400 disabled:cursor-not-allowed"
              >
                <ArrowBigLeftDashIcon /> Previous
              </Button>
              {/* <Pagination
                color="primary"
                variant="faded"
                //   total={pagination.totalPages}
                //   initialPage={pagination.currentPage}
                //   onChange={(page) => fetchVendors(page)}
                radius="full"
                className="text-white "
                /> */}
              <Button
                color="primary"
                variant="shadow"
                //   onPress={handleNext}
                //   disabled={pagination.currentPage === pagination.totalPages}
                radius="full"
                className="text-white text-sm p-4 disabled:bg-stone-400 disabled:cursor-not-allowed"
              >
                Next <ArrowBigRightDashIcon />
              </Button>
            </div>
          ) : (
            <div className=" p-8 w-full h-[35vh] mx-auto text-center flex justify-center items-center">
              <h1 className="text-7xl font-bold p-6">{category.name}</h1>
              <p className="text-4xl font-light">| No data in this category </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
