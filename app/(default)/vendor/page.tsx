"use client";
import {
  Search,
  MapPin,
  Filter,
  ArrowBigRightDashIcon,
  ArrowBigLeftDashIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { VendorCard } from "@/components/vendors/vendor-card";

import { useVendorContext } from "@/context/VendorContext";
import { Button } from "@heroui/button";
import { Pagination } from "@heroui/pagination";
import HeaderVendor from "./headerVendor";

export default function VendorsPage() {
  const { vendors, pagination, loading, error, fetchVendors } =
    useVendorContext();

  // const filteredVendors = vendors.filter((vendor) => {
  //   return (
  //     vendor.category === selectedCategory &&
  //     vendor.location === selectedLocation
  //   );
  // });

  const handleNext = () => {
    if (pagination.currentPage < pagination.totalPages) {
      fetchVendors(pagination.currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (pagination.currentPage > 1) {
      fetchVendors(pagination.currentPage - 1);
    }
  };

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

  if (error)
    return (
      <div className=" p-8 w-full h-[80vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-7xl font-bold p-6">Error</h1>
        <p className="text-4xl font-light">| {error}</p>
      </div>
    );

  return (
    <div className="pt-20">
      {/* Search Header */}
      <HeaderVendor />

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
              <VendorCard key={vendor.slug} {...vendor} />
            ))}
          </motion.div>

          <div className="flex justify-between items-center mt-8 my-6">
            <Button
              color="primary"
              variant="shadow"
              onPress={handlePrev}
              disabled={pagination.currentPage === 1}
              radius="full"
              className="text-white text-sm p-4  disabled:bg-stone-400 disabled:cursor-not-allowed"
            >
              <ArrowBigLeftDashIcon /> Previous
            </Button>
            <Pagination
              color="primary"
              variant="faded"
              total={pagination.totalPages}
              initialPage={pagination.currentPage}
              onChange={(page) => fetchVendors(page)}
              radius="full"
              className="text-white "
            />
            <Button
              color="primary"
              variant="shadow"
              onPress={handleNext}
              disabled={pagination.currentPage === pagination.totalPages}
              radius="full"
              className="text-white text-sm p-4 disabled:bg-stone-400 disabled:cursor-not-allowed"
            >
              Next <ArrowBigRightDashIcon />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
