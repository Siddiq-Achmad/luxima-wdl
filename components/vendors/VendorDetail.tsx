"use client";
import React, { useEffect } from "react";
import LatestPosts from "../blogs/LatestPosts";

import { Divider } from "@heroui/react";
import VendorDetailHeader from "./VendorDetailHeader";

import { useVendorContext } from "@/context/VendorContext";
import VendorDetailContent from "./VendorDetailContent";
import VendorServices from "./VendorServices";
import VendorOwnerInfo from "./VendorOwnerInfo";
import VendorReviews from "./VendorReviews";
import { reviews } from "@/lib/reviewsData";

export default function VendorDetail({ slug }: { slug: string }) {
  const { vendor, error, loading, fetchVendorDetail } = useVendorContext();

  useEffect(() => {
    fetchVendorDetail(slug);
  }, [slug]);

  if (loading)
    return (
      <div className=" p-8 w-full h-[80vh] mx-auto text-center flex justify-center items-center">
        <h1 className="text-4xl font-bold p-6">Loading ... </h1>
        <p className="text-2xl font-light">| Fetching Vendor data </p>
      </div>
    );
  if (!vendor)
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
    <div className="pt-20 p-4 container mx-auto">
      <VendorDetailHeader />
      <Divider className="my-8" />
      <div className="flex flex-col lg:flex-row gap-8 p-4">
        <div className="w-full lg:w-2/3">
          <VendorDetailContent />
          <Divider className="my-4" />
          <section className="my-4">
            <h2 className="text-medium uppercase mb-4 font-semibold px-2">
              Services
            </h2>
            <VendorServices services={vendor.services} />
          </section>
          <Divider className="my-4" />
          <section className="my-4">
            <h2 className="text-medium uppercase mb-4 font-semibold px-2">
              Reviews
            </h2>
            <VendorReviews reviews={reviews} />
          </section>
        </div>
        <div className="w-full lg:w-1/3">
          <VendorOwnerInfo />
          <LatestPosts />
        </div>
      </div>
    </div>
  );
}
