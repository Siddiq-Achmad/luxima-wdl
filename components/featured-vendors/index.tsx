"use client";
import { useVendorContext } from "@/context/VendorContext";
import { VendorCard } from "../vendors/vendor-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FeaturedVendors() {
  const { vendors, loading } = useVendorContext();
  const FeaturedVendors = vendors?.filter(
    (vendor) => vendor.isFeatured && vendor.isActive
  );

  if (loading)
    return (
      <div className=" p-8 w-full h-60 mx-auto text-center flex justify-center items-center">
        <h1 className="text-4xl font-bold p-6">Loading ... </h1>
        <p className="text-2xl font-light">| Fetching Featured Vendor </p>
      </div>
    );
  if (!vendors)
    return (
      <div className=" p-8 w-full h-60 mx-auto text-center flex justify-center items-center">
        <h1 className="text-7xl font-bold p-6">404</h1>
        <p className="text-4xl font-light">| Fuatured Vendor not found</p>
      </div>
    );
  return (
    <section className="py-16">
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
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          freeMode={true}
          className="text-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent"
        >
          {FeaturedVendors?.map((vendor, index) => (
            <SwiperSlide key={index}>
              <VendorCard key={vendor.slug} {...vendor} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </section>
  );
}
