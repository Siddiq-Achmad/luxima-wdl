"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useVendorContext } from "@/context/VendorContext";
import Gallery from "../gallery";

export default function VendorGallery() {
  const { vendor } = useVendorContext();

  return (
    <div>
      <div className="container mb-4">
        {vendor?.gallery && <Gallery images={vendor.gallery} />}
      </div>

      {/* <Modal open={visible} onClose={closeModal} closeButton>
        <ModalBody>
          {activeImage && (
            <Image
              src={activeImage}
              alt="Active Portfolio Image"
              objectFit="contain"
            />
          )}
        </ModalBody>
      </Modal> */}
    </div>
  );
}
